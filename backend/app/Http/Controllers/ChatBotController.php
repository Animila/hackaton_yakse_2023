<?php

namespace App\Http\Controllers;

use Google\ApiCore\ValidationException;
use Google\Cloud\Dialogflow\V2\ContextsClient;
use Google\Cloud\Dialogflow\V2\QueryInput;
use Google\Cloud\Dialogflow\V2\SessionsClient;
use Google\Cloud\Dialogflow\V2\TextInput;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ChatBotController extends Controller
{
    public function __invoke(Request $request)
    {
        // получаем сообщение от пользователя
        $message = $request->input('message');

        // обрабатываем сообщение и генерируем ответ чат-бота
        $response = (string) $this->getResponse($message);

        // возвращаем ответ чат-бота

        return ( response()->json([
            'response' => $response
        ]));
    }

    // метод для обработки сообщения и генерации ответа
    private function getResponse($message)
    {
//        dd(storage_path('app/dialogflow/newagent-sadv-d0c0ed83896c.json'));
        $sessionsClient = new SessionsClient([
            'credentials' => storage_path('app/dialogflow/newagent-sadv-d0c0ed83896c.json')
        ]);
        $session = $sessionsClient->sessionName('newagent-sadv', uniqid());

        $textInput = new TextInput();
        $textInput->setText($message);
        $textInput->setLanguageCode('ru-RU');

        $queryInput = new QueryInput();
        $queryInput->setText($textInput);

        try {
            $response = $sessionsClient->detectIntent($session, $queryInput);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            dd('Ошибка: ' . $e->getMessage());
        }

        $queryResult = $response->getQueryResult();
        $responseText = $queryResult->getFulfillmentText();
        $outputContexts = $queryResult->getOutputContexts();

        if (!empty($outputContexts)) {
            try {
                $contextsClient = new ContextsClient([
                    'credentials' => storage_path('app/dialogflow/newagent-sadv-d0c0ed83896c.json')
                ]);
            } catch (ValidationException $e) {
                dd('Ошибка: ' . $e->getMessage());
            }
            foreach ($outputContexts as $outputContext) {
                $contextName = $outputContext->getName();
                $context = $contextsClient->getContext($contextName);
                $contextParameters = $context->getParameters();
                $contextLifespan = $outputContext->getLifespanCount();
                $contextsClient->close();

                $response->setOutputContexts([
                    [
                        'name' => $contextName,
                        'lifespanCount' => $contextLifespan,
                        'parameters' => $contextParameters->getFields()
                    ]
                ]);
            }
        }

        // Закрываем сессию и возвращаем ответ пользователю
        $sessionsClient->close();
        return $response->getQueryResult()->getFulfillmentText();
    }
}

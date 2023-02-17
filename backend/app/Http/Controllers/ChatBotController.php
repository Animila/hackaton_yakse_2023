<?php

namespace App\Http\Controllers;

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
        Log::info($message);

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
        $sessionsClient = new SessionsClient([
            'credentials' => storage_path('app/dialogflow/newagent-sadv-d0c0ed83896c.json')
        ]);
        $session = $sessionsClient->sessionName(env('DIALOGFLOW_PROJECT_ID'), uniqid());

        $textInput = new TextInput();
        $textInput->setText($message);
        $textInput->setLanguageCode('ru');

        $queryInput = new QueryInput();
        $queryInput->setText($textInput);

        $response = $sessionsClient->detectIntent($session, $queryInput);

        $sessionsClient->close();

        $responseText = $response->getQueryResult()->getFulfillmentText();
        return (string) $responseText;
    }
}

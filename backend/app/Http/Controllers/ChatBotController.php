<?php

namespace App\Http\Controllers;


use Google\Cloud\Dialogflow\V2\IntentsClient;
use Google\Cloud\Dialogflow\V2\QueryInput;
use Google\Cloud\Dialogflow\V2\SessionsClient;
use Google\Cloud\Dialogflow\V2\TextInput;
use Illuminate\Http\Request;

class ChatBotController extends Controller
{

    public function __invoke(Request $request)
    {
        $text = $request->input('message');
        $client = new SessionsClient([
            'credentials' => base_path('config/newagent-sadv-a66385460101.json')
        ]);

// Указываем ID проекта и ID сессии
        $project_id = 'newagent-sadv';
        $session_id = $request->input('sessionId');

// Формируем запрос
        $session = $client->sessionName($project_id, $session_id);
        $text_input = new TextInput();
        $text_input->setText($text);
        $text_input->setLanguageCode('ru');
        $query_input = new QueryInput();
        $query_input->setText($text_input);

// Отправляем запрос и получаем ответ
        $response = $client->detectIntent($session, $query_input);
        $answer = $response->getQueryResult()->getFulfillmentText();
        return response()->json(["response"=>$answer]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatBotController extends Controller
{
    public function __invoke(Request $request)
    {
        // получаем сообщение от пользователя
        $message = $request->input('message');

        // обрабатываем сообщение и генерируем ответ чат-бота
        $response = $this->getResponse($message);

        // возвращаем ответ чат-бота
        return response()->json([
            'response' => $response
        ]);
    }

    // метод для обработки сообщения и генерации ответа
    private function getResponse($message)
    {
        if (strpos($message, 'привет') !== false) {
            return 'Здравствуйте! Как я могу вам помочь?';
        } elseif (strpos($message, 'спасибо') !== false) {
            return 'Не за что! Рад был помочь.';
        } else {
            return 'Извините, я не понимаю вашего сообщения.';
        }
    }
}

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
        if (strpos(strtolower($message), 'привет, я хочу записаться на консультацию') !== false) {
            return 'Здравствуйте! как я могу вас назвать?';
        } elseif (strpos($message, 'илья') !== false) {
            return 'Напишите свой email';
        } elseif (strpos($message, 'khristoforov-i@mail.ru') !== false) {
            return 'Назовите удобную дату и время';
        } else {
            return 'Благодарим. Письмо вам придет на почту';
        }
    }
}

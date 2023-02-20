<?php

namespace App\Http\Controllers;

use Swift_SmtpTransport;
use Swift_Message;
use Swift_Mailer;
use Illuminate\Http\Request;

class WebHook extends Controller
{
    public function __invoke(Request $request)
    {

// Получаем параметры из запроса
//        $parameters = $request->all();

// Создаем транспорт для отправки письма
        $transport = (new Swift_SmtpTransport('smtp.mail.ru', 465))
            ->setUsername('h.yakse@itypas.ru')
            ->setPassword('lol12345');

// Создаем экземпляр SwiftMailer
        $mailer = new Swift_Mailer($transport);

// Создаем новое письмо
        $message = (new Swift_Message('Заголовок письма'))
            ->setFrom(['khristoforov-i@mail.ru' => 'Your Name'])
            ->setTo('khristoforov-i@mail.ru')
            ->setBody('Текст письма с параметрами: '.' Привет');

// Отправляем письмо
        $result = $mailer->send($message);
        return $result;
    }
}

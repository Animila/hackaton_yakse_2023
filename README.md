# Лендинг-сайт B2B Skillometer 

Разработка лэндинга, помогающего онлайн-школам увидеть выгоды и перспективы размещения курсов на платформе [Skillometer](https://skillometer.ru/), а также разработка чат-бота, формирующая воронку входящих для выявления потребностей и автоматизации процесса упаковки онлайн-школ на платформе.

## Стек-технологии

Фронтенд построен на [ReactJS](https://ru.reactjs.org/) (v8.11.0) и с использованием [ViteJS](https://vitejs.dev/). Для стилизации используется [TailwindCss](https://tailwindcss.ru/). 

В качестве бекенда же выступает PHP(v7.4.29-cli) и [Laravel](https://laravel.com/) (v10.0) для принятия заявок и обработки данных, а также сервис [Google Dialogflow](https://dialogflow.cloud.google.com/) для реализации чат-бота на основе машинного обучения.

Сервер развернут на серверах [ЭджЦентра](https://hosting.edgecenter.ru/billmgr) с установленной системой Ubuntu 20.04 и сервером Nginx. 

## Установка и запуск

Для установки проекта требуется иметь [Git](https://git-scm.com), [NodeJs](https://nodejs.org/ru/) (v16.16.0) и SQL база данных. Открыть консоль и прописать:

`git clone https://github.com/Animila/hackaton_yakse_2023.git`

`cd hackaton_yakse_2023`

Внутри лежит две папки - одна является бекенд частью, вторая - фронтенд частью. При настройке доменов для бекенда, следует прописать исходный путь таким образом: `<системный_путь>/hackaton_yakse_2023/backend/public`. Также следует установить все зависимости:
`composer i`; склонировать файл конфигурации - `cp .env.example .env` и настроить базу данных (адрес, порт, логин, пароль). После чего уже установить ключ шифрования: `php artisan key:generate`.

Для установки всех зависимостей у фронтенда, необходимо запустить установщик пакетов: `npm i -D`. Из-за проблем на стороне сервера, билд должен происходит до отправки на гит.

## Использование

ВНИМАНИЕ! Исправляйте url к боту на домен: `https://<домен_c_api>/api/chatbot`

## Авторы

> Дизайнеры: Кузнецов Данил, Ларчук Владислав
> Разработчик: Христофоров Илья
> Менеджер: Неробов Максим

## Лицензия

Данный проект разрабатывается в рамках хакатона. Все материалы, за исключением лицензированных изображений и материалов компаний, распространяются по GNU лицензии

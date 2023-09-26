# Фронтенд админки x5.io

Демо: [https://x5io-admin-panel-demo.netlify.app/](https://x5io-admin-panel-demo.netlify.app/)

## Подготовка

1. Клонируйте репозиторий
2. Для запуска потребуется Node.js и npm
3. Установите зависимости
```
npm i
```

## Запуск

```
PORT=1234 NEXT_PUBLIC_PORT=1234 npm run dev
```

Запустится локальный сервер на Next.js

Переменные `PORT` и `NEXT_PUBLIC_PORT` должны быть одинаковыми. `PORT` используется фреймворком Next.js для запуска сервера, а `NEXT_PUBLIC_PORT` для клиента Apollo (API).


## Сборка

```
npm run build && npm run start
```
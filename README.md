# Gulp Project

Описание проекта:

Этот проект включает в себя сборку стилей и скриптов с использованием Gulp. Он обрабатывает компиляцию SASS, минификацию CSS и JavaScript, а также предоставляет автоматическую генерацию префиксов с помощью `gulp-autoprefixer`. Также реализована настройка для синхронизации с локальным сервером через BrowserSync.

## Функциональность

- **Стили**: Компиляция и минификация SASS, добавление автопрефиксов для лучшей совместимости.
- **Скрипты**: Минификация и объединение JavaScript файлов.
- **HTML**: Копирование HTML файлов в папку `docs` для деплоя.
- **BrowserSync**: Автоматическое обновление браузера при изменении файлов.

## Настройка локального окружения

1. Убедитесь, что у вас установлен Node.js и npm.
2. Клонируйте репозиторий: `git clone [репозиторий]`.
3. Перейдите в корневую папку проекта: `cd ваш_проект`.
4. Установите зависимости: `npm install`.

## Запуск проекта

Для компиляции и минификации стилей и скриптов, а также для запуска локального сервера:

```bash
gulp
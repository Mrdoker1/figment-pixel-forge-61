# Feedback Form - Static HTML Version

Это статическая HTML версия формы обратной связи, преобразованная из React приложения. Приложение использует чистый HTML, обычный CSS и ванильный JavaScript.

## Функциональность

- **Адаптивный дизайн** - полностью адаптивная верстка для всех устройств
- **Интерактивная форма** - рейтинговые слайдеры с возможностью выбора от 1 до 5
- **Поля для комментариев** - текстовые области с автоматическим изменением размера
- **Валидация и отправка** - обработка формы с выводом данных в консоль
- **Доступность** - поддержка навигации с клавиатуры и ARIA атрибуты

## Структура проекта

```
/
├── index.html          # Главный HTML файл с разметкой и JavaScript
├── styles.css          # Все стили в отдельном файле
├── package.json        # Упрощенный package.json для статического проекта
└── README.md          # Документация
```

## Запуск проекта

### Метод 1: Простое открытие
Просто откройте `index.html` в браузере.

### Метод 2: Локальный сервер (рекомендуется)
```bash
# Установить зависимости
npm install

# Запустить dev сервер
npm run dev
```

Проект откроется на `http://localhost:3000`

### Метод 3: Альтернативные серверы
```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000

# Node.js
npx http-server . -p 3000

# PHP
php -S localhost:3000
```

## Особенности реализации

### CSS и стилизация
- Обычный CSS в отдельном файле `styles.css`
- Кастомные стили для всех элементов (кнопки, слайдеры, переходы)
- Полная адаптивность с медиа-запросами для разных устройств

### JavaScript функциональность
- **Управление состоянием** - объект `formData` хранит все данные формы
- **Динамическое создание элементов** - функции для генерации компонентов
- **Обработка событий** - рейтинги, комментарии, отправка формы
- **Автоматическое изменение размера** текстовых областей

### Доступность
- ARIA атрибуты для всех интерактивных элементов
- Поддержка навигации с клавиатуры
- Семантическая HTML разметка

## Вопросы формы

1. How happy are you with the current speed of the team?
2. How would you rate the team members' skill level?
3. Based on your experience with the team, how would you assess their independence and self-sufficiency in doing their work?
4. How proactive is the team? Do they make valuable contributions to the project or just follow instructions?
5. How would you rate the team's adherence to established best practices and conventions?
6. How would you rate the quality of the team's communications?
7. How would you rate the quality of the team's deliverables?

## Технологии

- **HTML5** - семантическая разметка
- **CSS3** - обычные стили с медиа-запросами
- **JavaScript (ES6+)** - интерактивность и логика
- **SVG** - иконки

## Поддержка браузеров

Проект совместим со всеми современными браузерами:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Развертывание

Для продакшн развертывания просто загрузите `index.html` на любой веб-сервер. Файл полностью самодостаточен и не требует дополнительных ресурсов.

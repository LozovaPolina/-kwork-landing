## Context

Новый статический лендинг для привлечения клиентов через Kwork. Проект создаётся с нуля. Команда работает с Telegram-ботами, веб-приложениями и сайтами. Главная цель страницы — конвертировать посетителей в лидов через форму обратной связи.

## Goals / Non-Goals

**Goals:**
- Визуально впечатляющий лендинг с Hero-анимацией
- Светлая/тёмная тема с переключателем
- Все CTA-кнопки и кликабельные элементы → плавный скролл к форме контактов
- Адаптивный дизайн (мобильные + десктоп)
- Два блока контактов: один в середине страницы, один в футере
- Быстрая загрузка (статические файлы, минимум зависимостей)

**Non-Goals:**
- Бэкенд/база данных (форма отправляется через внешний сервис, например Formspree или Telegram Bot API)
- CMS или динамический контент
- Многостраничность (SPA, только один HTML-файл)
- Авторизация пользователей

## Decisions

### Стек: React + Vite (JavaScript)
**Rationale**: Пользователь выбрал React без TypeScript. Vite обеспечивает быструю сборку и hot-reload. React удобен для переиспользуемых компонентов (карточки услуг, отзывов, портфолио) и управления состоянием темы через Context.
**Альтернативы**: Next.js — избыточен (SSR не нужен для лендинга); TypeScript — отклонён пользователем; Vanilla JS — отклонён пользователем.

### Стилизация: Tailwind CSS v3
**Rationale**: Пользователь выбрал Tailwind. Utility-first подход ускоряет вёрстку, встроенная тёмная тема через `darkMode: 'class'` в конфиге. Кастомные анимации Hero выносятся в `tailwind.config.js` (extend.keyframes/animation).
**Альтернативы**: CSS Modules — отклонено пользователем; styled-components — runtime overhead.

### Анимации: Framer Motion + CSS Animations
**Rationale**: Framer Motion — лучшая библиотека анимаций для React. Hero-блок: сложные entrance-анимации через `motion` компоненты. Scroll-анимации секций: `whileInView` prop. CSS keyframes — для фоновых/continuous анимаций.
**Альтернативы**: React Spring — сложнее в использовании; CSS-only — ограничено для Hero.

### Тема: Tailwind `darkMode: 'class'` + React Context + localStorage
**Rationale**: Tailwind `darkMode: 'class'` — переключение темы добавлением класса `dark` на `<html>`. `ThemeContext` управляет этим классом, `useEffect` синхронизирует с `localStorage` и `prefers-color-scheme`.

### Форма контактов: Formspree (или Telegram Bot API)
**Rationale**: Бесплатный Formspree обрабатывает отправку без бэкенда. Реализуется как дефолт, легко заменить на Telegram Bot API.

### Структура файлов
```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Services/
│   ├── Portfolio/
│   ├── Testimonials/
│   ├── Contact/
│   └── Footer/
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   └── useScrollTo.js
├── assets/
│   ├── images/
│   └── icons/
├── index.css             # Tailwind directives (@tailwind base/components/utilities)
├── App.jsx
└── main.jsx
```

## Risks / Trade-offs

- **Риск**: Framer Motion добавляет ~50KB к бандлу → Митигация: code splitting, lazy load секций ниже Hero.
- **Риск**: Форма Formspree имеет лимит 50 отправок/месяц на бесплатном плане → Митигация: переключиться на Telegram Bot API при превышении.
- **Риск**: CSS-анимации могут тормозить на слабых устройствах → Митигация: `prefers-reduced-motion` + Framer Motion `reducedMotion` prop.
- **Trade-off**: React чуть тяжелее Vanilla для лендинга, но компонентный подход упрощает поддержку и расширение.

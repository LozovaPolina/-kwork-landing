## 1. Инициализация проекта

- [x] 1.1 Создать проект: `npm create vite@latest . -- --template react`
- [x] 1.2 Установить зависимости: `framer-motion`, `react-icons`
- [x] 1.3 Установить и настроить Tailwind CSS v3: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
- [x] 1.4 Настроить `tailwind.config.js`: `darkMode: 'class'`, пути content, кастомные keyframes/animations для Hero
- [x] 1.5 Добавить Tailwind directives в `src/index.css` (`@tailwind base/components/utilities`)
- [x] 1.6 Создать структуру папок: `src/components/`, `src/context/`, `src/hooks/`, `src/assets/`
- [x] 1.7 Создать `src/hooks/useScrollTo.js` — хук для плавного скролла к `#contact`

## 2. ThemeContext и переключатель темы

- [x] 2.1 Создать `src/context/ThemeContext.jsx` с `ThemeProvider` и `useTheme` hook
- [x] 2.2 Реализовать логику: чтение `localStorage` → `prefers-color-scheme` → дефолт light
- [x] 2.3 Переключать класс `dark` на `<html>` при смене темы (Tailwind darkMode: 'class')
- [x] 2.4 Обернуть `<App>` в `ThemeProvider` в `main.jsx`

## 3. Navbar

- [x] 3.1 Создать компонент `src/components/Navbar/Navbar.jsx`
- [x] 3.2 Добавить логотип, навигационные ссылки и CTA-кнопку «Связаться»
- [x] 3.3 Встроить кнопку переключения темы (sun/moon иконки из react-icons)
- [x] 3.4 Стилизовать: fixed position, backdrop-blur, theme-aware цвета через Tailwind
- [x] 3.5 Реализовать бургер-меню для мобильных (hamburger + slide-down меню)
- [x] 3.6 Навесить `useScrollTo('contact')` на CTA-кнопку и мобильные ссылки

## 4. Hero-блок

- [x] 4.1 Создать `src/components/Hero/Hero.jsx`
- [x] 4.2 Добавить заголовок, подзаголовок и CTA-кнопку
- [x] 4.3 Реализовать анимации появления текста через Framer Motion (`initial`, `animate`, `transition` с delay)
- [x] 4.4 Реализовать фоновую анимацию: плавающие фигуры через CSS keyframes
- [x] 4.5 Добавить animated gradient background через CSS keyframes
- [x] 4.6 Стилизовать Hero: full-viewport-height, центрирование, theme-aware градиент
- [x] 4.7 Навесить `useScrollTo('contact')` на CTA-кнопку
- [x] 4.8 Добавить поддержку `prefers-reduced-motion` через Framer Motion `useReducedMotion`
- [x] 4.9 Проверить адаптивность: 320px, 768px, 1440px

## 5. Блок услуг (Services)

- [x] 5.1 Создать `src/components/Services/Services.jsx`
- [x] 5.2 Создать массив данных с 6+ услугами (иконка, название, описание)
- [x] 5.3 Наполнить карточки: Telegram-боты, лендинги, веб-приложения, интернет-магазины, парсеры, API-интеграции
- [x] 5.4 Реализовать staggered анимацию карточек через Framer Motion `whileInView` + `staggerChildren`
- [x] 5.5 Стилизовать карточки: hover-эффект, shadow, theme-aware цвета
- [x] 5.6 Адаптивная CSS Grid сетка: 3 → 2 → 1 колонки
- [x] 5.7 Навесить `useScrollTo('contact')` на клик по каждой карточке (cursor: pointer)

## 6. Первый блок контактов (середина страницы)

- [x] 6.1 Создать `src/components/Contact/Contact.jsx` с `id="contact"`
- [x] 6.2 Создать `ContactForm.jsx`: поля «Имя», «Контакт», «Сообщение», кнопка «Отправить»
- [x] 6.3 Реализовать управляемую форму через `useState`
- [x] 6.4 Добавить клиентскую валидацию: обязательные поля + inline ошибки
- [x] 6.5 Реализовать отправку через Formspree (fetch POST)
- [x] 6.6 Показывать сообщение об успехе после отправки
- [x] 6.7 Добавить блок ссылок: Telegram, WhatsApp, Email с иконками из react-icons
- [x] 6.8 Стилизовать: 2 колонки на десктопе (форма + контакты), 1 — на мобиле
- [x] 6.9 Анимация появления секции через Framer Motion `whileInView`

## 7. Блок портфолио (Portfolio)

- [x] 7.1 Создать `src/components/Portfolio/Portfolio.jsx`
- [x] 7.2 Создать массив данных с 6 проектами (название, стек, описание, emoji)
- [x] 7.3 Gradient placeholder вместо изображений
- [x] 7.4 Стилизовать карточки: overlay с описанием на hover, theme-aware
- [x] 7.5 Адаптивная CSS Grid сетка: 3 → 2 → 1 колонки
- [x] 7.6 Анимация staggered fade-in через Framer Motion `whileInView`
- [x] 7.7 Навесить `useScrollTo('contact')` на клик по каждой карточке

## 8. Блок отзывов (Testimonials)

- [x] 8.1 Создать `src/components/Testimonials/Testimonials.jsx`
- [x] 8.2 Создать массив данных с 5 отзывами (имя, роль, текст, рейтинг)
- [x] 8.3 Стилизовать карточки: quote-декор, avatar placeholder, звёздный рейтинг
- [x] 8.4 Реализовать горизонтальный scroll snap через CSS для мобильных
- [x] 8.5 Анимация появления карточек через Framer Motion `whileInView`

## 9. Footer с вторым блоком контактов

- [x] 9.1 Создать `src/components/Footer/Footer.jsx`
- [x] 9.2 Переиспользовать `ContactForm` в футере
- [x] 9.3 Добавить: копирайт, ссылки соцсетей (Telegram, WhatsApp, GitHub)
- [x] 9.4 Стилизовать footer: dark background, responsive

## 10. Сборка App.jsx и финальная полировка

- [x] 10.1 Собрать все секции в `App.jsx` в правильном порядке: Navbar → Hero → Services → Portfolio → Contact → Testimonials → Footer
- [x] 10.2 Все CTA-кнопки и кликабельные элементы ведут к `#contact`
- [x] 10.3 Переключение темы: localStorage, system preference, класс `dark` на `<html>`
- [x] 10.4 Адаптивность всех секций через Tailwind responsive классы
- [x] 10.5 `prefers-reduced-motion` через Framer Motion `useReducedMotion`
- [ ] 10.6 Оптимизировать изображения (WebP) — нет реальных изображений, используются градиенты
- [x] 10.7 Запустить `npm run build` и проверить production-сборку ✓
- [ ] 10.8 Подготовить к деплою на Vercel или GitHub Pages (`vite.config.js` base path)

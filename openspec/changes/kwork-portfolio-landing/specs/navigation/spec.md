## ADDED Requirements

### Requirement: Navigation bar is fixed and always visible
Навигационная панель SHALL быть зафиксирована вверху страницы (sticky/fixed) и оставаться видимой при скролле.

#### Scenario: Navbar stays on scroll
- **WHEN** пользователь прокручивает страницу вниз
- **THEN** навигационная панель остаётся зафиксированной вверху экрана

#### Scenario: Navbar has theme-aware background
- **WHEN** тема меняется
- **THEN** фон навигации адаптируется к текущей теме (светлый/тёмный)

### Requirement: All navigation links scroll to contact section
Все навигационные ссылки, кроме якорей к блокам услуг и портфолио, SHALL вести к форме контактов.

#### Scenario: Nav CTA click scrolls to contact
- **WHEN** пользователь нажимает CTA-кнопку или ссылку «Связаться» в навигации
- **THEN** страница плавно прокручивается к `#contact`

### Requirement: Navigation collapses to hamburger menu on mobile
На мобильных устройствах навигация SHALL сворачиваться в бургер-меню.

#### Scenario: Mobile hamburger renders
- **WHEN** ширина экрана меньше 768px
- **THEN** навигационные ссылки скрываются и появляется кнопка-бургер

#### Scenario: Hamburger click opens menu
- **WHEN** пользователь нажимает кнопку-бургер
- **THEN** выдвигается мобильное меню с навигационными ссылками

### Requirement: Navigation contains theme toggle button
Переключатель темы SHALL быть встроен в навигационную панель.

#### Scenario: Theme toggle is in nav
- **WHEN** пользователь смотрит на навигацию
- **THEN** видит переключатель светлой/тёмной темы справа в навбаре

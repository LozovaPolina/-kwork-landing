## ADDED Requirements

### Requirement: Hero block renders with animated content
Секция Hero SHALL отображаться первой на странице и содержать: заголовок, подзаголовок, CTA-кнопку и анимированный фоновый элемент (градиент или частицы).

#### Scenario: Page load shows animated hero
- **WHEN** пользователь открывает страницу
- **THEN** Hero-блок появляется с плавной анимацией (fade-in + slide-up) за 0.8–1.2 секунды

#### Scenario: Background animation runs continuously
- **WHEN** Hero-блок находится в видимой области экрана
- **THEN** фоновая анимация (градиентный сдвиг, плавающие фигуры или частицы) воспроизводится в бесконечном цикле

### Requirement: Hero CTA button scrolls to contact section
CTA-кнопка в Hero-блоке SHALL при клике плавно прокручивать страницу к блоку контактов.

#### Scenario: CTA click triggers smooth scroll
- **WHEN** пользователь нажимает кнопку CTA в Hero-блоке
- **THEN** страница плавно (smooth scroll) прокручивается к секции `#contact`

### Requirement: Hero is fully responsive
Hero-блок SHALL корректно отображаться на экранах от 320px до 2560px.

#### Scenario: Mobile display
- **WHEN** ширина экрана меньше 768px
- **THEN** текст масштабируется, анимация сохраняется, кнопка остаётся кликабельной

### Requirement: Hero respects reduced motion preference
Анимации Hero SHALL быть отключены для пользователей с `prefers-reduced-motion: reduce`.

#### Scenario: Reduced motion disabled animations
- **WHEN** у пользователя включена системная настройка "Уменьшить движение"
- **THEN** анимации Hero-блока отключаются, контент остаётся статичным

## ADDED Requirements

### Requirement: Services section displays service cards
Блок услуг SHALL отображать сетку карточек, каждая из которых содержит: иконку, название услуги и краткое описание.

#### Scenario: Services grid renders all cards
- **WHEN** пользователь скроллит до блока услуг
- **THEN** отображается сетка карточек минимум с 6 услугами (Telegram-боты, сайты-лендинги, веб-приложения, интернет-магазины, парсеры/автоматизация, API-интеграции)

#### Scenario: Cards animate on scroll
- **WHEN** карточки услуг входят в зону видимости
- **THEN** они появляются с анимацией (staggered fade-in снизу вверх)

### Requirement: Service card click scrolls to contact
Каждая карточка услуги SHALL при клике прокручивать страницу к форме контактов.

#### Scenario: Card click triggers scroll
- **WHEN** пользователь кликает по карточке услуги
- **THEN** страница плавно прокручивается к секции `#contact`

### Requirement: Services section is responsive
Сетка карточек SHALL адаптироваться к размеру экрана.

#### Scenario: Mobile layout
- **WHEN** ширина экрана меньше 768px
- **THEN** карточки выстраиваются в одну колонку

#### Scenario: Tablet layout
- **WHEN** ширина экрана от 768px до 1024px
- **THEN** карточки выстраиваются в две колонки

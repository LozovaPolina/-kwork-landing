## ADDED Requirements

### Requirement: Portfolio section displays team projects
Блок портфолио SHALL отображать карточки завершённых проектов команды с: превью-изображением, названием, стеком технологий и кратким описанием.

#### Scenario: Portfolio cards render
- **WHEN** пользователь скроллит до блока портфолио
- **THEN** отображаются карточки проектов (минимум 3–6), каждая с изображением и описанием

#### Scenario: Portfolio cards animate on scroll
- **WHEN** карточки портфолио входят в зону видимости
- **THEN** они появляются с анимацией появления (fade-in)

### Requirement: Portfolio card click scrolls to contact
Каждая карточка портфолио SHALL при клике направлять пользователя к форме контактов.

#### Scenario: Card click triggers scroll to contact
- **WHEN** пользователь кликает по карточке проекта
- **THEN** страница плавно прокручивается к секции `#contact`

### Requirement: Portfolio section is responsive
Карточки портфолио SHALL адаптироваться к размеру экрана.

#### Scenario: Responsive grid
- **WHEN** ширина экрана меньше 768px
- **THEN** карточки отображаются в одну колонку с полной шириной

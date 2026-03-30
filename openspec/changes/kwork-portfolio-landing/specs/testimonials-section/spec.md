## ADDED Requirements

### Requirement: Testimonials section displays client reviews
Блок отзывов SHALL отображать карточки отзывов клиентов с: именем клиента, текстом отзыва и звёздным рейтингом (1–5 звёзд).

#### Scenario: Testimonials render on page
- **WHEN** пользователь скроллит до блока отзывов
- **THEN** отображаются минимум 3 карточки отзывов с именем, текстом и рейтингом

#### Scenario: Testimonials animate on scroll
- **WHEN** блок отзывов входит в зону видимости
- **THEN** карточки появляются с анимацией (staggered fade-in)

### Requirement: Testimonials are displayed in a scrollable carousel on mobile
На мобильных устройствах отзывы SHALL отображаться в горизонтально прокручиваемом виде.

#### Scenario: Mobile carousel
- **WHEN** ширина экрана меньше 768px
- **THEN** карточки отзывов прокручиваются горизонтально (CSS scroll snap)

## ADDED Requirements

### Requirement: Contact section contains a contact form
Блок контактов SHALL содержать форму с полями: имя, контакт (телефон/Telegram/email) и сообщение, а также кнопку отправки.

#### Scenario: Form renders with all fields
- **WHEN** пользователь скроллит до блока контактов
- **THEN** отображается форма с полями «Имя», «Контакт», «Сообщение» и кнопкой «Отправить»

#### Scenario: Form validation prevents empty submission
- **WHEN** пользователь нажимает «Отправить» с незаполненными обязательными полями
- **THEN** отображаются inline-ошибки валидации, форма не отправляется

#### Scenario: Successful form submission shows confirmation
- **WHEN** пользователь заполняет все поля и нажимает «Отправить»
- **THEN** форма отправляется через Formspree и показывается сообщение об успехе («Сообщение отправлено!»)

### Requirement: Contact section appears twice on the page
Блок контактов SHALL присутствовать дважды: в середине страницы (после блока портфолио) и в футере страницы.

#### Scenario: Two contact blocks exist
- **WHEN** пользователь прокручивает всю страницу
- **THEN** он встречает блок контактов два раза — в середине и в конце страницы

### Requirement: Contact section is the anchor target for all CTAs
Все CTA-кнопки и кликабельные элементы на странице SHALL прокручивать страницу к первому блоку контактов (`#contact`).

#### Scenario: Any CTA scrolls to contact
- **WHEN** пользователь нажимает любую CTA-кнопку или кликабельный элемент на странице
- **THEN** страница плавно прокручивается к `#contact`

### Requirement: Contact section shows social/messenger links
Помимо формы, блок контактов SHALL содержать ссылки на способы связи (Telegram, WhatsApp, email).

#### Scenario: Contact links are visible
- **WHEN** пользователь видит блок контактов
- **THEN** рядом с формой отображаются иконки/ссылки Telegram, WhatsApp и email

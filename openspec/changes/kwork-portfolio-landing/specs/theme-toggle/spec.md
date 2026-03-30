## ADDED Requirements

### Requirement: Theme toggle switches between light and dark modes
Переключатель темы SHALL менять тему сайта между светлой и тёмной при нажатии.

#### Scenario: Toggle switches theme
- **WHEN** пользователь нажимает переключатель темы
- **THEN** тема мгновенно меняется (через `data-theme` атрибут на `<html>`) без перезагрузки страницы

#### Scenario: Dark mode applies correct colors
- **WHEN** активна тёмная тема
- **THEN** фон становится тёмным (#0f0f1a или аналог), текст — светлым, все компоненты адаптируются через CSS-переменные

### Requirement: Theme preference is persisted
Выбор темы SHALL сохраняться в `localStorage` и восстанавливаться при следующем посещении.

#### Scenario: Theme persists on reload
- **WHEN** пользователь выбрал тёмную тему и перезагружает страницу
- **THEN** тёмная тема применяется немедленно при загрузке (без мигания светлой темы)

### Requirement: Theme toggle respects system preference by default
При первом посещении тема SHALL устанавливаться по системным настройкам пользователя.

#### Scenario: System dark mode detected
- **WHEN** у пользователя системная тёмная тема и нет сохранённого выбора в localStorage
- **THEN** сайт отображается в тёмной теме по умолчанию

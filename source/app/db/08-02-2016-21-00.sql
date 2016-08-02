-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 02 2016 г., 20:52
-- Версия сервера: 5.6.29
-- Версия PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `portfolio`
--

-- --------------------------------------------------------

--
-- Структура таблицы `blog`
--

CREATE TABLE IF NOT EXISTS `blog` (
  `id` int(11) NOT NULL,
  `title` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `date` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `content` text COLLATE utf8_bin
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `blog`
--

INSERT INTO `blog` (`id`, `title`, `date`, `content`) VALUES
(1, 'Первая статья', '1 августа 2017', 'Вот так бестревожно (ведь все тревоги остались позади) я и обрету свой «литературный жанр». Во всяком случае, к чему решать заранее? Позже, если понадобится, я смогу расценить эти беспорядочные записи как черновик для более связного повествования. В самом деле, как знать, насколько интересной покажется мне моя прошлая жизнь, когда я начну о ней рассказывать? Может быть, я постепенно доведу свою историю до сегодняшнего дня и как бы наложу свое настоящее на свое прошедшее?'),
(2, 'Вторая статья', '2 августа 2015', 'Писать необходимо, это-то ясно, и притом совсем не так, как я писал прежде. Все, написанное мною прежде, было однодневками, на большее я и не претендовал. Эти же мои записи — для потомства, я не могу не надеяться, что они пребудут в веках. Да, этот предмет, эта книжечка, libellum, творение, которому я даю жизнь и которое словно бы уже обрело собственную волю, — для меня отныне как живое существо. Оно хочет жить, хочет уцелеть. обрету свой «литературный жанр». Во всяком случае, к чему решать заранее? Позже, если понадобится, я смогу расценить эти беспорядочные записи как черновик для более связного повествования. В самом деле, как знать, насколько интересной покажется мне моя прошлая жизнь, когда я начну о ней рассказывать? Может быть, я постепенно доведу свою историю до сегодняшнего дня и как бы наложу свое настоящее на свое прошедшее?'),
(3, 'Третья статья', '31 августа 2016', 'Я опять ходил купаться, но все еще не нашел самого подходящего места. Сегодня утром я просто бросился в воду с ближайших к дому скал, там, где они обрываются почти отвесно, но небольшие выступы и складки все же образуют некое подобие лестницы. Я называю это место моим «утесом», хотя оно даже во время отлива не выше двадцати футов. Вода, конечно, очень холодная, но уже через несколько секунд она словно обволакивает тело теплой серебряной кожей, словно обрастаешь чешуей, как тритон. Кровь, взбодренная холодом, ликует, наливаясь новой силой. Да, это моя стихия. Странно даже подумать, что я впервые увидел море только в четырнадцать лет.'),
(19, 'Море, Море', '20 января 1979', 'Главная особенность дома, для которой я не могу предложить рационального объяснения, состоит в том, что и на первом, и на втором этажах есть внутренняя комната. Другими словами, между передней комнатой и задней есть еще одна, без окон в наружной стене, освещаемая только через окно из комнаты, обращенной к морю, наверху — из гостиной, внизу — из кухни. Эти две нелепые внутренние комнаты — очень темные и совершенно пустые, в нижней стоит только большой продавленный диван, а в верхней — столик, и там же на стене затейливый чугунный кронштейн для лампы, единственный на весь дом. Занимать эти комнаты я ничем не намерен. Со временем уберу лишние стены и таким образом расширю гостиную и столовую. Обстановка в доме вообще небогатая, и своих вещей я привез очень мало. (Кровать, например, всего одна, ведь гостей я не жду!) Эта пустота меня вполне устраивает; в отличие от Джеймса я не собиратель, не накопитель. Я даже стал привязываться к некоторым из вещей миссис Чорни, которые мне пришлось купить, сколько я ни сопротивлялся. Особенно я полюбил большое овальное зеркало в прихожей. Вещи миссис Чорни здесь как-то к месту. Случайными кажутся те редкие предметы, которые я привез с собой. Я много чего распродал, когда расстался с моей просторной квартирой в Барнсе, а почти все остальное перевез в крошечный pied-a-terre[6] в Шепердс-Буше, свалил там кое-как и запер на ключ. Возвращаться туда мне страшновато. Сейчас я уже не могу понять, чего ради вообще сохранил за собой какое-то пристанище в Лондоне; это меня друзья уговорили.\n\nЯ сказал «друзья», а если подумать, как же мало их осталось после целой жизни, прожитой в театре. Каким дружелюбным и сердечным может казаться театр, каким тоскливым одиночеством он может обернуться. Великие меня покинули: Клемент Мэйкин умерла, Уилфрид Даннинг умер, Сидни Эш уехала в Стратфорд, провинция Онтарио, Фрицци Айтель погиб — процветает в Калифорнии.');

-- --------------------------------------------------------

--
-- Структура таблицы `skilles`
--

CREATE TABLE IF NOT EXISTS `skilles` (
  `id` int(11) NOT NULL,
  `skill` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `skilles_range` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `skilles`
--

INSERT INTO `skilles` (`id`, `skill`, `value`, `skilles_range`) VALUES
(1, 'html', 25, 1),
(2, 'css', 25, 1),
(3, 'javascript', 30, 1),
(4, 'php', 10, 2),
(5, 'mysql', 15, 2),
(6, 'git', 50, 3),
(7, 'gulp', 60, 3),
(8, 'bower', 30, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `skilles_range`
--

CREATE TABLE IF NOT EXISTS `skilles_range` (
  `id` int(11) NOT NULL,
  `skill_range` varchar(128) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `skilles_range`
--

INSERT INTO `skilles_range` (`id`, `skill_range`) VALUES
(1, 'Frontend'),
(2, 'Backend'),
(3, 'Workflow');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `surname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `patronymic` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `login` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `patronymic`, `login`, `password`) VALUES
(1, 'Мария', 'Гущина', 'Олеговна', 'admin', 'adWvPoCXy5Jb2'),
(2, 'Администратор', NULL, NULL, 'admin', 'adpexzg3FUZAk ');

-- --------------------------------------------------------

--
-- Структура таблицы `works`
--

CREATE TABLE IF NOT EXISTS `works` (
  `id` int(11) NOT NULL,
  `title` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `technologies` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `picture` text COLLATE utf8_bin,
  `link` text COLLATE utf8_bin
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `works`
--

INSERT INTO `works` (`id`, `title`, `technologies`, `picture`, `link`) VALUES
(1, 'Первый сайт', 'HTML, CSS, JAVASCRIPT', '/assets/img/work-1.png', 'http://tamnun.ru/'),
(2, 'Второй сайт', 'HTML, CSS, JAVASCRIPT, PHP', '/assets/img/work-2.png', 'http://tamnun.ru/'),
(3, 'Третий сайт', 'HTML, CSS, PHP', '/assets/img/work-3.png', 'http://tamnun.ru/'),
(4, 'Четвертый сайт', 'HTML, CSS', '/assets/img/work-4.png', 'http://tamnun.ru/');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `skilles`
--
ALTER TABLE `skilles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `skilles_range` (`skilles_range`);

--
-- Индексы таблицы `skilles_range`
--
ALTER TABLE `skilles_range`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `works`
--
ALTER TABLE `works`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT для таблицы `skilles`
--
ALTER TABLE `skilles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT для таблицы `skilles_range`
--
ALTER TABLE `skilles_range`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `works`
--
ALTER TABLE `works`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `skilles`
--
ALTER TABLE `skilles`
  ADD CONSTRAINT `skilles_ibfk_1` FOREIGN KEY (`skilles_range`) REFERENCES `skilles_range` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

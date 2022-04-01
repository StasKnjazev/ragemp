-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.7.33 - MySQL Community Server (GPL)
-- Операционная система:         Win64
-- HeidiSQL Версия:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Дамп структуры для таблица basemode.accounts
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `reg_socialClub_id` text NOT NULL,
  `reg_socialClub_name` text NOT NULL,
  `reg_socialClub_serial` text NOT NULL,
  `last_socialClub_serial` text NOT NULL,
  `reg_hwid` text NOT NULL,
  `last_hwid` text NOT NULL,
  `reg_ip` text NOT NULL,
  `last_ip` text NOT NULL,
  `reg_date` text NOT NULL,
  `last_date` text NOT NULL,
  `isWhiteList` tinyint(4) NOT NULL DEFAULT '0',
  `whitelist_password` text NOT NULL,
  `isBlackList` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы basemode.accounts: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;

-- Дамп структуры для таблица basemode.blips
CREATE TABLE IF NOT EXISTS `blips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sprite` int(11) NOT NULL DEFAULT '0',
  `position` text NOT NULL,
  `name` text NOT NULL,
  `scale` float NOT NULL DEFAULT '1',
  `color` int(11) NOT NULL DEFAULT '0',
  `alpha` int(11) NOT NULL DEFAULT '255',
  `drawDistance` float NOT NULL DEFAULT '50',
  `shortRange` tinyint(4) NOT NULL DEFAULT '1',
  `rotation` float NOT NULL DEFAULT '0',
  `dimension` int(11) NOT NULL DEFAULT '0',
  `radius` float NOT NULL DEFAULT '0',
  `display` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы basemode.blips: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `blips` DISABLE KEYS */;
INSERT INTO `blips` (`id`, `sprite`, `position`, `name`, `scale`, `color`, `alpha`, `drawDistance`, `shortRange`, `rotation`, `dimension`, `radius`, `display`) VALUES
	(1, 304, '{"x": 0, "y": 0, "z": 71}', 'Test', 1, 0, 255, 50, 1, 0, 0, 0, 0),
	(2, 229, '{"x": 23, "y": 56, "z": 71}', 'Test2', 1, 0, 255, 50, 1, 0, 0, 0, 0);
/*!40000 ALTER TABLE `blips` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

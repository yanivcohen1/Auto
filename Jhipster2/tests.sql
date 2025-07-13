-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015 年 6 月 22 日 16:51
-- サーバのバージョン： 5.6.16
-- PHP Version: 5.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `testmanage`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `tests`
--

CREATE TABLE IF NOT EXISTS `tests` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `test_name` varchar(255) NOT NULL,
  `class_name` varchar(255) NOT NULL,
  `parameter_name` varchar(255) DEFAULT NULL,
  `parameter_value` varchar(255) DEFAULT NULL,
  `suite_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tests_suite_id` (`suite_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=59 ;

--
-- テーブルのデータのダンプ `tests`
--

INSERT INTO `tests` (`id`, `test_name`, `class_name`, `parameter_name`, `parameter_value`, `suite_id`) VALUES
(21, 'BuildClients', 'com.wh.auto.clients.TestBuildClients', 'parametersFileName', 'ClientsTest.ini', 3),
(22, 'SportBanner', 'com.wh.auto.general.TestSportBanner', 'parametersFileName', 'SportBanner.csv', 3),
(23, 'Affutd', 'com.wh.auto.affutd.TestAffutd', 'parametersFileName', 'Affutd.ini', 3),
(24, 'Freespin', 'com.wh.auto.prestige.TestFreespin', 'parametersFileName', 'FreespinTest.ini', 3),
(25, 'PrestigeClientEn', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'PrestigeEnClient', 3),
(26, 'PrestigeClientDe', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'PrestigeDeClient', 3),
(27, 'JoylandClientEn', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'JoylandEnClient', 3),
(28, 'JoylandClientDe', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'JoylandDeClient', 3),
(29, 'RubyBingoEn', 'com.wh.auto.clients.TestRunClients', 'test-path', '..\\RubyBingoEn\\bin\\Release\\RubyBingoEn.dll', 3),
(30, 'SkykingClientEn', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'SkykingEnClient', 3),
(31, 'SkykingClientDe', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'SkykingDeClient', 3),
(33, 'WhccClientEn', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'WilliamhillEnClient', 3),
(34, 'WhccClientDe', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'WilliamhillDeClient', 3),
(35, 'WhccWebEn', 'com.wh.auto.whcc.TestDeposit', 'parametersFileName', 'DepositEN.xml', 3),
(36, 'WhccWebDe', 'com.wh.auto.whcc.TestDeposit', 'parametersFileName', 'DepositDE.xml', 3),
(37, 'WHccWebLoginEn', 'com.wh.auto.whcc.TestLogin', 'parametersFileName', 'LoginEN.xml', 3),
(38, 'WhccWebLoginDe', 'com.wh.auto.whcc.TestLogin', 'parametersFileName', 'LoginDE.xml', 3),
(39, 'EurograndClientEn', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'EurograndEnClient', 3),
(40, 'EurograndClientDe', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'EurograndDeClient', 3),
(41, 'EurograndClientEnNew', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'EurograndEnNewClient', 3),
(42, 'EurograndClientDeNew', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'EurograndDeNewClient', 3),
(43, 'EurograndWebDE', 'com.wh.auto.eurogrand.TestDeposit', 'parametersFileName', 'DepositDE.xml', 3),
(44, 'EurograndWebEN', 'com.wh.auto.eurogrand.TestDeposit', 'parametersFileName', 'DepositEN.xml', 3),
(45, 'EurograndWebLoginEN', 'com.wh.auto.eurogrand.TestLogin', 'parametersFileName', 'LoginDE.xml', 3),
(46, 'EurograndWebLoginDE', 'com.wh.auto.eurogrand.TestLogin', 'parametersFileName', 'LoginEN.xml', 3),
(47, '21NovaClientEn', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'Nova21EnClient', 3),
(48, '21NovaClientDe', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'Nova21DeClient', 3),
(49, '21NovaClientRu', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'Nova21RuClient', 3),
(50, '21NovaWebEn', 'com.wh.auto.nova21.TestDeposit21Nova', 'parametersFileName', 'nova21DepositEN.xml', 3),
(51, '21NovaClientEnNew', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'Nova21EnNewClient', 3),
(52, '21NovaClientDeNew', 'com.wh.auto.clients.TestRunClientsInSingleDll', 'test-name', 'Nova21DeNewClient', 3),
(53, '21NovaWebDe', 'com.wh.auto.nova21.TestDeposit21Nova', 'parametersFileName', 'nova21DepositDE.xml', 3),
(54, '21NovaWebRu', 'com.wh.auto.nova21.TestDeposit21Nova', 'parametersFileName', 'nova21DepositRU.xml', 3),
(55, '21NovaWebLoginEn', 'com.wh.auto.nova21.TestLogin21Nova', 'parametersFileName', 'nova21LoginEN.xml', 3),
(56, '21NovaWebLoginDe', 'com.wh.auto.nova21.TestLogin21Nova', 'parametersFileName', 'nova21LoginDE.xml', 3),
(57, '21NovaWebLoginRu', 'com.wh.auto.nova21.TestLogin21Nova', 'parametersFileName', 'nova21LoginRU.xml', 3),
(58, 'Tracing', 'com.wh.auto.ptadmin.TestPTAdvertiser', 'parametersFileName', 'PTAdvertiser.ini', 3);

--
-- ダンプしたテーブルの制約
--

--
-- テーブルの制約 `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `fk_tests_suite_id` FOREIGN KEY (`suite_id`) REFERENCES `suite` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

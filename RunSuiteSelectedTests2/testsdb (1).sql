-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2014 at 12:04 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `testsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE IF NOT EXISTS `classes` (
  `ClassID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` varchar(255) DEFAULT NULL,
  `TestId` int(11) NOT NULL,
  PRIMARY KEY (`ClassID`),
  KEY `FK_mikvu00m0j2jqwft1dtja3jyq` (`TestId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`ClassID`, `ClassName`, `TestId`) VALUES
(2, 'com.wh.auto.general.TestSportBanner', 2),
(3, 'com.wh.auto.affutd.TestAffutd', 3),
(4, 'com.wh.auto.prestige.TestFreespin', 4),
(5, 'com.wh.auto.clients.TestRunClientsInSingleDll', 5),
(6, 'com.wh.auto.clients.TestRunClients', 6),
(7, 'com.wh.auto.clients.TestRunClientsInSingleDll', 7),
(8, 'com.wh.auto.clients.TestRunClientsInSingleDll', 8),
(9, 'com.wh.auto.clients.TestRunClientsInSingleDll', 9),
(10, 'com.wh.auto.clients.TestRunClientsInSingleDll', 10),
(11, 'com.wh.auto.clients.TestRunClients', 11),
(12, 'com.wh.auto.clients.TestRunClients', 12),
(13, 'com.wh.auto.clients.TestRunClientsInSingleDll', 13),
(14, 'com.wh.auto.clients.TestRunClientsInSingleDll', 14),
(15, 'com.wh.auto.clients.TestRunClientsInSingleDll', 15),
(16, 'com.wh.auto.clients.TestRunClientsInSingleDll', 16),
(17, 'com.wh.auto.clients.TestRunClientsInSingleDll', 17),
(18, 'com.wh.auto.pt_admin.Test_PT_Advertiser', 18),
(19, 'com.wh.auto.clients.TestRunClientsInSingleDll', 19),
(20, 'com.wh.auto.clients.TestRunClientsInSingleDll', 20),
(22, 'com.wh.auto.general.TestSportBanner', 22),
(23, 'com.wh.auto.affutd.TestAffutd', 23),
(24, 'com.wh.auto.prestige.TestFreespin', 24),
(25, 'com.wh.auto.clients.TestRunClientsInSingleDll', 25),
(26, 'com.wh.auto.clients.TestRunClientsInSingleDll', 26),
(27, 'com.wh.auto.clients.TestRunClientsInSingleDll', 27),
(28, 'com.wh.auto.clients.TestRunClients', 28),
(29, 'com.wh.auto.clients.TestRunClientsInSingleDll', 29),
(30, 'com.wh.auto.clients.TestRunClientsInSingleDll', 30),
(31, 'com.wh.auto.pt_admin.Test_PT_Advertiser', 31);

-- --------------------------------------------------------

--
-- Table structure for table `parameters`
--

CREATE TABLE IF NOT EXISTS `parameters` (
  `ParameterID` int(11) NOT NULL AUTO_INCREMENT,
  `ParameterName` varchar(255) DEFAULT NULL,
  `ParameterValue` varchar(255) DEFAULT NULL,
  `TestId` int(11) NOT NULL,
  PRIMARY KEY (`ParameterID`),
  KEY `FK_q3m7cxc6i0v8rn9epme368v6j` (`TestId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `parameters`
--

INSERT INTO `parameters` (`ParameterID`, `ParameterName`, `ParameterValue`, `TestId`) VALUES
(2, 'parametersFileName', 'SportBanner.csv', 2),
(3, 'parametersFileName', 'Affutd.ini', 3),
(4, 'parametersFileName', 'FreespinTest.ini', 4),
(5, 'test-name', 'EurograndDeClient', 5),
(6, 'test-path', '..\\EurograndWebDe\\bin\\Release\\EurograndWebDe.dll', 6),
(7, 'test-name', 'EurograndEnClient', 7),
(8, 'test-name', 'PrestigeEnClient', 8),
(9, 'test-name', 'WilliamhillEnClient', 9),
(10, 'test-name', 'JoylandEnClient', 10),
(11, 'test-path', '..\\RubyBingoEn\\bin\\Release\\RubyBingoEn.dll', 11),
(12, 'test-path', '..\\EurograndWebEn\\bin\\Release\\EurograndWebEn.dll', 12),
(13, 'test-name', 'SkykingEnClient', 13),
(14, 'test-name', 'JoylandDeClient', 14),
(15, 'test-name', 'PrestigeDeClient', 15),
(16, 'test-name', 'SkykingDeClient', 16),
(17, 'test-name', 'WilliamhillDeClient', 17),
(18, 'parametersFileName', 'PT_Advertiser.ini', 18),
(19, 'test-name', 'Nova21DeClient', 19),
(20, 'test-name', 'Nova21EnClient', 20),
(22, 'parametersFileName', 'SportBanner.csv', 22),
(23, 'parametersFileName', 'Affutd.ini', 23),
(24, 'parametersFileName', 'FreespinTest.ini', 24),
(25, 'test-name', 'Nova21DeClient', 25),
(26, 'test-name', 'Nova21EnClient', 26),
(27, 'test-name', 'EurograndDeClient', 27),
(28, 'test-path', '..\\EurograndWebDe\\bin\\Release\\EurograndWebDe.dll', 28),
(29, 'test-name', 'EurograndEnClient', 29),
(30, 'test-name', 'PrestigeEnClient', 30),
(31, 'parametersFileName', 'PT_Advertiser.ini', 31);

-- --------------------------------------------------------

--
-- Table structure for table `suites`
--

CREATE TABLE IF NOT EXISTS `suites` (
  `SuitesId` int(11) NOT NULL AUTO_INCREMENT,
  `SuiteName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`SuitesId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `suites`
--

INSERT INTO `suites` (`SuitesId`, `SuiteName`) VALUES
(1, 'BAU Tests'),
(2, 'BAU Tests Second');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE IF NOT EXISTS `tests` (
  `TestsId` int(11) NOT NULL AUTO_INCREMENT,
  `TestName` varchar(255) NOT NULL,
  `SuitesId` int(11) NOT NULL,
  PRIMARY KEY (`TestsId`),
  KEY `FK_52gyr69b59qn0frovbcq5csl8` (`SuitesId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`TestsId`, `TestName`, `SuitesId`) VALUES
(2, 'Sport Banner', 1),
(3, 'Affutd', 1),
(4, 'Freespin', 1),
(5, 'EurograndClientDe', 1),
(6, 'EurograndWebDe', 1),
(7, 'EurograndClientEn', 1),
(8, 'PrestigeClientEn', 1),
(9, 'WilliamhillClientEn', 1),
(10, 'JoylandClientEn', 1),
(11, 'RubyBingoEn', 1),
(12, 'EurograndWebEn', 1),
(13, 'SkykingClientEn', 1),
(14, 'JoylandClientDe', 1),
(15, 'PrestigeClientDe', 1),
(16, 'SkykingClientDe', 1),
(17, 'WilliamhillClientDe', 1),
(18, 'Tracing', 1),
(19, '21NovaClientDe', 1),
(20, '21NovaClientEn', 1),
(22, 'Sport Banner', 2),
(23, 'Affutd', 2),
(24, 'Freespin', 2),
(25, '21NovaClientDe', 2),
(26, '21NovaClientEn', 2),
(27, 'EurograndClientDe', 2),
(28, 'EurograndWebDe', 2),
(29, 'EurograndClientEn', 2),
(30, 'PrestigeClientEn', 2),
(31, 'Tracing', 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `FK_mikvu00m0j2jqwft1dtja3jyq` FOREIGN KEY (`TestId`) REFERENCES `tests` (`TestsId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `parameters`
--
ALTER TABLE `parameters`
  ADD CONSTRAINT `FK_q3m7cxc6i0v8rn9epme368v6j` FOREIGN KEY (`TestId`) REFERENCES `tests` (`TestsId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `FK_52gyr69b59qn0frovbcq5csl8` FOREIGN KEY (`SuitesId`) REFERENCES `suites` (`SuitesId`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

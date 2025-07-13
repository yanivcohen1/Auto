-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2013 at 10:46 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `testmanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `computers`
--

CREATE TABLE IF NOT EXISTS `computers` (
  `computerId` int(11) NOT NULL AUTO_INCREMENT,
  `computerIP` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`computerId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `computers`
--

INSERT INTO `computers` (`computerId`, `computerIP`) VALUES
(1, '10.1.0.17');

-- --------------------------------------------------------

--
-- Table structure for table `computer_tests`
--

CREATE TABLE IF NOT EXISTS `computer_tests` (
  `computer_Id` int(11) NOT NULL,
  `tests_Id` int(11) NOT NULL,
  UNIQUE KEY `UK_80ew7te6au3fx02kninb2k81w` (`tests_Id`),
  KEY `FK_80ew7te6au3fx02kninb2k81w` (`tests_Id`),
  KEY `FK_opm9pp42a6bdl7hjxp69k7ckj` (`computer_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `computer_tests`
--

INSERT INTO `computer_tests` (`computer_Id`, `tests_Id`) VALUES
(1, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE IF NOT EXISTS `tests` (
  `testsId` int(11) NOT NULL AUTO_INCREMENT,
  `ErrorDesc` varchar(255) DEFAULT NULL,
  `Params` varchar(255) DEFAULT NULL,
  `ProcessName` varchar(255) DEFAULT NULL,
  `Result` varchar(255) DEFAULT NULL,
  `Retry` int(11) NOT NULL,
  `RetryDelay` int(11) NOT NULL,
  `TimeOut` int(11) NOT NULL,
  `cronExpress` varchar(255) DEFAULT NULL,
  `lastRun` datetime DEFAULT NULL,
  `testName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`testsId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`testsId`, `ErrorDesc`, `Params`, `ProcessName`, `Result`, `Retry`, `RetryDelay`, `TimeOut`, `cronExpress`, `lastRun`, `testName`) VALUES
(1, 'null\r\n Volume in drive C has no label.\r\n Volume Serial Number is 1E4E-FC86\r\n\r\n Directory of C:\\SVN\\ServicesScheduler\\war\r\n\r\n06/27/2013  05:52 PM    <DIR>          .\r\n06/27/2013  05:52 PM    <DIR>          ..\r\n04/02/2013  12:40 PM             1,082 favico', '/C Dir C:\\', 'cmd', 'Fail', 2, 2, 2, '0/15 * * * * ?', '2013-07-07 11:42:06', 'Dir C'),
(2, 'null\r\n Volume in drive C has no label.\r\n Volume Serial Number is 1E4E-FC86\r\n\r\n Directory of C:\\temp\r\n\r\n06/26/2013  03:39 PM    <DIR>          .\r\n06/26/2013  03:39 PM    <DIR>          ..\r\n08/02/2012  07:25 AM           235,449 8_2_2012_-_7_25_28_-_AM_-_f', '/C Dir C:\\temp\\', 'cmd', 'Fail', 2, 2, 2, '0/15 * * * * ?', '2013-07-07 11:42:06', 'Dir D');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `computer_tests`
--
ALTER TABLE `computer_tests`
  ADD CONSTRAINT `FK_80ew7te6au3fx02kninb2k81w` FOREIGN KEY (`tests_Id`) REFERENCES `tests` (`testsId`),
  ADD CONSTRAINT `FK_opm9pp42a6bdl7hjxp69k7ckj` FOREIGN KEY (`computer_Id`) REFERENCES `computers` (`computerId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2014 at 05:00 PM
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`ClassID`, `ClassName`, `TestId`) VALUES
(1, 'who.class1', 1),
(2, 'who.class2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `parameters`
--

CREATE TABLE IF NOT EXISTS `parameters` (
  `ParameterID` int(11) NOT NULL AUTO_INCREMENT,
  `ParameterName` varchar(255) DEFAULT NULL,
  `TestId` int(11) NOT NULL,
  PRIMARY KEY (`ParameterID`),
  KEY `FK_q3m7cxc6i0v8rn9epme368v6j` (`TestId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `parameters`
--

INSERT INTO `parameters` (`ParameterID`, `ParameterName`, `TestId`) VALUES
(1, 'param1', 1),
(2, 'param2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `suites`
--

CREATE TABLE IF NOT EXISTS `suites` (
  `SuitesId` int(11) NOT NULL AUTO_INCREMENT,
  `SuiteName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`SuitesId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `suites`
--

INSERT INTO `suites` (`SuitesId`, `SuiteName`) VALUES
(1, 'Suite1');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`TestsId`, `TestName`, `SuitesId`) VALUES
(1, 'test1', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `FK_mikvu00m0j2jqwft1dtja3jyq` FOREIGN KEY (`TestId`) REFERENCES `tests` (`TestsId`);

--
-- Constraints for table `parameters`
--
ALTER TABLE `parameters`
  ADD CONSTRAINT `FK_q3m7cxc6i0v8rn9epme368v6j` FOREIGN KEY (`TestId`) REFERENCES `tests` (`TestsId`);

--
-- Constraints for table `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `FK_52gyr69b59qn0frovbcq5csl8` FOREIGN KEY (`SuitesId`) REFERENCES `suites` (`SuitesId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

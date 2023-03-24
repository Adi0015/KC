-- phpMyAdmin SQL Dump
-- version 6.0.0-dev+20230323.7514e75794
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2023 at 09:01 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kidswebsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `admisson`
--

CREATE TABLE `admisson` (
  `id` int(255) NOT NULL,
  `childname` varchar(255) NOT NULL,
  `childage` int(255) NOT NULL,
  `birthdate` date NOT NULL,
  `branch` varchar(255) NOT NULL,
  `standard` varchar(255) NOT NULL,
  `fathername` varchar(255) NOT NULL,
  `fatheroccupation` varchar(255) NOT NULL,
  `fathermobilenum` varchar(255) NOT NULL,
  `mothername` varchar(255) NOT NULL,
  `motheroccupation` varchar(255) NOT NULL,
  `mothermobilenum` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `childPicture` varchar(255) NOT NULL,
  `parentPicture` varchar(255) NOT NULL,
  `birthCertificate` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admisson`
--

INSERT INTO `admisson` (`id`, `childname`, `childage`, `birthdate`, `branch`, `standard`, `fathername`, `fatheroccupation`, `fathermobilenum`, `mothername`, `motheroccupation`, `mothermobilenum`, `email`, `childPicture`, `parentPicture`, `birthCertificate`, `date`) VALUES
(1, 'ria', 5, '2021-04-03', 'Andheri', 'Jr. KG', 'asdfg', 'sad', '7894561230', 'asfddaf', 'afafsa', '7894561230', 'asd@gmail.com', '1678457554542-child', '1678457554542-parent', '', '2023-03-10'),
(2, 'ria', 5, '2021-04-03', 'Andheri', 'Jr. KG', 'asdfg', 'sad', '7894561230', 'asfddaf', 'afafsa', '7894561230', 'asd@gmail.com', '1678457872747-child', '1678457872747-parent', '', '2023-03-10'),
(4, 'Aditya Gohil', 5, '2017-05-12', 'Andheri', 'Jr.KG', 'qwer', 'qwer', '09137810547', 'qwer', 'asdf', '09137810547', 'aditya512gohil@gmail.com', '1679462147829-child.jpg', '1679462147829-parent.jpg', '1679462147829-birthCertificate.jpg', '2023-03-22');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(255) NOT NULL,
  `parent_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `parent_name`, `email`, `phone`, `message`, `date`) VALUES
(3, 'ashdb', 'asfas@gmail.com', '9876543210', 'asdasd', '2023-03-10'),
(4, 'qwert', 'qwert@gmail.com', '789561230', 'qwert', '2023-03-21');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `label` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `label`) VALUES
(1, 'pavan'),
(2, 'undefined'),
(3, 'undefined'),
(4, 'undefined'),
(5, 'undefined'),
(6, 'undefined'),
(7, 'undefined'),
(8, 'undefined'),
(9, 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `label` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `label`) VALUES
(1, 'undefined');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admisson`
--
ALTER TABLE `admisson`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admisson`
--
ALTER TABLE `admisson`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

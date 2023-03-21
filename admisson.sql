-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 10, 2023 at 03:21 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kctest`
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
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admisson`
--

INSERT INTO `admisson` (`id`, `childname`, `childage`, `birthdate`, `branch`, `standard`, `fathername`, `fatheroccupation`, `fathermobilenum`, `mothername`, `motheroccupation`, `mothermobilenum`, `email`, `childPicture`, `parentPicture`, `date`) VALUES
(1, 'ria', 5, '2021-04-03', 'Andheri', 'Jr. KG', 'asdfg', 'sad', '7894561230', 'asfddaf', 'afafsa', '7894561230', 'asd@gmail.com', '1678457554542-child', '1678457554542-parent', '2023-03-10'),
(2, 'ria', 5, '2021-04-03', 'Andheri', 'Jr. KG', 'asdfg', 'sad', '7894561230', 'asfddaf', 'afafsa', '7894561230', 'asd@gmail.com', '1678457872747-child', '1678457872747-parent', '2023-03-10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admisson`
--
ALTER TABLE `admisson`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admisson`
--
ALTER TABLE `admisson`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

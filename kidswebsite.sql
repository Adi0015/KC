-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 12, 2023 at 03:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
-- Table structure for table `admission`
--

CREATE TABLE `admission` (
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
  `whatsapp` varchar(255) NOT NULL,
  `totalFees` int(255) DEFAULT 0,
  `feespaid` int(255) DEFAULT 0,
  `remainingFees` int(255) DEFAULT 0,
  `childPicture` varchar(255) NOT NULL,
  `parentPicture` varchar(255) NOT NULL,
  `birthCertificate` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `uniqueId` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admission`
--

INSERT INTO `admission` (`id`, `childname`, `childage`, `birthdate`, `branch`, `standard`, `fathername`, `fatheroccupation`, `fathermobilenum`, `mothername`, `motheroccupation`, `mothermobilenum`, `email`, `whatsapp`, `totalFees`, `feespaid`, `remainingFees`, `childPicture`, `parentPicture`, `birthCertificate`, `date`, `uniqueId`, `password`) VALUES
(2400, 'trail base', 8, '2015-03-12', 'Andheri', 'Play Group', 'trail', 'trail', '7894561230', 'trail', 'trail', '7894561230', 'lavite1679@vaband.com', '7894561230', 0, 0, 0, '1686573800094-child.jpg', '1686573800094-parent.jpg', '1686573800094-birthCertificate.jpg', '2023-06-12', 'AN-1', '20150312');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(255) NOT NULL,
  `parent_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `branch` varchar(255) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `label`) VALUES
(1, 'Red Day'),
(2, 'Fruit Day'),
(3, 'Republic Day'),
(4, 'Makar Sankranti'),
(5, 'Traditional Day'),
(6, 'Christmas'),
(7, 'Sports Day'),
(8, 'Pediatrician Day'),
(9, 'Blue Day');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `label`) VALUES
(1, 'Navratri'),
(2, 'Independence Day'),
(3, 'Christmas'),
(4, 'remove'),
(5, 'remove'),
(6, 'remove'),
(7, 'remove'),
(8, 'remove'),
(9, 'remove');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admission`
--
ALTER TABLE `admission`
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
-- AUTO_INCREMENT for table `admission`
--
ALTER TABLE `admission`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2401;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

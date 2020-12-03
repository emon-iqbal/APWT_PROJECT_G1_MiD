-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2020 at 08:19 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travel`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `pid` int(100) NOT NULL,
  `ptitle` varchar(100) NOT NULL,
  `rname` varchar(100) NOT NULL,
  `rprice` varchar(100) NOT NULL,
  `rtype` varchar(100) NOT NULL,
  `rdesc` varchar(100) NOT NULL,
  `tag` varchar(100) NOT NULL,
  `avail` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`pid`, `ptitle`, `rname`, `rprice`, `rtype`, `rdesc`, `tag`, `avail`) VALUES
(30, 'oio', 'ioi', '3333', 'pip', 'ioioi22 434', 'neil', 'aaa'),
(34, '123', 'sdf', 'sdf', 'dads', 'asd', 'neil', 'sdf443'),
(35, 'fsdf', 'sdfsdf', 'sdfsdf', 'sdfdsf', 'sdfsdf', 'neil', 'sdf'),
(36, 'klklk', 'sdfsdf', 'sdfsdf', 'sdfdsf', 'sdfsdf', 'neil', 'sdf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `pid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

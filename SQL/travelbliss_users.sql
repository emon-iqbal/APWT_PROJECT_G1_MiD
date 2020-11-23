-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2020 at 08:17 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travelbliss_apwt`
--

-- --------------------------------------------------------

--
-- Table structure for table `travelbliss_users`
--

CREATE TABLE `travelbliss_users` (
  `userid` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `education` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `picture` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `travelbliss_users`
--

INSERT INTO `travelbliss_users` (`userid`, `username`, `password`, `email`, `gender`, `education`, `type`, `picture`) VALUES
(2, 'Fardin', '123456', 'ratul@microsoft.com', 'M', 'bsc', 'HotelManager', ''),
(3, 'Nozib', '16323152', 'akash@gmail.com', 'M', 'bsc', 'admin', ''),
(5, 'Kawser', '123456', 'rat315@gmail.com', 'M', 'ssc', 'traveler', ''),
(6, 'iqbal', '20202020', 'iQb@gmail.com', 'M', 'bsc', 'Trans_Dealer', ''),
(7, 'RAS_EMON', '###3###3###', 'rasjbii@gmail.com', 'M', 'bsc', 'Trans_Dealer', 'IMG_3384.JPG'),
(8, 'rasdrek', '20112011', 'rasjbii@gmail.com', 'M', 'bsc', 'Trans_Dealer', 'IMG_3384.JPG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `travelbliss_users`
--
ALTER TABLE `travelbliss_users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `travelbliss_users`
--
ALTER TABLE `travelbliss_users`
  MODIFY `userid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

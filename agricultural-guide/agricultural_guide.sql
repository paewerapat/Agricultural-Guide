-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2023 at 08:47 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agricultural_guide`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `answerId` int(10) NOT NULL,
  `answerInfo` text NOT NULL,
  `userId` int(10) NOT NULL,
  `questionId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `plant_plot`
--

CREATE TABLE `plant_plot` (
  `ppId` int(10) NOT NULL,
  `ppLong` varchar(50) NOT NULL,
  `ppLat` varchar(50) NOT NULL,
  `ppName` varchar(50) NOT NULL,
  `userId` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `plant_plot`
--

INSERT INTO `plant_plot` (`ppId`, `ppLong`, `ppLat`, `ppName`, `userId`) VALUES
(9, '100.4940307224923', '7.044668374343263', 'hello', '1234'),
(10, '100.49960050758754', '6.99934249357984', 'PSU', '1234'),
(11, '100.50459442682441', '8.5274619489783', 'Bangkok', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `plant_price`
--

CREATE TABLE `plant_price` (
  `plantId` int(10) NOT NULL,
  `plantName` varchar(50) NOT NULL,
  `plantType` enum('ธัญพืช','พืชน้ำมัน','พืชน้ำตาล','พืชเส้นใย','พืชหัว','พืชอาหารสัตว์') NOT NULL,
  `plantPrice` int(10) NOT NULL,
  `plantImg` text NOT NULL,
  `adminId` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `plant_price`
--

INSERT INTO `plant_price` (`plantId`, `plantName`, `plantType`, `plantPrice`, `plantImg`, `adminId`) VALUES
(1, 'ทุเรียน', 'ธัญพืช', 123, '[', '1234'),
(2, 'มะม่วง', 'ธัญพืช', 55, '[', '1234'),
(3, 'มะม่วง', 'ธัญพืช', 55, '[object Object]', '1234'),
(4, 'มะม่วง', 'ธัญพืช', 55, '[', '1234'),
(5, 'มะม่วง', 'ธัญพืช', 55, '{\"public_id\":\"Agriculture/images_ragc4u\",\"url\":\"https://res.cloudinary.com/ducgdgy81/image/upload/v1678990413/Agriculture/images_ragc4u.png\"}', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `postId` int(10) NOT NULL,
  `title` text NOT NULL,
  `data` text NOT NULL,
  `adminId` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`postId`, `title`, `data`, `adminId`) VALUES
(0, 'hello post', 'Enter your text here...', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `questionId` int(10) NOT NULL,
  `questionInfo` text NOT NULL,
  `userId` varchar(10) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`questionId`, `questionInfo`, `userId`, `timeStamp`) VALUES
(1, 'Enter your text here...', '1234', '2023-03-06 12:52:17'),
(2, '<p>Enter your text here...</p>', '1234', '2023-03-06 12:53:26'),
(3, '<h1>Question 1</h1>\n', '1234', '2023-03-06 12:54:34'),
(4, '<h1>Question 2</h1>\n', '1234', '2023-03-06 12:54:41'),
(5, '<h1>Question 3</h1>\n', '1234', '2023-03-06 12:54:44');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` varchar(10) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` enum('user','admin','','') NOT NULL DEFAULT 'user',
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `fullName`, `password`, `role`, `img`) VALUES
('1234', 'hello world', '$2a$10$pl8QY6FpdFyu/3DG2qiVZuA2LLh00LgH6qCTGoNn2vd4KRnVI6x0e', 'admin', ''),
('2542', 'Werapat Potisit', '$2a$10$6ltfcj85uIAl1ixks95Lc.k1p0p4tILgXW.fl9OQglbh5VXxKanv6', 'user', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`answerId`),
  ADD KEY `questionId` (`questionId`);

--
-- Indexes for table `plant_plot`
--
ALTER TABLE `plant_plot`
  ADD PRIMARY KEY (`ppId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `plant_price`
--
ALTER TABLE `plant_price`
  ADD PRIMARY KEY (`plantId`),
  ADD KEY `adminId` (`adminId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`postId`),
  ADD KEY `adminId` (`adminId`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`questionId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `answerId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `plant_plot`
--
ALTER TABLE `plant_plot`
  MODIFY `ppId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `plant_price`
--
ALTER TABLE `plant_price`
  MODIFY `plantId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `questionId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `question` (`questionId`);

--
-- Constraints for table `plant_plot`
--
ALTER TABLE `plant_plot`
  ADD CONSTRAINT `plant_plot_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `plant_price`
--
ALTER TABLE `plant_price`
  ADD CONSTRAINT `plant_price_ibfk_1` FOREIGN KEY (`adminId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`adminId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

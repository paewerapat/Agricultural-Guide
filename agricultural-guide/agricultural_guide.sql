-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2023 at 02:56 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.34

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
  `answer` text NOT NULL,
  `userId` int(10) NOT NULL,
  `questionId` int(10) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`answerId`, `answer`, `userId`, `questionId`, `timeStamp`) VALUES
(1, 'Hello answer', 1234, 1, '2023-03-18 13:44:13'),
(2, 'Hello 2', 1234, 1, '2023-03-18 13:45:03'),
(3, 'hello comment', 1234, 2, '2023-03-18 13:52:30'),
(4, 'hello qeustion 1 comment', 1234, 3, '2023-03-18 13:52:41');

-- --------------------------------------------------------

--
-- Table structure for table `plant_plot`
--

CREATE TABLE `plant_plot` (
  `ppId` int(10) NOT NULL,
  `ppLong` float NOT NULL,
  `ppLat` float NOT NULL,
  `ppName` varchar(50) NOT NULL,
  `userId` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `plant_plot`
--

INSERT INTO `plant_plot` (`ppId`, `ppLong`, `ppLat`, `ppName`, `userId`) VALUES
(6, 100.533, 6.95246, 'heeloo', '1234'),
(7, 100.524, 14.3993, 'Bangkok', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `plant_price`
--

CREATE TABLE `plant_price` (
  `plantId` int(10) NOT NULL,
  `plantDesc` varchar(50) NOT NULL,
  `plantName` varchar(50) NOT NULL,
  `plantType` enum('ธัญพืช','พืชน้ำมัน','พืชน้ำตาล','พืชเส้นใย','พืชหัว','พืชอาหารสัตว์') NOT NULL,
  `plantPrice` int(10) NOT NULL,
  `plantImg` text NOT NULL,
  `adminId` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `plant_price`
--

INSERT INTO `plant_price` (`plantId`, `plantDesc`, `plantName`, `plantType`, `plantPrice`, `plantImg`, `adminId`) VALUES
(5, '', 'มะม่วง', 'ธัญพืช', 55, '{\"public_id\":\"Agriculture/images_ragc4u\",\"url\":\"https://res.cloudinary.com/ducgdgy81/image/upload/v1678990413/Agriculture/images_ragc4u.png\"}', '1234'),
(6, '', 'ทุเรียน', 'ธัญพืช', 123, '{\"public_id\":\"Agriculture/fresh-durian-durio-zibthinus-murray-sack-old-wood-background-king-fruit-from-thailand-summer-season_jlic46\",\"url\":\"https://res.cloudinary.com/ducgdgy81/image/upload/v1679139064/Agriculture/fresh-durian-durio-zibthinus-murray-sack-old-wood-background-king-fruit-from-thailand-summer-season_jlic46.jpg\"}', '1234'),
(7, '', 'มังคุด', 'พืชหัว', 897, '{\"public_id\":\"Agriculture/logo-1_1_ahbbgl\",\"url\":\"https://res.cloudinary.com/ducgdgy81/image/upload/v1679139317/Agriculture/logo-1_1_ahbbgl.png\"}', '1234'),
(8, 'asf3w154', 'มังคุด', 'พืชเส้นใย', 232, '{\"public_id\":\"Agriculture/96ekci9cadkg7c76edf5i_pvrrt6\",\"url\":\"https://res.cloudinary.com/ducgdgy81/image/upload/v1679139894/Agriculture/96ekci9cadkg7c76edf5i_pvrrt6.jpg\"}', '1234');

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
(4, '', '<p><a href=\"https://mini-game.org/wp-content/uploads/2021/11/1-1.jpg\"><img alt=\"\" src=\"https://mini-game.org/wp-content/uploads/2021/11/1-1.jpg\" style=\"height:1000px; width:1500px\" /></a></p>\n\n<p>Enter your text here...</p>\n', '1234'),
(6, '', '<p><img alt=\"\" src=\"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&amp;dl=pexels-pixabay-268533.jpg&amp;fm=jpg\" style=\"height:1278px; width:1920px\" /></p>\n\n<ul>\n	<li>1</li>\n	<li>2</li>\n	<li>3</li>\n	<li>\n	<h1>Hello</h1>\n	</li>\n</ul>\n\n<p>Enter your text here...</p>\n', '1234'),
(7, 'hewsedtg', '<p><img alt=\"\" src=\"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\" /></p>\n\n<p>Enter your text here...</p>\n', '1234');

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
  MODIFY `answerId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `plant_plot`
--
ALTER TABLE `plant_plot`
  MODIFY `ppId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `plant_price`
--
ALTER TABLE `plant_price`
  MODIFY `plantId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `postId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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

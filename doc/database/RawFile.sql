-- smartmediainterface.RawFiles definition

CREATE TABLE `RawFiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) DEFAULT NULL,
  `extension` varchar(100) DEFAULT NULL,
  `filesize` varchar(100) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
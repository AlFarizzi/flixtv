-- Adminer 4.8.0 MySQL 8.0.21 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `movie_id` int NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `comments` (`id`, `name`, `movie_id`, `comment`, `created_at`, `updated_at`) VALUES
(2,	'fariz',	1,	'film ini sangat menagankan',	'2021-02-14 00:11:17',	'2021-02-14 00:11:17'),
(3,	'fariz',	1,	'1',	'2021-02-14 03:35:32',	'2021-02-14 03:35:32'),
(4,	'fariz',	1,	'2',	'2021-02-14 03:35:36',	'2021-02-14 03:35:36'),
(5,	'fariz',	1,	'3',	'2021-02-14 03:35:43',	'2021-02-14 03:35:43'),
(6,	'fariz',	1,	'4',	'2021-02-14 03:35:50',	'2021-02-14 03:35:50'),
(7,	'fariz',	1,	'5',	'2021-02-14 03:35:55',	'2021-02-14 03:35:55');

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `genre_movie`;
CREATE TABLE `genre_movie` (
  `genre_id` bigint unsigned NOT NULL,
  `movie_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`genre_id`,`movie_id`),
  KEY `genre_movie_movie_id_foreign` (`movie_id`),
  CONSTRAINT `genre_movie_genre_id_foreign` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE,
  CONSTRAINT `genre_movie_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `genre_movie` (`genre_id`, `movie_id`) VALUES
(1,	1),
(5,	1),
(2,	2),
(5,	2),
(9,	2),
(2,	3),
(5,	3),
(9,	3),
(4,	6),
(6,	6),
(4,	7),
(6,	7),
(3,	8),
(5,	8),
(9,	8),
(5,	9),
(9,	9),
(10,	9),
(2,	10),
(6,	10),
(11,	10),
(2,	11),
(6,	11),
(1,	14),
(5,	14),
(5,	15),
(9,	15),
(10,	15),
(5,	16),
(9,	16),
(10,	16),
(2,	17),
(9,	17),
(1,	18),
(3,	18),
(13,	18);

DROP TABLE IF EXISTS `genres`;
CREATE TABLE `genres` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `genres` (`id`, `genre`, `created_at`, `updated_at`) VALUES
(1,	'thriller',	'2021-02-12 22:00:25',	'2021-02-12 22:00:25'),
(2,	'horror',	'2021-02-12 22:00:25',	'2021-02-12 22:00:25'),
(3,	'drama',	'2021-02-12 22:00:26',	'2021-02-12 22:00:26'),
(4,	'romance',	'2021-02-12 22:00:26',	'2021-02-12 22:00:26'),
(5,	'action',	'2021-02-12 22:00:26',	'2021-02-12 22:00:26'),
(6,	'comedy',	'2021-02-12 22:00:26',	'2021-02-12 22:00:26'),
(7,	'romantic',	'2021-02-12 22:00:27',	'2021-02-12 22:00:27'),
(8,	'animation',	'2021-02-12 22:00:27',	'2021-02-20 20:20:33'),
(9,	'sci-fi',	'2021-02-12 22:00:27',	'2021-02-12 22:00:27'),
(10,	'adventure',	'2021-02-12 22:00:27',	'2021-02-20 20:21:24'),
(11,	'fantasy',	'2021-02-17 19:53:40',	'2021-02-20 20:21:30'),
(13,	'crime',	'2021-02-23 21:04:29',	'2021-02-23 21:04:29');

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1,	'2014_10_12_000000_create_users_table',	1),
(2,	'2014_10_12_100000_create_password_resets_table',	1),
(3,	'2019_08_19_000000_create_failed_jobs_table',	1),
(4,	'2021_02_04_081301_create_genres_table',	1),
(5,	'2021_02_04_081347_create_movies_table',	1),
(6,	'2021_02_04_093135_create_genre_movie_table',	1),
(7,	'2021_02_05_070233_create_comments_table',	1);

DROP TABLE IF EXISTS `movies`;
CREATE TABLE `movies` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` double(8,2) NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `release_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `synopsis` text COLLATE utf8mb4_unicode_ci,
  `poster_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `movies` (`id`, `title`, `rating`, `duration`, `release_date`, `synopsis`, `poster_link`, `video_link`, `created_at`, `updated_at`) VALUES
(1,	'Run Hide Out',	6.00,	'1 hrs 49 mins',	'10 Septermber 2020',	'17-year-old Zoe Hull uses her wits, survival skills, and compassion to fight for her life, and those of her fellow classmates, against a group of live-streaming school shooters.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Frunhide.jpg?alt=media&token=93b6b49d-7d3d-4c1c-9989-d6062c15d13b',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FOFFICIAL%20TRAILER%20RELEASE_%20Run%20Hide%20Fight.mp4?alt=media&token=7abc55e5-1fa4-409d-b3e1-cf88da56f5d6',	'2021-02-13 20:29:47',	'2021-02-13 20:29:47'),
(2,	'Resident Evil: The Final Chapter',	5.00,	'1 hrs 47 mins',	'2016',	'Alice returns to where the nightmare began: The Hive in Raccoon City, where the Umbrella Corporation is gathering its forces for a final strike against the only remaining survivors of the apocalypse.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2FRE%20final%20chapter.jpg?alt=media&token=fbf73bce-4b8a-45aa-85c0-b7187611cd91',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FRESIDENT%20EVIL_%20THE%20FINAL%20CHAPTER%20-%20Official%20Trailer%20(HD).mp4?alt=media&token=ae66d4f5-25eb-4eff-85b3-77b0e504d1c9',	'2021-02-13 20:37:55',	'2021-02-13 20:37:55'),
(3,	'The New Mutants',	5.00,	'1 hrs 34 mins',	'2020',	'Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fnew%20mutant.jpg?alt=media&token=e0609ab7-ad8f-483b-ab9c-e85227828441',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FThe%20New%20Mutants%20_%20Official%20Trailer%20_%2020th%20Century%20FOX.mp4?alt=media&token=9ff11612-f518-41d5-93d4-f8d2d745b219',	'2021-02-15 00:53:37',	'2021-02-15 00:53:37'),
(6,	'The Kissing Booth 2',	5.00,	'2 hrs 14 mins',	'2020',	'In the sequel to 2018\'s THE KISSING BOOTH, high school senior Elle juggles a long-distance relationship with her dreamy boyfriend Noah, college applications, and a new friendship with a handsome classmate that could change everything.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fkissing%20booth2.jpg?alt=media&token=726f5df6-5bce-4730-a04a-0f7ba517efbe',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FThe%20Kissing%20Booth%202%20_%20Official%20Sequel%20Trailer%20_%20Netflix.mp4?alt=media&token=e938b826-5c55-4a88-9555-6c46fe83c7ef',	'2021-02-15 01:05:00',	'2021-02-15 01:05:00'),
(7,	'The Kissing Booth',	6.00,	'1 hrs 45 mins',	'2018',	'A high school student is forced to confront her secret crush at a kissing booth.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fkissing%20booth.jpg?alt=media&token=a408ffd4-c772-492d-8b3f-f5623657501e',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FThe%20Kissing%20Booth%20_%20Official%20Trailer%20_%20Netflix.mp4?alt=media&token=a5e4601f-e9aa-4068-bbb6-a71442fcd38d',	'2021-02-15 01:17:49',	'2021-02-15 01:17:49'),
(8,	'Bloodshot',	5.00,	'1 hrs 43 mins',	'2020',	'Ray Garrison, a slain soldier, is re-animated with superpowers.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fbloodshot.jpg?alt=media&token=731198e2-e7bc-4aeb-829c-d619f29099ea',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FBLOODSHOT%20-%20Official%20Trailer%20(HD).mp4?alt=media&token=5a4a9bf9-c381-4936-848f-60dbf381aeeb',	'2021-02-15 01:36:15',	'2021-02-15 01:36:15'),
(9,	'The Old Guard',	6.00,	'2 hrs 5 mins',	'10 July 2020',	'A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fold%20guard.jpg?alt=media&token=ce9b042d-fbc3-41ae-b06c-587611a98fc4',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FThe%20Old%20Guard%20_%20Official%20Trailer%20_%20Netflix.mp4?alt=media&token=3ecf6cac-7eef-4359-8be0-a79af78ac2d4',	'2021-02-15 01:44:23',	'2021-02-15 01:44:23'),
(10,	'Piranha 3D',	5.00,	'1 hrs 28 mins',	'20 August, 2020',	'After a sudden underwater tremor sets free scores of the prehistoric man-eating fish, an unlikely group of strangers must band together to stop themselves from becoming fish food for the area\'s new razor-toothed residents.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fpiranha3d.jpg?alt=media&token=80a23ece-15b6-461a-88ff-ad208576bf11',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FPiranha%203D%20_%20official%20trailer%20%232%20US%20(2010).mp4?alt=media&token=2fe9fc1b-0982-4538-87ed-36e71a8fb297',	'2021-02-17 19:55:51',	'2021-02-17 19:55:51'),
(11,	'Piranha 3DD',	3.00,	'1 hrs 23 mins',	'14 July, 2012',	'After the events at Lake Victoria, the pre-historic school of blood-thirsty piranhas make their way into a newly opened waterpark.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fpiranha3dd.jpg?alt=media&token=e5055476-721e-4a30-8ff9-d046d63b648c',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FPiranha%203DD%20Official%20Trailer%20%231%20-%20Ving%20Rhames%20Movie%20(2012)%20HD.mp4?alt=media&token=d58d7d20-d9fe-4dc9-b9d7-7693f70672e8',	'2021-02-17 20:17:58',	'2021-02-17 20:17:58'),
(14,	'Extractionn',	6.00,	'1 hrs 56 mins',	'24 April 2020',	'Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he\'s enlisted to rescue the kidnapped son of an imprisoned international crime lord.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fextraction.jpg?alt=media&token=b6964a94-6a09-4fb0-8b1f-d27bebec46c2',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FExtraction%20_%20Official%20Trailer%20_%20Screenplay%20by%20JOE%20RUSSO%20Directed%20by%20SAM%20HARGRAVE%20_%20Netflix.mp4?alt=media&token=477eabe3-f389-4368-9b17-cfd0a0ee49ab',	'2021-02-23 19:09:00',	'2021-02-23 19:24:49'),
(15,	'Avengers: Infinity War',	8.00,	'2 hrs 29 mins',	'27 April 2018',	'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the univers',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Finfinity-war.jpg?alt=media&token=ecb3f4c2-9bf2-4368-93c5-277faac80f42',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FMarvel%20Studios\'%20Avengers_%20Infinity%20War%20Official%20Trailer.mp4?alt=media&token=ccb79ff6-ec8e-4065-b28a-17b2d07d7c67',	'2021-02-23 20:25:16',	'2021-02-23 20:25:16'),
(16,	'Avengers: Endgame',	8.00,	'3 hrs 1 mins',	'26 April 2019',	'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fendgame.jpg?alt=media&token=5a96e0f7-c6d3-4b92-86a6-ef4b0d54b60a',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FMarvel%20Studios\'%20Avengers_%20Endgame%20-%20Official%20Trailer.mp4?alt=media&token=7896d9e2-c973-4e03-bc44-fdb571a19ac7',	'2021-02-23 20:42:40',	'2021-02-23 20:42:40'),
(17,	'Bird Box',	6.00,	'2 hrs 4 mins',	'21 December 2018',	'Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fbirdbox.jpg?alt=media&token=0ed723f9-6f0c-4848-b909-0c528f4dc8d6',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FBird%20Box%20_%20Official%20Trailer%20%5BHD%5D%20_%20Netflix.mp4?alt=media&token=49c766f0-a800-44b1-a8d5-5ccb51e15c0e',	'2021-02-23 20:58:51',	'2021-02-23 20:58:51'),
(18,	'Bodyguard',	8.00,	'0 hrs 40 mins',	'2018',	'A contemporary thriller featuring the Royalty and Specialist Protection Branch of London\'s Metropolitan Police Service.',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/covers%2Fbodyguard.jpg?alt=media&token=b448769d-6d30-4a3e-92ba-3b2e3f5c9df5',	'https://firebasestorage.googleapis.com/v0/b/flixtv-ccb2b.appspot.com/o/videos%2FBodyguard%20_%20Official%20Trailer%20%5BHD%5D%20_%20Netflix.mp4?alt=media&token=58a00985-16b4-4bf4-86f9-c6e8539adadd',	'2021-02-23 21:14:24',	'2021-02-23 21:14:24');

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1,	'admin',	'admin@gmail.com',	NULL,	'$2y$10$fd/7UCrpBinIaX0eg7u4pewnmvXaRrzuS4btlbQUr37SdP30fBn1u',	NULL,	'2021-02-12 21:32:32',	'2021-02-22 21:30:31');

-- 2021-04-20 03:36:45

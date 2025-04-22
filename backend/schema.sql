CREATE DATABASE IF NOT EXISTS declutter_task_manager;
USE declutter_task_manager;

CREATE TABLE users (
  user_id VARCHAR(20) PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  contact CHAR(10) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE tasks (
  task_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id VARCHAR(20),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category ENUM('Work', 'Home', 'Personal') NOT NULL,
  progress_status ENUM('Ongoing', 'Completed', 'Backlog') NOT NULL,
  completed_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE teams (
  team_id INT PRIMARY KEY AUTO_INCREMENT,
  team_title VARCHAR(100) NOT NULL,
  leader_id VARCHAR(20) NOT NULL,
  leader_name VARCHAR(100) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (leader_id) REFERENCES users(user_id)
);


CREATE TABLE team_members (
  member_id INT PRIMARY KEY AUTO_INCREMENT,
  team_id INT NOT NULL,
  user_id VARCHAR(20) NOT NULL,
  joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (team_id) REFERENCES teams(team_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE task_comments (
  comment_id INT PRIMARY KEY AUTO_INCREMENT,
  task_id INT NOT NULL,
  team_id INT NOT NULL,
  leader_id VARCHAR(20) NOT NULL,
  comment TEXT NOT NULL,
  commented_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (task_id) REFERENCES tasks(task_id),
  FOREIGN KEY (team_id) REFERENCES teams(team_id),
  FOREIGN KEY (leader_id) REFERENCES users(user_id)
);



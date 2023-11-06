USE vs907jbdbs42xpi9;

DROP TABLE IF EXISTS games;
CREATE TABLE games (
  game_rank INT,
  bgg_url VARCHAR(300),
  game_id INT,
  names VARCHAR(300),
  min_players INT,
  max_players INT,
  avg_time INT,
  min_time INT,
  max_time INT,
  year INT,
  avg_rating DECIMAL,
  geek_Rating DECIMAL,
  num_votes INT,
  image_url VARCHAR(300),
  age INT,
  mechanic VARCHAR(300),
  owned INT,
  category VARCHAR(300),
  designer VARCHAR (100),
  weight DECIMAL
);

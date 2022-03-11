DROP TABLE IF EXISTS farm;

CREATE TABLE farm (
    id SERIAL PRIMARY KEY,
    type TEXT NOT NULL,
    age INTEGER NOT NULL
);


INSERT INTO farm (type, age) VALUES ('sheep', 3);
INSERT INTO farm (type, age) VALUES ('alpaca', 1);
INSERT INTO farm (type, age) VALUES ('cow', 5);
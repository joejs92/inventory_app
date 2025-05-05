const {Client} = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR (255),
  name VARCHAR (255),
  quantity INT  
);

CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR (255),
);

INSERT INTO categories (category) VALUES ('strings'), ('woodwinds'), ('brass'),
('percussion'), ('book');

INSERT INTO inventory (category,name,quantity)
VALUES
    ('1','violin','15'),
    ('1','viola','5'),
    ('1','cello','8'),
    ('1','bass','2'),
    ('1','guitar','22'),
    ('2','flute','18'),
    ('2','clarinet','12'),
    ('2','oboe','1'),
    ('2','alto sax','7'),
    ('2','tenor sax','3'),
    ('3','trumpet','16'),
    ('3','trombone','4'),
    ('3','french horn','6'),
    ('3','tuba','4'),
    ('3','cornet','2'),
    ('4','snare drum','10'),
    ('4','bass drum','6'),
    ('4','xylophone','9'),
    ('4','timpani','2'),
    ('4','triangle','1'),
    ('5','Alfreds Basic Piano Course','5'),
    ('5','Hanon: The Virtuoso Pianist In Sixty Exercises','3'),
    ('5','Essential Elements for Band - Bb Trumpet Book 1','5'),
    ('5','The Giant Book of Intermediate Classical Piano Music','5'),
    ('5','Disney Frozen - Let it Go Little Music Note Sound Book','5');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/${process.env.DATABASE}`,
});
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
  main();
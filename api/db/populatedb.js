const {Client} = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR (255),
  name VARCHAR (255),
  quantity INT  
);

INSERT INTO inventory (category,name,quantity)
VALUES
    ('strings','violin','15'),
    ('strings','viola','5'),
    ('strings','cello','8'),
    ('strings','bass','2'),
    ('strings','guitar','22'),
    ('woodwinds','flute','18'),
    ('woodwinds','clarinet','12'),
    ('woodwinds','oboe','1'),
    ('woodwinds','alto sax','7'),
    ('woodwinds','tenor sax','3'),
    ('brass','trumpet','16'),
    ('brass','trombone','4'),
    ('brass','french horn','6'),
    ('brass','tuba','4'),
    ('brass','cornet','2'),
    ('percussion','snare drum','10'),
    ('percussion','bass drum','6'),
    ('percussion','xylophone','9'),
    ('percussion','timpani','2'),
    ('percussion','triangle','1'),
    ('book','Alfreds Basic Piano Course','5'),
    ('book','Hanon: The Virtuoso Pianist In Sixty Exercises','3'),
    ('book','Essential Elements for Band - Bb Trumpet Book 1','5'),
    ('book','The Giant Book of Intermediate Classical Piano Music','5'),
    ('book','Disney Frozen - Let it Go Little Music Note Sound Book','5');
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
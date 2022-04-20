const { MongoClient } = require("mongodb");

const connectionUrl = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME;

const init = async () => {
  //let client = await MongoClient.connect(connectionUrl);
  const client = new MongoClient(connectionUrl);
  await client.connect()
  console.log(`Connected to database ${dbName}.`);
  return client.db(dbName);
};

module.exports = { init };

/*
const { MongoClient } = require('mongodb');

const init = async () => {

  // in order to have access on mongodb shell via terminal 
  
  // const connectionUrl = process.env.DB_CONNECTION;
  const connectionUrl = `mongodb://user:pass@db:27017`;
  // const connectionUrl = `mongodb://squiz:squiz_db_pass@db:27017`;
  
  const mongoClient = new MongoClient(connectionUrl, {
    // https://stackoverflow.com/questions/65749358/mongodb-users-authentication-fails
    useNewURLParser:true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });


  let dbName = process.env.NODE_ENV == "squiz_db";
  try {
    let client = await mongoClient.connect();
    console.log(`Connected to database: ${dbName}`);
    return client.db(dbName);
  } catch (err){
    console.log(err);
  }

};

module.exports = { init };
*/

// const { MongoClient } = require('mongodb');
// const connectionUrl = process.env.DB_CONNECTION;

// const dbName = process.env.DB_NAME

// const init = async () => {
//   let client = await MongoClient.connect(connectionUrl)
//   console.log('connected to database!', dbName)
//   return client.db(dbName)
// }


// module.exports = { init };

const { MongoClient } = require('mongodb');

const init = async () => {

  /*** in order to have access on mongodb shell via terminal ****/
  
  /*db username: squiz | db password: squiz_db_pass*/
  const connectionUrl = 'mongodb://user:pass@db:27017';

  //const connectionUrl = 'mongodb://squiz:squiz_db_pass@db:27017';
  // const connectionUrl = process.env.DB_CONNECTION;
  const mongoClient = new MongoClient(connectionUrl, {
    useNewURLParser:true,
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

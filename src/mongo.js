const{config}=require('./config/index.js'); //.env
const db = require ('mongodb');


db.Promise = global.Promise;
async function connect(){
    const dbUser=config.dbUser;
    const dbPass=config.dbPassword;
    const dbHost=config.dbHost;
    const dbName=config.dbName;
    const dbConn=config.dbConnection;

    const conLink= dbConn+'://'+dbUser+':'+dbPass+'@'+dbHost+'/'+dbName+'?retryWrites=true&w=majority';

// console.log('Link coneccion in mongo: '+ dbUser);

    await db.connect(conLink, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('[db] Sussesfull conected');
    }

module.exports.connect=connect;
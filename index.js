const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;

// middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
    console.log(`
        ${req.method} - ${req.path} from ${req.host} at ${new Date().toLocaleString()}
    `);
    next();
});

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.oguoxou.mongodb.net/?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// listener
client
  .connect()
  .then(() => {
    app.listen(port, () => {
        console.log('Appovate server is running on port', port);
        console.log('Appovate server is connected with DB');
    });
  })
  .catch(err => {
    console.log(err);
  });

// database and collection
const db = client.db('appovate_db');
const appsCol = db.collection('apps');

// app routes
app.get('/', (req, res) => {
    res.json({status: 'ok', message: 'Welcome to Appovate Server'});
})


// defined route / API
app.get('/apps', async(req, res) => {
    try{
        const { limit=0, skip=0 } = req.query;
        // const cursor = appsCol.find({});
        const cursor = appsCol.find({}).limit(Number(limit)).skip(Number(skip)).project({
            title: 1, image: 1, downloads: 1, ratingAvg: 1
        });
        const allApps = await cursor.toArray();
        const appsCount = await appsCol.countDocuments({});
        res.send({total: appsCount, apps: allApps});
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

// get app by id
app.get('/apps/:id', async(req, res) => {
    try{
        const appId = req.params.id;
        if(appId.length !== 24){
            res.status(400).json({ error: "Invalid ID" });
            return;
        }
        const query = { _id: new ObjectId(appId) };
        const app = await appsCol.findOne(query);
        res.json(app);
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 404, no route
app.all(/.*/, (req, res) =>{
    res.status(404).json({status: 404, error: 'API Not Found!'});
});
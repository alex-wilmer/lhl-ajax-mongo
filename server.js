let mongo = require("mongodb");
let cors = require("cors");
let express = require("express");
let app = express();

let MongoClient = mongo.MongoClient;
app.use(cors());

// Connection string
let url = "mongodb://localhost:27017";

// Database Name
let dbName = "lhl";

async function main() {
  let client = await MongoClient.connect(url);

  app.get("/people", async (req, res) => {
    let col = client.db(dbName).collection("people");
    let people = await col.find({}).toArray();
    res.json(people);
  });

  app.delete("/people/:_id", async (req, res) => {
    let col = client.db(dbName).collection("people");

    let deleteEvent = await col.deleteOne({
      _id: new mongo.ObjectId(req.params._id)
    });

    res.json({
      message: "person removed successfully"
    });
  });

  app.listen(5555, () => {
    console.log(`
      ✨ listening on port 5555
    `);
  });
}

main();

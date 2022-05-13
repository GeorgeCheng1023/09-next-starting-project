import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://first-user:123@cluster0.go7g6.mongodb.net/meetups?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    await client.connect();
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: result });
  }
}

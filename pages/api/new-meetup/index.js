import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://first-user:AsFuwhwEU8Se3PNy@cluster0.go7g6.mongodb.net/meetups?retryWrites=true&w=majority";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup successfully add" });
  }
}

export default handler;

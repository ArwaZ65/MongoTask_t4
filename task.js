const { MongoClient } = require("mongodb");

// MongoDB connection URL
const uri = "mongodb://127.0.0.1:27017"; // Ensure MongoDB is running

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("TasktestDB"); // Change to your DB name
    const collection = database.collection("users"); // Change collection name if needed

    // 1. Insert two documents using insertOne
    await collection.insertOne({ name: "Alice", age: 25 });
    await collection.insertOne({ name: "Bob", age: 30 });

    console.log("Inserted 2 documents using insertOne");

    // 2. Insert 10 documents using insertMany (5 with age 27)
    const users = [
      { name: "arwa", age: 27 },
      { name: "David", age: 27 },
      { name: "Eve", age: 27 },
      { name: "Frank", age: 27 },
      { name: "Grace", age: 27 },
      { name: "Helen", age: 22 },
      { name: "Ivan", age: 35 },
      { name: "Jack", age: 40 },
      { name: "Kathy", age: 29 },
      { name: "Leo", age: 31 },
    ];

    await collection.insertMany(users);
    console.log("Inserted 10 documents using insertMany");

    // 3. Find and count all documents where age is 27
    const age27Docs = await collection.find({ age: 27 }).toArray();
    console.log("Documents with age 27:", age27Docs);
    console.log("Count of documents with age 27:", age27Docs.length);

    // 4. Limit results to the first 3 documents where age is 27
    const limitedDocs = await collection.find({ age: 27 }).limit(3).toArray();
    console.log("First 3 documents with age 27:", limitedDocs);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

run();

# MongoDB Task - Insert, Find, and Count Documents  

This project demonstrates how to interact with a MongoDB database using Node.js and the `mongodb` package. The script performs the following tasks:

- 🟢 Connects to a local MongoDB instance  
- 🟢 Inserts multiple documents into a collection  
- 🟢 Finds and counts specific documents based on a condition  
- 🟢 Limits query results  

---

## 📌 Setup & Installation  

### 1️⃣ Install MongoDB  
Ensure that MongoDB is installed and running locally on `mongodb://127.0.0.1:27017`.  

### 2️⃣ Clone the Repository  
```bash
git clone <your-repo-url>
cd <your-project-folder>
```
### 3️⃣ Install Dependencies

```bash
npm install mongodb
```
## 📌 How the Script Works
###🔹 1. Connect to MongoDB
The script establishes a connection to a MongoDB database named TasktestDB and a collection named users.

###🔹 2. Insert Data
insertOne(): Adds two individual user documents (Alice and Bob).
insertMany(): Inserts 10 users, with 5 having age 27.
###🔹 3. Find and Count Documents
Fetches all documents where age = 27.
Counts how many documents match this condition.
Limits the output to the first 3 documents that match.
🚀 Running the Script
Run the script using:

```bash
node index.js
```
## ✅ Expected output:
```bash
Connected to MongoDB
Inserted 2 documents using insertOne
Inserted 10 documents using insertMany
Documents with age 27: [...]
Count of documents with age 27: 5
First 3 documents with age 27: [...]
Connection closed
```
## 🛠 Customization
Change the database name in:

```bash
const database = client.db("TasktestDB");
```
Modify the collection name:
```bash
const collection = database.collection("users");
```
Add more filtering conditions in find() queries.

## 📦 Dependencies
### MongoDB
### Node.js
### mongodb (npm package)
## ⚠️ Troubleshooting
### 🔴 MongoDB Not Running?
Start MongoDB using:

```bash
mongod
```
### 🔴 Connection Issues?
Ensure the correct MongoDB URI is used:

```bash
const uri = "mongodb://127.0.0.1:27017";
```
### 🔴 Errors in Queries?
Ensure the database and collection names match.

## 👩‍💻 Author
### Arwa Zakaria
🚀 Frontend Developer & Full-Stack Learner

```bash
This version keeps everything structured, readable, and properly formatted for a `README.md` file. Let me know if you need any modifications! 😊
```

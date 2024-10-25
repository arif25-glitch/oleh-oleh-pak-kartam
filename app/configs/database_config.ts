import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://umkmpakkartam:myAdmin123;@cluster0.dl16a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
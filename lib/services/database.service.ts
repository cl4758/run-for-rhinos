import * as mongoDB from "mongodb";

export const collections: { activities?: mongoDB.Collection } = {}

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGODB_URI!);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const activitiesCollection: mongoDB.Collection = db.collection('activities');

  collections.activities = activitiesCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${activitiesCollection.collectionName}`);
}

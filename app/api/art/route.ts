import {NextResponse} from "next/server";
import clientPromise from "@/lib/mongodb";

const database = process.env.MONGODB_DATABASE as string;
const art = process.env.COLLECTION_ART as string;

export async function GET() {
  try {
    console.log("Connecting to MongoDB client");
    const client = await clientPromise;
    console.log("Connected to MongoDB client");
    const db = client.db(database);
    console.log("Using database: portfolio-db");
    const artList = await db
      .collection(art)
      .find({}, {projection: {previewImgUrl: 1, _id: 1}})
      .toArray();
    console.log("Art Collection:", artList);
    return NextResponse.json(artList);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {error: "Failed to fetch images"},
      {status: 500}
    );
  }
}

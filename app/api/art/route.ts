import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { validatePostRequest } from "@/utils/utils";

const database = process.env.MONGODB_DATABASE as string;
const collection = process.env.COLLECTION_ART as string;

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(database);
    const artList = await db
      .collection(collection)
      .find({}, { projection: { preview: 1, _id: 1, artName: 1 } })
      .toArray();
    return NextResponse.json(artList);
  } catch (error) {
    console.error("Error while fetching all data:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(database);
    const body = await req.json();
    validatePostRequest(body);
    const res = await db.collection(collection).insertOne(body);
    return new Response(JSON.stringify({ success: true, id: res.insertedId }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error inserting document:", error);
    return new Response(
      JSON.stringify({ error: "Failed to insert document" }),
      {
        status: 500,
      }
    );
  }
}

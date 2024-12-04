import { NextResponse } from "next/server";
import { BSON, ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

const database = process.env.MONGODB_DATABASE as string;
const art = process.env.COLLECTION_ART as string;

export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const oid = new ObjectId(id); // No need for BSON prefix here.

  try {
    const client = await clientPromise;
    const db = client.db(database);
    const res = await db.collection(art).findOne({ _id: oid });
    if (!res) {
      return NextResponse.json({ error: "Not Found." }, { status: 404 });
    }
    return NextResponse.json(res);
  } catch (error) {
    console.error("Error while fetching data with id {}:", id, error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}

// export async function PUT(
//   req: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await context.params;

//   if (!ObjectId.isValid(id)) {
//     return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
//   }
// }

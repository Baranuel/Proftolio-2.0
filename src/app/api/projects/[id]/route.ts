import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";

export async function GET(request: Request, context: any) {
  const client = await clientPromise;
  const db = client.db("portfolio-samuel");
  const projects = await db
    .collection("projects")
    .findOne({ _id: new ObjectId(context.params.id) });
  return NextResponse.json(projects);
}

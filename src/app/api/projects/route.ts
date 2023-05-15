import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("portfolio-samuel");
  const projects = await db.collection("projects").find({}).toArray();
  return NextResponse.json(projects);
}

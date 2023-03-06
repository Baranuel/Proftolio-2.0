import clientPromise from "../../../lib/mongodb";

export async function GET(request: Request) {
  const client = await clientPromise;
  const db = client.db("portfolio-samuel").collection("projects");
  const projects = await db.find({}).toArray();
  console.log(projects);
  return new Response(JSON.stringify(projects));
}

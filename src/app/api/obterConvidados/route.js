import mongooseConnect from "../../../../lib/mongodb";
import Convidados from "../../../../models/convidado";

const handler = async (req) => {
  try {
    await mongooseConnect();
    const body = await req.json(); // 👈
    console.log(body);
    const prompt = await Convidados.find();
    if (!prompt) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
export { handler as GET };

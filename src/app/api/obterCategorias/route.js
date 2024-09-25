import mongooseConnect from "../../../../lib/mongodb";
import CategoriaConvidado from "../../../../models/categoriaConvidado";

const handler = async () => {
  try {
    await mongooseConnect();
    const prompt = await CategoriaConvidado.find();
    if (!prompt) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
export { handler as GET };

const handler2 = async (req) => {
  try {
    await mongooseConnect();
    const body = await req.json(); // 👈
    const newEvento = new CategoriaConvidado(body);
    await newEvento.save();
    return new Response(JSON.stringify(newEvento), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new evento", { status: 500 });
  }
};
export { handler2 as POST };

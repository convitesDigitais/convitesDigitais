import mongooseConnect from "../../../../lib/mongodb";
import CategoriaConvidado from "../../../../models/categoriaConvidado";

const handler = async (req) => {
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
export { handler as POST };

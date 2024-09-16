import mongooseConnect from "../../../../lib/mongodb";
import ConviteEvento from "../../../../models/conviteEnvento";

const handler = async (req) => {
  try {
    await mongooseConnect();
    const body = await req.json(); // 👈
    const newEvento = new ConviteEvento(body);
    await newEvento.save();
    return new Response(JSON.stringify(newEvento), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new evento", { status: 500 });
  }
};
export { handler as POST };

import mongooseConnect from "../../../../lib/mongodb";
import ConviteEvento from "../../../../models/conviteEnvento";

const handler = async () => {
  try {
    await mongooseConnect();

    const prompt = await ConviteEvento.find();
    if (!prompt) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
export { handler as GET };

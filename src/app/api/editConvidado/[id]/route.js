import mongooseConnect from "../../../../../lib/mongodb";
import Convidados from "../../../../../models/convidado";

const handler = async (request, { params }) => {
  try {
    await mongooseConnect();
    const body = await request.json(); // 👈
    const convidado = await Convidados.findOneAndUpdate(
      {
        _id: params.id,
      },
      body,
      { new: true }
    );
    return new Response(JSON.stringify(convidado), { status: 200 });
  } catch (error) {
    return new Response("Failed to edit convidado", { status: 500 });
  }
};
export { handler as PATCH };

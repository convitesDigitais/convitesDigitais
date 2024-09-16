import mongooseConnect from "../../../../../lib/mongodb";
import Convidados from "../../../../../models/convidado";

const handler = async (request, { params }) => {
  try {
    await mongooseConnect();
    await Convidados.findByIdAndDelete(params.id);
    return new Response("Sucess", { status: 200 });
  } catch (error) {
    return new Response("Failed to edit convidado", { status: 500 });
  }
};
export { handler as DELETE };

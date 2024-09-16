import { Schema, model, models } from "mongoose";

const ConvidadosSchema = new Schema(
  {
    nomeConvidado: { type: String, require: true },
    mesa: { type: String, require: true },
    categoriaConvidado: { type: String, require: true },
    numeroAcompanhantes: { type: String, require: true },
    status: { type: String, require: true },
    creator: { type: String, require: true },
  },
  { timestamps: true }
);

const Convidados = models.Convidados || model("Convidados", ConvidadosSchema);

export default Convidados;

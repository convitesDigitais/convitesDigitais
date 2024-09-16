import { Schema, model, models } from "mongoose";

const CategoriaConvidadoSchema = new Schema(
  {
    categoriaConvidado: { type: String, require: true },
    creator: { type: String, require: true },
  },
  { timestamps: true }
);

const CategoriaConvidado =
  models.CategoriaConvidado ||
  model("CategoriaConvidado", CategoriaConvidadoSchema);

export default CategoriaConvidado;

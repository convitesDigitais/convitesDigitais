import { Schema, model, models } from "mongoose";

const MesasSchema = new Schema(
  {
    mesa: { type: String, require: true },
    creator: { type: String, require: true },
  },
  { timestamps: true }
);

const Mesas = models.Mesas || model("Mesas", MesasSchema);

export default Mesas;

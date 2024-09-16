import { Schema, model, models } from "mongoose";

const ConviteEventoSchema = new Schema(
  {
    nomeNoiva: { type: String, require: true },
    nomeNoivo: { type: String, require: true },
    dataEvento: { type: String, require: true },
    enderecoSalao: { type: String, require: true },
    enderecoIgreja: { type: String, require: true },
    totalConvidados: { type: String, require: true },
    horaCerimoniaReligiosa: { type: String, require: true },
    horaCerimoniaCivil: { type: String, require: true },
    latitudeCivil: { type: String, require: true },
    longitudeCivil: { type: String, require: true },
    latitudeReligiosa: { type: String, require: true },
    longitudeReligiosa: { type: String, require: true },
    copoAgua: { type: String, require: true },
    status: { type: String, require: true },
    creator: { type: String, require: true },
  },
  { timestamps: true }
);

const ConviteEvento =
  models.ConviteEvento || model("ConviteEvento", ConviteEventoSchema);

export default ConviteEvento;

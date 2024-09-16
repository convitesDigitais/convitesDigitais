import { Schema, model, models } from "mongoose";

const UsersSchema = new Schema(
  {
    nomeUser: { type: String, require: true },
    email: { type: String, require: true },
    contacto: { type: String, require: true },
    senha: { type: String, require: true },
  },
  { timestamps: true }
);

const Users = models.Users || model("Users", UsersSchema);

export default Users;

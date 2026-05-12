import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  id?: string;
  name: string;
  fullName: string;
  email: string;
  password?: string;
  role: "user" | "admin";
  age?: number;
  createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    age: { type: Number },
  },
  { timestamps: true }
);


const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;

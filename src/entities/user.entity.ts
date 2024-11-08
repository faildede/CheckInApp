import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import { Role } from "../enum/role.enum";

@Schema()
export class UserEntity extends Document {
  @Prop({ type: Types.ObjectId })
  id: Types.ObjectId;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({type: [String], enum: Role})
  roles: Role[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);


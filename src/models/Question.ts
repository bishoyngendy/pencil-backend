import { model, Schema, Model, Document } from "mongoose";

export interface IQuestion extends Document {
  name: string;
  annotaions: string[];
}

const QuestionSchema: Schema = new Schema({
  name: { type: String, required: true },
  annotations: {
    type: [String],
    default: [],
  },
});

export const Question: Model<IQuestion> = model("Question", QuestionSchema);

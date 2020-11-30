import { model, Schema, Model, Document } from "mongoose";

export interface IAnnotation extends Document {
  text: string;
  parentAnnotations: string[];
}

const AnnotaionSchema: Schema = new Schema({
  text: { type: String, required: true },
  parentAnnotations: [{ type: String, required: true }],
});

export const Annotation: Model<IAnnotation> = model(
  "Annotation",
  AnnotaionSchema
);

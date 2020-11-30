import express from "express";
import { Annotation } from "../models/Annotation";

const router = express.Router();

router.post("/", async (req, res) => {
  let annotaions: any[] = [];
  Object.keys(req.body).forEach((key) => {
    const item = {
      text: key,
      parentAnnotations: [key, ...req.body[key]],
    };
    annotaions.push(item);
  });
  const addedAnnotations = await Annotation.insertMany(annotaions);
  res.send(addedAnnotations);
});

export default router;

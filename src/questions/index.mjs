import express from "express";
import { Annotation } from "../models/Annotation";
import { Question } from "../models/Question";

const router = express.Router();

router.post("/", async (req, res) => {
  const annotations = await Annotation.find();
  let questions: any[] = [];
  Object.keys(req.body).forEach((questionName) => {
    const directAnnotations: string[] = req.body[questionName];
    let totalAnnotations = new Set();
    directAnnotations.forEach((directAnnotation) => {
      const annotationsInDB = annotations.filter((item) => {
        return item.text === directAnnotation;
      });
      if (annotationsInDB && annotationsInDB.length > 0) {
        totalAnnotations = new Set([
          ...totalAnnotations,
          ...annotationsInDB[0].parentAnnotations,
        ]);
      }
    });
    const item = {
      name: questionName,
      annotations: [...totalAnnotations],
    };
    questions.push(item);
  });
  const addedQuestions = await Question.insertMany(questions);
  res.send(addedQuestions);
});

router.get("/search", async (req, res) => {
  const q = req.query.q;
  if (q) {
    const questions = await Question.find({ annotations: q.toString() });
    res.send(questions);
  } else {
    res.send([]);
  }
});

export default router;

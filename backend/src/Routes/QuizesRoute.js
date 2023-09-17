const express = require("express");
const quizes = require("../Models/Quizes");

const quizRouter = express.Router();

quizRouter
  .get("/", async (req, res) => {
    try {
      const result = await quizes.find({});
      return res.status(200).json(result);
    } catch (error) {
      return res.json({ error });
    }
  })

  .get("/:id", async (req, res) => {
    var id = req.params.id;
    try {
      const result = await quizes.findOne({ _id: id });
      if (!result) {
        return res.status(404).json("Item Not Found");
      } else {
        return res.status(200).json(result);
      }
    } catch (error) {
      return res.json({ error });
    }
  })

  .post("/createQuiz", async (req, res) => {
    const { Title, Course, Topic, Due, Question, Choices, CorrectAnswer } = req.body;
    try {
      const result = await quizes.create({
        Title,
        Course,
        Topic,
        Due,
        Question,
        Choices,
        CorrectAnswer,
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.json({ error });
    }
  })

  .post("/updateQuiz", async (req, res) => {
    const {id,Choices} = req.body;
    try {
      const result = await quizes.findOneAndUpdate(
        { _id: id },
        { Choices}
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.json({ error });
    }
  })

  .delete("/:id", async (req, res) => {
    var id = req.params.id;
    try {
      const result = await quizes.findOneAndDelete({ _id: id });
      if (!result) {
        return res.status(404).json("Item Not Found");
      } else {
        return res.status(200).json(result);
      }
    } catch (error) {
      return res.json({ error });
    }
  });

module.exports = quizRouter;

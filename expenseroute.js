import express from "express";
import Expense from "../models/Expense.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const expenses = await Expense.find()
    .populate("paidBy")
    .populate("group")
    .populate("splitBetween");
  res.json(expenses);
});

router.post("/", async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.status(201).json(expense);
});

export default router;

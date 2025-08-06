import express from "express";
import Group from "../models/Group.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const groups = await Group.find().populate("members");
  res.json(groups);
});

router.post("/", async (req, res) => {
  const group = new Group(req.body);
  await group.save();
  res.status(201).json(group);
});

export default router;

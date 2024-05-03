import express from "express";
import pingRouter from "./ping.ts";
import topicRouter from "./topic.ts";
import subtopicRouter from "./subtopic.ts";
import entryRouter from "./entry.ts";

const router = express.Router();

router.use("/ping", pingRouter)
router.use("/topic", topicRouter)
router.use("/subtopic", subtopicRouter)
router.use("/entry", entryRouter)

export default router;
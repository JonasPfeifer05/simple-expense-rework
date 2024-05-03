import express from "express";
import db from "../../db.ts";
import type {SubTopic, Topic} from "../../../client/types/entryData.ts"

const router = express.Router();

router.get("/", async (req, res) => {
    const result = await db.query<SubTopic>("SELECT id, name, icon FROM subtopic ORDER BY name");
    res.send([...result]);
})
router.post("/", async (req, res) => {
    const data = req.body as SubTopic;
    await db.query(`
        INSERT INTO subtopic(name, icon)
        VALUES ($1, $2)
    `, [data.name, data.icon])
    res.send();
})

export default router;
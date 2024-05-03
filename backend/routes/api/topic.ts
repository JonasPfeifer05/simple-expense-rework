import express from "express";
import db from "../../db.ts";
import type { Topic } from "../../../client/types/entryData.ts"

const router = express.Router();

router.get("/", async (req, res) => {
    const result = await db.query<Topic>("SELECT id, name FROM topic ORDER BY name");
    res.send([...result]);
})
router.post("/", async (req, res) => {
    const data = req.body as Topic;
    await db.query(`
        INSERT INTO topic(name)
        VALUES ($1)
    `, [data.name])
    res.send();
})

export default router;
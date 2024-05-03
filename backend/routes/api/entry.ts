import express from "express";
import db from "../../db.ts";
import type {EntryData, Topic} from "../../../client/types/entryData.ts"
import type {EntryDTO} from "../../types/entryDTO.ts";
import type {EntryDBO} from "../../types/entryDBO.ts";


const router = express.Router();

router.get("/", async (req, res) => {
    const result = await db.query<EntryDBO>(`
        SELECT e.id   as id,
               e.amount as amount,
               t.id   as topic_id,
               t.name as topic_name,
               s.id   as subtopic_id,
               s.name as subtopic_name,
               s.icon as subtopic_icon
        FROM entry e
                 JOIN topic t ON e.topic_id = t.id
                 JOIN subtopic s ON e.subtopic_id = s.id
        ORDER BY e.id DESC
    `);

    const entries: EntryData[] = [...result].map(function(entryDBO): EntryData {
        return {
            topic: {
                id: entryDBO.topic_id,
                name: entryDBO.topic_name,
            },
            subTopic: {
                id: entryDBO.subtopic_id,
                name: entryDBO.subtopic_name,
                icon: entryDBO.subtopic_icon,
            },
            amount: entryDBO.amount
        }
    })

    res.send(entries);
})

router.post("/", async (req, res) => {
    const data = req.body as EntryDTO;
    await db.query(`
        INSERT INTO entry(topic_id, subtopic_id, amount)
        VALUES ($1, $2, $3)
    `, [data.topic_id, data.subtopic_id, data.amount])
    res.send();
})

export default router;
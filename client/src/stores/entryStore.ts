import {defineStore} from "pinia";
import type {EntryData} from "@/types/entryData";

export interface EntryStoreState {
    entries: EntryData[],
}

export const useEntryStore = defineStore("entry", {
    state: (): EntryStoreState => ({
        entries: []
    }),
    getters: {
        balance: (state) => {
            let sum = 0;
            for (let entry of state.entries) {
                sum += entry.amount;
            }
            return sum;
        }
    },
    actions: {
        async fetchEntries() {
            this.entries = await (await fetch("/api/entry", {method: "GET"})).json();
        },
        async addEntry(entry: EntryData) {
            console.log(entry)
            await fetch("/api/entry", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    topic_id: entry.topic.id,
                    subtopic_id: entry.subTopic.id,
                    amount: entry.amount,
                })
            })
            this.entries = [entry, ...this.entries];
        }
    }
});
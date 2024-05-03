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
            return state.entries.reduce((sum, entry) => {
                return sum + entry.amount
            }, 0);
        }
    },
    actions: {
        async fetchEntries() {
            this.entries = await (await fetch("/api/entry", {method: "GET"})).json();
        },
        async addEntry(entry: EntryData) {
            await fetch("/api/entry", {
                method: "POST",
                body: {
                    topic_id: entry.topic.id,
                    subtopic_id: entry.subTopic.id,
                    amount: entry.amount,
                } as any
            })
            this.entries = [entry, ...this.entries];
        }
    }
});
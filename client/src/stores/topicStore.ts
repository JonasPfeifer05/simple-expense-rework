import type {SubTopic, Topic} from "@/types/entryData";
import {defineStore} from "pinia";

export interface TopicStoreState {
    topics: Topic[],
    subTopics: SubTopic[]
}

export const useTopicStore = defineStore("topic", {
    state: (): TopicStoreState => ({
        topics: [],
        subTopics: [],
    }),
    actions: {
        async fetchTopics() {
            this.topics = await (await fetch("/api/topic", {method: "GET"})).json();
        },
        async fetchSubTopics() {
            this.subTopics = await (await fetch("/api/subtopic", {method: "GET"})).json();
        }
    }
})
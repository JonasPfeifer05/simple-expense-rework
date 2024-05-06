import type {SubTopic, Topic} from "~/types/entryData";
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
            this.topics = await $fetch<Topic[]>("/api/topic", {method: "GET"});
        },
        async fetchSubTopics() {
            this.subTopics = await $fetch<SubTopic[]>("/api/subtopic", {method: "GET"});
        }
    }
})
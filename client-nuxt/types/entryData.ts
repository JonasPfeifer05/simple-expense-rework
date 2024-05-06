export interface SubTopic {
    id: number,
    icon: string;
    name: string;
}

export interface Topic {
    id: number,
    name: string,
}

export interface EntryData {
    topic: Topic;
    subTopic: SubTopic;
    amount: number;
}
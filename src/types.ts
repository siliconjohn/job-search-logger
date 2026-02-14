
export type LogType = { 
    name: string
}

export type EntrieType = {
    name: string,
    url: string,
    createdAt: Date 
}

export type ActivityListType = {
    entries: EntrieType[];
}
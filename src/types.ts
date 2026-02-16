
export type EntrieType = {
    name: string,
    url: string,
    createdAt: Date,
    key: string
}

export type EntryListType = {
    entries: EntrieType[];
}

export interface EntryListTableType {
    key: string,
    name: string,
    url: string,
    createdAt: Date 
}
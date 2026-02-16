
export type EntrieType = {
    name: string,
    url: string,
    company: string,
    note: string,
    position: string,
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
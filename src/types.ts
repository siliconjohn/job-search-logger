export type EntryKind =  'Application' | 'Note' | 'Contact' | 'Other';

export const entryKindToColor: Record<EntryKind, string> = {
    Application: 'green',
    Note: 'blue',
    Contact: 'gray',
    Other: 'red',
};

export const getEntryKindColor = (kind: EntryKind): string => {
  return entryKindToColor[kind] ?? 'default';
};

// change name
export type EntrieType = { 
    url: string,
    company: string,
    note: string,
    position: string,
    createdAt: string,
    kind: EntryKind
    key: string
}

export type EntryListType = {
    entries: EntrieType[];
}

export interface EntryListTableType {
    key: string,  
    url: string,
    company: string,
    note: string,
    position: string,
    createdAt: string,
    kind: EntryKind
}

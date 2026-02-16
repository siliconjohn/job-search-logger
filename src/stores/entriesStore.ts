import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EntrieType } from '../types';

interface EntriesState {
    entries: EntrieType[];
    addEntry: (entry: EntrieType) => void;
}

export const useEntriesStore = create<EntriesState>()(
    persist(
        (set) => ({
            entries: [],

            addEntry: (entry) =>
                set((state) => ({
                    entries: [...state.entries, entry],
                })),
        }),
        {
            name: 'entries',
        }
    )
);
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveScheme } from '../types/scroll-save-scheme';

const initialState: ScrollSaveScheme = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string, position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;

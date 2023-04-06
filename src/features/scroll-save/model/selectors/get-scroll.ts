import { StateScheme } from 'app/providers/store-provider';
import { createSelector } from '@reduxjs/toolkit';

export const getScroll = (state: StateScheme) => state.scrollSave.scroll;
export const getScrollByPath = createSelector(
    getScroll,
    (state: StateScheme, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);

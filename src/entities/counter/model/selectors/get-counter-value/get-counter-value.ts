import { createSelector } from '@reduxjs/toolkit';
import { CounterScheme } from '../../types/counter-scheme';
import { getCounter } from '../get-counter/get-counter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterScheme) => counter.value,
);

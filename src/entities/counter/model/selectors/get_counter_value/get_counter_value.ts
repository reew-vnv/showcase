import { createSelector } from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/counter';
import { getCounter } from '../get_counter/get_counter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterScheme) => counter.value,
);

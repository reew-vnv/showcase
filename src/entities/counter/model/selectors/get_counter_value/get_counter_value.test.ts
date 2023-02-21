import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/store_provider';
import {
    getCounterValue,
} from './get_counter_value';

describe('get_counter_value.test', () => {
    test('', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateScheme)).toEqual(10);
    });
});
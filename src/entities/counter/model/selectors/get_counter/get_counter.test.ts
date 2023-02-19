import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/store_provider';
import { getCounter } from 'entities/counter/model/selectors/get_counter/get_counter';

describe('get_counter.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateScheme)).toEqual({ value: 10 });
    });
});

import { CounterScheme } from 'entities/counter';
import { counterReducer, counterActions } from './counter_slice';

describe('counter_slice.test', () => {
    test('decrement', () => {
        const state: CounterScheme = { value: 10 };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterScheme = { value: 10 };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});

import { getCounter } from 'entities/counter/model/selectors/get-counter/get-counter';
import { StateScheme } from 'app/providers/store-provider';

describe('get_counter.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateScheme)).toEqual({ value: 10 });
    });
});

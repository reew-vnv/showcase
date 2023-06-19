import { StateScheme } from 'app/providers/store-provider';
import { getCounter } from '../../selectors/get-counter/get-counter';

describe('get_counter.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateScheme)).toEqual({ value: 10 });
    });
});

import { CounterScheme } from 'entities/counter';
import { UserScheme } from 'entities/user';

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme
}

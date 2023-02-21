import { CounterScheme } from 'entities/counter';
import { UserScheme } from 'entities/user';
import { LoginScheme } from 'features/auth_by_username';

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme,
    loginForm?: LoginScheme
}

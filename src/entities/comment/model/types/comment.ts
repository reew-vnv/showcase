import { User } from 'entities/user';

export interface CommentInterface {
    id: string,
    user: User,
    text: string
}

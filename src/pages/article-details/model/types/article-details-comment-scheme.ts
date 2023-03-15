import { EntityState } from '@reduxjs/toolkit';
import { CommentInterface } from 'entities/comment';

export interface ArticleDetailsCommentScheme extends EntityState<CommentInterface>{
    isLoading?: boolean,
    error?: string,
}

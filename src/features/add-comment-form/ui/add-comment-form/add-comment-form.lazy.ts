import { FC, lazy } from 'react';
import {
    AddCommentFormProps,
} from '../add-comment-form/add-comment-form';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => import('./add-comment-form'));

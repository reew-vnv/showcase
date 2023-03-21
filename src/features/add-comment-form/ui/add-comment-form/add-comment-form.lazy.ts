import { FC, lazy } from 'react';
import {
    AddCommentFormProps,
} from 'features/add-comment-form/ui/add-comment-form/add-comment-form';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => import('./add-comment-form'));

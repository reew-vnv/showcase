import { StateScheme } from 'app/providers/store-provider';

export const getAddCommentFormText = (state: StateScheme) => state.addCommentForm?.text ?? '';
export const getAddCommentFormError = (state: StateScheme) => state.addCommentForm?.error;

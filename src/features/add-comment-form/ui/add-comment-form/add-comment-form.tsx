import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/input/input';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useSelector } from 'react-redux';
import {
    getAddCommentFormText,
} from 'features/add-comment-form/model/selectors/add-comment-form-selectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    addCommentFormActions, addCommentFormReducer,
} from 'features/add-comment-form/model/slices/add-comment-form-slice';
import cls from './add-comment-form.module.scss';

export interface AddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    // const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.add_comment_form, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Type comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;

import { FC, lazy } from 'react';
import { LoginFormProps } from './login_form';

export const LoginFormLazy = lazy < FC<LoginFormProps>>(() => import('./login_form'));

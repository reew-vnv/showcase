import { lazy } from 'react';

// export const AboutLazy = lazy(() => import('./about'));

export const AboutLazy = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./about')), 1500);
}));

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/loader/loader';
import cls from './page_loader.module.scss';

interface PageLoaderProps {
    className?: string,
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.page_loader, {}, [className])}>
        <Loader />
    </div>
);

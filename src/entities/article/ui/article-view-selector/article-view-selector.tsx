import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Icon } from 'shared/ui/icon/icon';
import ViewListIcon from 'shared/assets/icons/view-list.svg';
import ViewGridIcon from 'shared/assets/icons/view-grid.svg';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { ArticleView } from '../../model/types/article';
import cls from './article-view-selector.module.scss';

interface ArticleViewSelectorProps {
    className?: string,
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: ViewGridIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ViewListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.article_view_selector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    className={classNames(
                        cls.view_button,
                        { [cls.selected]: viewType.view === view },
                    )}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.selected]: viewType.view === view })}
                    />
                </Button>
            ))}
        </div>
    );
});

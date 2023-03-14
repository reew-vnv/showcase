import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleTextBlock } from 'entities/article/model/types/article';
import { Text } from 'shared/ui/text/text';
import cls from './text-block-component.module.scss';

interface TextBlockComponentProps {
    className?: string,
    block: ArticleTextBlock
}

export const TextBlockComponent = memo(({ className, block }: TextBlockComponentProps) => (
    <div className={classNames(cls.text_block_component, {}, [className])}>
        {block.title && (
            <Text title={block.title} className={cls.title} />
        )}
        {block.paragraphs.map((paragraph) => (
            <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
    </div>
));

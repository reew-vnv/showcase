import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleImageBlock } from 'entities/article/model/types/article';
import { Text } from 'shared/ui/text/text';
import cls from './image-block-component.module.scss';

interface ImageBlockComponentProps {
    className?: string,
    block: ArticleImageBlock
}

export const ImageBlockComponent = memo(({ className, block }: ImageBlockComponentProps) => (
    <div className={classNames(cls.image_block_component, {}, [className])}>
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && (
            <Text text={block.title} />
        )}
    </div>
));

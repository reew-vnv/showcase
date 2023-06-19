import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/text/text';
import { ArticleImageBlock } from '../../model/types/article';
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

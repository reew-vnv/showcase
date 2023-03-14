import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleCodeBlock } from 'entities/article/model/types/article';
import { Code } from 'shared/ui/code/code';
import cls from './code-block-component.module.scss';

interface CodeBlockComponentProps {
    className?: string,
    block: ArticleCodeBlock
}

export const CodeBlockComponent = memo(({ className, block }: CodeBlockComponentProps) => (
    <div className={classNames(cls.code_block_component, {}, [className])}>
        <Code text={block.code} />
    </div>
));

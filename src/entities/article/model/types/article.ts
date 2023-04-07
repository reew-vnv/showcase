import { User } from 'entities/user';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAd'
}

export enum ArticleBlockType {
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
    CODE = 'CODE'
}

export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE,
    code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT,
    paragraphs: string[]
    title?: string,
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}

export interface Article {
    id: string,
    title: string,
    user: User,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[]
}

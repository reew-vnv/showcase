import { combineReducers } from '@reduxjs/toolkit';
import {
    articleDetailsRecommendationsReducer,
} from './article-details-recommendations-slice';
import {
    articleDetailsCommentsReducer,
} from './article-details-comments-slice';
import { ArticleDetailsPageScheme } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

import {
    ArticleDetailsCommentScheme,
} from '../types/article-details-comment-scheme';
import {
    ArticleDetailsRecommendationsScheme,
} from '../types/article-details-recommendations-scheme';

export interface ArticleDetailsPageScheme {
    comments: ArticleDetailsCommentScheme;
    recommendations: ArticleDetailsRecommendationsScheme
}

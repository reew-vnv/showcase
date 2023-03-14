import { StateScheme } from 'app/providers/store-provider';
import {
    getArticleDetailsData, getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/article/model/selectors/article-details';

describe('article-details.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateScheme)).toEqual(data);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateScheme)).toEqual(true);
    });

    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateScheme)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsData(state as StateScheme)).toEqual(undefined);
    });
});

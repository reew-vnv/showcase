import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/test-async-thunk';
import {
    fetchArticleById,
} from 'entities/article/model/services/fetch-article-by-id/fetch-article-by-id';

jest.mock('axios');

const data = {
    id: '1',
    title: 'title',
};

describe('fetch-article-by-id.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk?.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(data.id);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(data.id);

        expect(result.meta.requestStatus).toBe('rejected');
    });
});

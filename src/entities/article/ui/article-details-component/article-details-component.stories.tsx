import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import { Article, ArticleBlockType, ArticleType } from 'entities/article/model/types/article';
import { ArticleDetailsComponent } from 'entities/article';

const article: Article = {
    id: '1',
    title: 'JavaScript News',
    subtitle: 'What new in JS?',
    img: 'https://img.freepik.com/free-icon/file-formats_318-338069.jpg',
    views: 1488,
    createdAt: '11.09.2023',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'username',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title One',
            paragraphs: [
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui '
                + 'blanditiis praesentium voluptatum deleniti atque corrupti quos '
                + 'dolores et quas molestias excepturi sint occaecati cupiditate '
                + 'non provident, similique sunt in culpa qui officia '
                + 'deserunt mollitia animi, id est laborum et dolorum fuga. '
                + 'Et harum quidem rerum facilis est et expedita distinctio.'
                + ' Nam libero tempore, cum soluta nobis est eligendi optio '
                + 'cumque nihil impedit quo minus id quod maxime placeat facere '
                + 'possimus, omnis voluptas assumenda est, omnis dolor repellendus. '
                + 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus '
                + 'saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. '
                + 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis'
                + ' voluptatibus maiores alias consequatur aut perferendis doloribus asperiores '
                + 'repellat.',
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui '
                + 'blanditiis praesentium voluptatum deleniti atque corrupti quos '
                + 'dolores et quas molestias excepturi sint occaecati cupiditate non '
                + 'provident, similique sunt in culpa qui officia deserunt mollitia animi, '
                + 'id est laborum et dolorum fuga. Et harum quidem rerum facilis est et'
                + ' expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi '
                + 'optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, '
                + 'omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam '
                + 'et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et '
                + 'voluptates repudiandae sint et molestiae non recusandae. Itaque earum '
                + 'rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus '
                + 'maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis '
                + 'praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias '
                + 'excepturi sint occaecati cupiditate non provident, similique sunt in culpa '
                + 'qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et'
                + ' harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,'
                + ' cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod '
                + 'maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor '
                + 'repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum '
                + 'necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae '
                + 'non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut'
                + ' reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus '
                + 'asperiores repellat.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.CODE,
            // eslint-disable-next-line max-len
            code: 'const unirest = require("unirest");\n    const getData = async() => {\n    try{\n    const response = await unirest.get("https://www.reddit.com/r/programming.json")\n    console.log(response.body); // HTML\n    }\n    catch(e)\n    {\n    console.log(e);\n    }\n    }\n    getData();',
        },
        {
            id: '3',
            type: ArticleBlockType.TEXT,
            title: 'Title Two',
            paragraphs: [
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
                + ' praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias'
                + ' excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui'
                + ' officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem '
                + 'rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis '
                + 'est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere'
                + ' possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus'
                + ' autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet '
                + 'ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum '
                + 'rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores'
                + ' alias consequatur aut perferendis doloribus asperiores repellat.',
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'
                + ' doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore '
                + 'veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim '
                + 'ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia '
                + 'consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque'
                + ' porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,'
                + ' adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore '
                + 'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis'
                + ' nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid '
                + 'ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea '
                + 'voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem '
                + 'eum fugiat quo voluptas nulla pariatur?',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.IMAGE,
            title: 'Image 1 - site screenshot',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Title Three',
            paragraphs: [
                // eslint-disable-next-line max-len
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                // eslint-disable-next-line max-len
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                // eslint-disable-next-line max-len
                'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
            ],
        },
        {
            id: '6',
            type: ArticleBlockType.IMAGE,
            title: 'Image 1 - site screenshot',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'Title Four',
            paragraphs: [
                // eslint-disable-next-line max-len
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                // eslint-disable-next-line max-len
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                // eslint-disable-next-line max-len
                'On xdgdfthe other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
            ],
        },
    ],
};

export default {
    title: 'entities/article-details-component',
    component: ArticleDetailsComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComponent>;

const Template: ComponentStory<
    typeof ArticleDetailsComponent
    > = (args) => <ArticleDetailsComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const IsLoading = Template.bind({});
IsLoading.args = {};
IsLoading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: 'error',
    },
})];

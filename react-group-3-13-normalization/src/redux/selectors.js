import { createSelector } from 'reselect';

const getAuthorIds = state => state.authors.ids;

export const getSelectedAuthorId = state => state.authors.selectedId;

const getAurhorEntities = state => state.entities.authors;

export const getAllAuthors = createSelector(
    [getAuthorIds, getAurhorEntities],
    (ids, entities) => ids.map(id => entities[id]),
);
// 53:00
// ids-массив ИД
// entities объект ключ - ИД(ids) значение - объект
// вернет массив объектов
// ---------------------------
// entities Локальная база данных
// ids - то что мы хотим взять оттуда
// ---------------------------
// export const getAllAuthors = state => {
//     const ids = getAuthorIds(state);
//     const entities = getAurhorEntities(state);
//     console.log('ids', ids);
//     console.log('entities', entities);

//     return ids.map(id => entities[id]);
// };

const getPostIds = state => state.posts;
const getPostEntities = state => state.entities.posts;
// 1:06
export const getPostsWithAuthor = state => {
    const authorId = getSelectedAuthorId(state);
    const postIds = getPostIds(state);
    const entities = getPostEntities(state);

    // const posts = [];

    // postIds.forEach(postId => {
    //     const post = entities[postId];

    //     if (post.author === authorId) {
    //         posts.push(post);
    //     }
    // });
    // return posts;
    // 2 метода работают

    return postIds.reduce((acc, postId) => {
        const post = entities[postId];

        if (post.author === authorId) {
            acc.push(post);
        }

        return acc;
    }, []);
};

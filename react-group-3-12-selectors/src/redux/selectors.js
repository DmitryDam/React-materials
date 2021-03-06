import { createSelector } from 'reselect';
// Библиотека для мемоизации

export const getSelectedUserId = state => state.users.selectedId;

const getAllUsers = state => state.users.items;

export const getUserIds = createSelector(
    [getAllUsers],
    users => users.map(({ id }) => id),
);
// После деструктуризации
// users => users.map(elem => elem.id),

// export const getUserIds = state => {
//     const allUsers = getAllUsers(state);
//     return allUsers.map(({ id }) => id);
// };

const getAllPosts = state => state.posts;

export const getPostsWithSelectedAuthor = createSelector(
    [getAllPosts, getSelectedUserId],
    (posts, selectedId) => posts.filter(post => post.userId === selectedId),
);

// export const getPostsWithSelectedAuthor = state => {
//     const allPosts = getAllPosts(state);
//     const selectedId = getSelectedUserId(state);

//     return allPosts.filter(post => post.userId === selectedId);
// };

export const makeGetPostsWithAuthor = () =>
    createSelector(
        [getAllPosts, (state, ownProps) => ownProps.id],
        // (state, ownProps) => ownProps.id], функция для прокидывания доп пропов в селектор (ownProps)
        (posts, id) => posts.filter(post => post.userId === id),
    );
// Ниже - функция,  которая сработает 1 раз, выше - функция фабрика - каждый раз
// export const getPostsWithAuthor = createSelector(
//     [getAllPosts, (state, ownProps) => ownProps.id],
//     (posts, id) => posts.filter(post => post.userId === id),
// );

// export const getPostsWithAuthor = (state, ownProps) => {
//     const allPosts = getAllPosts(state);

//     return allPosts.filter(post => post.userId === ownProps.id);
// };

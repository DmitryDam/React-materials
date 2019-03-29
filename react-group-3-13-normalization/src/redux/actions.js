import { normalize } from 'normalizr';
import * as schemas from './schemas';

// console.log(normalizedPosts);

export const actionTypes = {
    FETCH_POSTS: 'FETCH_POSTS',
    DELETE_POST: 'DELETE_POST',
    ADD_POST: 'ADD_POST',
    SELECT_AUTHOR: 'SELECT_AUTHOR',
};

export const fetchPosts = posts => {
    const normalizedPosts = normalize(posts, [schemas.PostSchema]);
    console.log('normalizedPosts', normalizedPosts);
    // Консоль
    // normalizedPosts
    // Object
    // entities:
    // authors: {660b9244-9edc-46bf-80ad-f4ca43725a6d: {…}, ace8dff9-c7c7-4e8b-a863-73c180d7516e: {…}, 9444442d-8e5c-407c-b5e4-86d7bfcdd968: {…}, 796f9087-4c42-4d4a-abed-c29fc5e7d6ae: {…}, cac1911d-2ca1-485d-88db-56ecfe43b867: {…}}
    // posts: {15318875-8220-4594-bb38-99b79ba43ac5: {…}, 691c4363-c4ea-4060-baa2-9e4d59e074ec: {…}, 32ff6651-0bab-46e9-85a6-0012c12d924f: {…}, f15fd33e-e558-4887-97ec-7e4234afcd08: {…}, 59084f63-1b52-4d3a-84b4-2ac2a6ac9f25: {…}, …}
    // __proto__: Object
    // result: (30) ["15318875-8220-4594-bb38-99b79ba43ac5", "691c4363-c4ea-4060-baa2-9e4d59e07
    return {
        type: actionTypes.FETCH_POSTS,
        payload: {
            ids: {
                posts: Object.keys(normalizedPosts.entities.posts),
                authors: Object.keys(normalizedPosts.entities.authors),
            },
            entities: normalizedPosts.entities,
        },
    };
};

export const deletePost = id => ({
    type: actionTypes.DELETE_POST,
    payload: id,
});

export const selectAuthor = id => ({
    type: 'SELECT_AUTHOR',
    payload: id,
});

// export const addPost = () => ({
//     type: actionTypes.ADD_POST,
//     payload: {
//         ids: {
//             posts: ['cool-id'],
//         },
//         entities: {
//             posts: {
//                 'cool-id': { id: 'cool-id', title: 'title!' },
//             },
//         },
//     },
// });

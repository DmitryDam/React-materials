import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from '../PostList/PostListContainer';
import AuthorList from '../AuthorList/AuthorListContainer';
import * as actions from '../../redux/actions';
import s from './App.module.css';

import posts from '../../posts.json';
// Аction для componentDidMount
// ------------------------------
// export const fetchPosts = posts => {
//     const normalizedPosts = normalize(posts, [schemas.PostSchema]);
//     console.log('normalizedPosts', normalizedPosts);

//     return {
//         type: actionTypes.FETCH_POSTS,
//         payload: {
//             ids: {
//                 posts: Object.keys(normalizedPosts.entities.posts),
//                 authors: Object.keys(normalizedPosts.entities.authors),
//             },
//             entities: normalizedPosts.entities,
//         },
//     };
// };
class App extends Component {
    componentDidMount() {
        this.props.fetchPosts(posts);
    }

    render() {
        return (
            <main className={s.container}>
                <section className={s.sticky}>
                    <AuthorList />
                </section>

                <section className={s.section}>
                    <PostList />
                </section>
            </main>
        );
    }
}

export default connect(
    null,
    { fetchPosts: actions.fetchPosts },
)(App);

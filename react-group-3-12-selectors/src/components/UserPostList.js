import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withRenderLog from './hoc/withRenderLog';
import * as selectors from '../redux/selectors';

const UserPostList = ({ id, posts }) => (
    <div>
        <b>UserID: {id}</b>
        <ul>
            {posts.map(p => (
                <li key={p.id}>{p.body}</li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = () => {
    // mapStateToProps в виде фабрики, для каждого компонента
    const getPostsWithAuthor = selectors.makeGetPostsWithAuthor();

    return (state, ownProps) => ({
        posts: getPostsWithAuthor(state, ownProps),
    });
};
// ownProps - второй параметр mapStateToProps - собственные пропы компонента
// ownProps все пропы или  ownProps.id только id

{
    /* <UserPostList id={1} />
<UserPostList id={2} />  */
}
// =========================
// Из selectors.js передается так :
// export const makeGetPostsWithAuthor = () =>
//     createSelector(
//         [getAllPosts, (state, ownProps) => ownProps.id],
//         // (state, ownProps) => ownProps.id], функция для прокидывания доп пропов в селектор (ownProps)
//         (posts, id) => posts.filter(post => post.userId === id),
//     );

export default compose(
    connect(mapStateToProps),
    withRenderLog,
)(UserPostList);
// compose - Встроенная в редакс функция, для оборачивания нескольких компонентов

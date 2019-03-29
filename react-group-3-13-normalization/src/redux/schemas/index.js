import { schema } from 'normalizr';

const AuthorSchema = new schema.Entity('authors');
console.log('AuthorSchema', AuthorSchema);
console.log('PostSchema', PostSchema);

export const PostSchema = new schema.Entity('posts', {
    author: AuthorSchema,
    // Первый аргумент - имя коллекции
    // Второй-объект настроек
});
// const normalizedPosts = normalize(posts, [schemas.PostSchema]);
// posts обычные посты

// Получится:
// authors:
// 660b9244-9edc-46bf-80ad-f4ca43725a6d:
// id: "660b9244-9edc-46bf-80ad-f4ca43725a6d"
// image: "https://s3.amazonaws.com/uifaces/faces/twitter/alsobrooks/128.jpg"
// name: "Rollin Lehner"

// posts:
// 0d824b11-12a6-4614-ba89-0556d2b3be90:
// author: "ace8dff9-c7c7-4e8b-a863-73c180d7516e"
// body: "Beatae natus quod voluptates accusamus exercitationem culpa veniam eos. Fuga rerum similique asperiores quam vel ducimus est error et. Eos impedit iure ipsam."
// createdAt: "2019-01-12T13:46:39.101Z"
// id: "0d824b11-12a6-4614-ba89-0556d2b3be90"
// image: "http://lorempixel.com/640/480"
// title: "asperiores aliquam ipsam"

// Исходный объект
// {
//     "id": "15318875-8220-4594-bb38-99b79ba43ac5",
//     "createdAt": "2019-01-11T18:05:29.251Z",
//     "image": "http://lorempixel.com/640/480",
//     "title": "dolores aut dolores",
//     "body": "Ut architecto sit magni aut dolore aliquam. Nam qui nobis qui eum officiis similique tempore. Eaque sint vero nihil dignissimos cum magnam repellendus. Velit aspernatur quae est.",
//     "author": {
//         "id": "660b9244-9edc-46bf-80ad-f4ca43725a6d",
//         "name": "Rollin Lehner",
//         "image": "https://s3.amazonaws.com/uifaces/faces/twitter/alsobrooks/128.jpg"
//     }
// },

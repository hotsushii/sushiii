// import DataApi from '../DataApi';
// import { data } from '../testData';
//
// const api = new DataApi(data);
//
// console.log(api);
//
// describe('DataApi', () => {
//   it('exposes articles as an object', () => {
//     const articles = api.getArticles();
//     const articleId = data.articles[0].id;
//     const articleTitle = data.articles[1].title;
//
//     expect(articles).toHaveProperty(articleId);
//     expect(articles[articleId].title).toBe(articleTitle);
//   });
//
//   it('exposes authors as an object', () => {
//     const authors = api.getAuthors();
//     const authorId = data.authors[0].id;
//     const authorFirstName = data.authors[1].firstName;
//     expect(authors).toHaveProperty(authorId);
//     expect(authors[authorId].firstName).toBe(authorFirstName);
//   });
// });
"use strict";
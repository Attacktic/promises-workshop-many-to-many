var Promise = require('bluebird');
var knex = require('../db/knex');

function Authors() {
  return knex('authors');
}

function Books(){
  return knex('books');
}

function Authors_Books() {
  return knex('authors_books');
}

function prepIds(ids) {
  return ids.filter(function (id) {
    return id !== '';
  })
}

function insertIntoAuthorsBooks(bookIds, authorId) {
  bookIds = prepIds(bookIds);
  return Promise.all(bookIds.map(function (book_id) {
    book_id = Number(book_id)
    return Authors_Books().insert({
      book_id: book_id,
      author_id: authorId
    })
  }))
}

function getAuthorBooks(id) {
  return Authors().where("id", id).first().then(function(author){
      return Authors_Books().pluck('author_id', author.id).then(function(books){
        return Books().whereIn("id", books).then(function(allbooks){
          author.books = allbooks;
          return author;
        })
      })
  })
}

function getBookAuthors(id) {
  return Books().where("id", id).first().then(function(book){
      return Authors_Books().pluck('book_id', book.id).then(function(authors){
        return Authors().whereIn("id", authors).then(function(allauthors){
          book.authors = allauthors;
          return book;
        })
      })
  })
}


function getAllAuthorsData() {
  return knex('authors').pluck('id').then(function(ids){
    var all = [];
    ids.forEach(function(id){
      all.push(getAuthorBooks(id))
    })
    return Promise.all(all).then(function(authors) {
      return authors;
    });
  })
}

function getAllBooksData() {
  return knex('books').pluck('id').then(function(ids){
    var all = [];
    ids.forEach(function(id){
      all.push(getBookAuthors(id))
    })
    return Promise.all(all).then(function(books) {
      return books;
    });
  })
}

module.exports = {
  getAuthorBooks: getAuthorBooks,
  getBookAuthors: getBookAuthors,
  getAllAuthorsData: getAllAuthorsData,
  getAllBooksData: getAllBooksData,
  insertIntoAuthorsBooks: insertIntoAuthorsBooks
}

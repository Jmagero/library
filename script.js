const closeBtn = document.getElementById('close');
const newBookBtn = document.getElementById('new-book-btn');
const formContainer = document.querySelector('.form-container');
const backDrop = document.querySelector('.backdrop');
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const card = document.getElementById('card');
let read = document.getElementById('read');
let myLibrary = [];
let book;

//Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add book to library
function addBookToLibrary(inputArr) {
  myLibrary.push(inputArr);
}

//Display all books
function displayBooks(library) {
  while (card.childNodes.length) {
    card.removeChild(card.lastChild);
  }

  library.forEach(function(book) {
    displayBook(book);
  });
}
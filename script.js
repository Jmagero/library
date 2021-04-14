const new_book_btn = document.getElementById('new-book-btn');
const form_container = document.querySelector('.form-container');
const backdrop = document.querySelector('.backdrop');
const form = document.getElementById('form');
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const card = document.getElementById('card')
let read = document.getElementById('read')
let myLibrary = [];
let book;

//Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

// Add book to library
function addBookToLibrary(inputArr) {
  myLibrary.push(inputArr);
}

//Display book
function displayBook(library) {
  library.forEach(function(bk) {
  });
}

new_book_btn.addEventListener('click', function(e){
  form_container.classList.add('visible');
  backdrop.classList.add('display');
});

read.addEventListener('click', function(e){
  read.setAttribute('value', 'Yes');
});

form.addEventListener('submit', function(e){
  e.preventDefault();
  book = new Book(title.value, author.value, pages.value, read.value);
  addBookToLibrary(book)
  form.reset();
  read.setAttribute('value', 'No');
  displayBook(myLibrary)
  form_container.classList.remove('visible');
  backdrop.classList.remove('display');
});
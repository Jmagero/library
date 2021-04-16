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

//Display single book
function displayBook(newBook) {
  let bookContainer = card.appendChild(document.createElement('div'));
  bookContainer.setAttribute('class','bkcontainer');
  for (const [key, value] of Object.entries(newBook)) {
    let newElem;

    if(key == 'read'){
      newElem = bookContainer.appendChild(document.createElement('button'));
      newElem.setAttribute('class','toggleBtn');
      newElem.setAttribute('data-status',`${myLibrary.indexOf(newBook)}`);
      newElem.setAttribute('onclick', 'toggleStatus(this);');
      value === 'No' ? newElem.classList.add('status-color') : newElem.classList.remove('status-color');
    }
    else {
      newElem = bookContainer.appendChild(document.createElement('p'));
    }

    newElem.appendChild(document.createTextNode(`${key} : ${value}`));
  }

  let removeBtn = bookContainer.appendChild(document.createElement('button'));
  removeBtn.appendChild(document.createTextNode('Remove Book'));
  removeBtn.setAttribute('class','removeBtn');
  removeBtn.setAttribute('data-index', `${myLibrary.indexOf(newBook)}`);
  removeBtn.setAttribute('onclick', 'removeBook(this);');
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

//Remove a book
function removeBook(element){
  let index = parseInt(element.getAttribute('data-index'), 10);
  let removedbk = myLibrary.splice(index, 1);
  displayBooks(myLibrary);
}

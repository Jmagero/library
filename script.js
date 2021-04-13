const new_book_btn = document.getElementById('new-book-btn');
const form_container = document.querySelector('.form-container');
const backdrop = document.querySelector('.backdrop');

new_book_btn.addEventListener('click', function(e){
  form_container.classList.add('visible');
  backdrop.classList.add('display');
});
import Library from './Library.js';
import Book from './Book.js';
import { DateTime } from './Luxon.js';

const Lib = new Library();
const getBook = () => {
  const titleInputElement = document.getElementById('titleInput');
  const authorInputElement = document.getElementById('authorInput');
  const bookTitle = titleInputElement.value;
  const bookAuthor = authorInputElement.value;
  titleInputElement.value = '';
  authorInputElement.value = '';
  const book = new Book(bookTitle, bookAuthor);
  Lib.addBook(book);
};

const btnSubmitBook = document.getElementById('submitBook');
btnSubmitBook.addEventListener('click', getBook);

// eslint-disable-next-line no-unused-vars
const switchTab = (id) => {
  document.querySelectorAll('a').forEach((element) => {
    element.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  id = id.substring(1);
  document.querySelectorAll('section').forEach((element) => {
    element.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
};

document.querySelectorAll('a').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(e.target.id);
  });
});

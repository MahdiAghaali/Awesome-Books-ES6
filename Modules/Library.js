export default class Library {
  constructor() {
    this.books = [];

    if (localStorage.getItem('Library') !== null) {
      const lib = JSON.parse(localStorage.getItem('Library'));
      this.books = lib.books;
      this.updateList();
    }
  }

  addBook(book) {
    this.books.push(book);
    this.updateList();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.updateList();
  }

  updateList() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    for (let i = 0; i < this.books.length; i += 1) {
      const {
        Title, Author,
      } = this.books[i];
      const bookString = `<li class="Book">
                            <div>
                            "<span class="bookTitle">${Title}</span>" by 
                            <span class="bookAuthor">${Author}</span>
                            </div>
                            <button type="button" class="removeBook" >Remove</button>
                        </li>
        `;
      bookList.insertAdjacentHTML('beforeend', bookString);
    }
    bookList.querySelectorAll('button').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        this.removeBook(i);
      });
    });

    localStorage.setItem('Library', JSON.stringify(this));
  }
}
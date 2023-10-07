console.log("Hello World!\n==========\n");

// Define the Book class
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.hasRead = read;
  }
}

// Define the Library class
class Library {
  constructor() {
    this.bookCount = 0;
    this.books = [];
  }

  markRead(checkbox, id) {
    this.books.forEach((book) => {
      if (book.id == id) {
        book.hasRead = true;
      }
      if (checkbox) {
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    });
  }

  addBook() {
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const readCheckbox = document.getElementById('read');
    const read = readCheckbox.checked;

    const newBook = new Book(this.bookCount + 1, title, author, read);
    this.books.push(newBook);
    this.bookCount++;

    const tableBody = document.querySelector('#table tbody');
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = title;
    newRow.insertCell(1).textContent = author;
    newRow.insertCell(2).innerHTML = `<input type="checkbox" ${read ? 'checked' : ''} disabled>`;
  }
}

// Create an instance of the Library class
const library = new Library();

// Add an event listener to the "Add a New Book" button
const addBookButton = document.querySelector('button');
addBookButton.addEventListener('click', () => library.addBook(), { passive: true });


console.log("PROJECT:\n==========\n");


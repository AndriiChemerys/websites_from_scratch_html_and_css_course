// Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){

}

// Add Book to list
UI.prototype.addBookToList = function(book){
    console.log(book);
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>    
    `;
    list.appendChild(row);
}

// Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
function(e){
    // Get form values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value

    // Instatiate book
    const book = new Book(title, author, isbn);

    // Instatiate UI

    const ui = new UI();

    console.log(ui);

    // Add book to list

    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();
    
    console.log(title, author, isbn);

    e.preventDefault();

});
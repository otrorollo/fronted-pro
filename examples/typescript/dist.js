// Contexto: Libreria / Quiosco
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.add = function (item) {
        this.items.push(item);
    };
    Library.prototype.list = function () {
        console.table(this.items);
    };
    return Library;
}());
var book1 = {
    title: 'Libro 1',
    author: 'Autor 1',
    isbn: '2123',
    year: 2023,
};
var book2 = {
    title: 'Libro 2',
    author: 'Autor 2',
    isbn: '2123',
    year: 2021,
};
var magazine1 = {
    barcode: 1234,
    date: new Date(),
    name: 'Magazine 1',
    topic: 'Topic 1'
};
var magazine2 = {
    barcode: 12123434,
    date: new Date(),
    name: 'Magazine 2',
    topic: 'Topic 2'
};
var bookLibrary = new Library();
var magazineLibrary = new Library();
bookLibrary.add(book1);
console.log(bookLibrary.list());

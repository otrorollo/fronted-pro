// Contexto: Libreria / Quiosco

interface IBook {
    title: string;
    author: string;
    year: number;
    isbn: string;
}

interface IMagazine {
    name: string;
    topic: string;
    date: Date;
    barcode: number;
}

class Library<T> {
    private items: Array<T> = [];
    public createtAt: Date;
    constructor() {
        this.createtAt = new Date();
    }
    public add(item: T): void {
        this.items.push(item);
    }

    public list(): void {
        console.table(this.items)
    }
}

const book1: IBook = {
    title: 'Libro 1',
    author: 'Autor 1',
    isbn: '2123',
    year: 2023, 
}
const book2: IBook = {
    title: 'Libro 2',
    author: 'Autor 2',
    isbn: '2123',
    year: 2021, 
}

const magazine1: IMagazine = {
    barcode: 1234,
    date: new Date(),
    name: 'Magazine 1',
    topic: 'Topic 1'
}
const magazine2: IMagazine = {
    barcode: 12123434,
    date: new Date(),
    name: 'Magazine 2',
    topic: 'Topic 2'
}

const bookLibrary = new Library<IBook>();
const magazineLibrary = new Library<IMagazine>();

bookLibrary.add(book1);
console.log(bookLibrary.list())



// --- clonando axios

function get<T>(path: string) {
    return fetch(path)
        .then(res => res.json())
        .then(json => json as T)
};

const books = await get<IBook[]>('/books')


// TODO para el jueves:
// Ejercicio 1: Seriamos capaces de TIPAR la clase Library?
// 1. Añadir la propiedad location (p.e. Sala 1)
// 2. Añadir propiedad topic.
// 3. Mantener el uso de genericos.
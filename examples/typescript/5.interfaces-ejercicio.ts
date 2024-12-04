/**
 * 
 * Exercise 1
 * Define una interfaz `Product` con las siguientes propiedades:
 * - `name` de tipo `string`
 * - `price` de tipo `number`
 * - `description` de tipo `string`
 * - `category` de tipo `string`
 * 
 * Define un array con 3 productos distintos.
 * 
 */

interface Product {
    name: string;
    price: number;
    description: string;
    category: string;
}

const products: Product[] = [
    {
        name: "Laptop",
        price: 1000,
        description: "A laptop",
        category: "Electronics"
    },
    {
        name: "Shirt",
        price: 20,
        description: "A shirt",
        category: "Clothing"
    },
    {
        name: "Book",
        price: 10,
        description: "A book",
        category: "Books"
    }
];

console.table(products);

/**
 * TODO:
 * Exercise 2
 * Define una interfaz addicional `Service` con las propiedades
 * customerName: string
 * price: number
 * periodicity: string
 * 
 * Define una función `findCheap` que reciba un array de tipo genérico y devuelva el elemento más barato.
 * Implementa esa función para buscar el elemento más barato de una lista de Products y el más barato de una lista de Services.
 */

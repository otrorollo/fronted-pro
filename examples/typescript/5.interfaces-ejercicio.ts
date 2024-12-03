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
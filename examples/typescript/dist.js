// Creando app para universidad
var Student = /** @class */ (function () {
    function Student(name, surnames, age, grade) {
        this.name = name;
        this.surnames = surnames;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Student.prototype.getDni = function () {
        return this.dni;
    };
    Object.defineProperty(Student.prototype, "fullname", {
        get: function () {
            console.log("Getter llamado");
            return "".concat(this.name, " ").concat(this.surnames);
        },
        set: function (fullname) {
            this.name = fullname.split(' ')[0];
            this.surnames = fullname.split(' ')[1];
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
;
var aida = new Student('Aida', 'Apellido', 29, 'KCWB');
console.log(aida.fullname);
aida.fullname = 'Aida';
console.log(aida.surnames);
// Ejemplo de utilización de getters y setters
var Product = /** @class */ (function () {
    function Product(price) {
        this._price = price * 100;
    }
    Object.defineProperty(Product.prototype, "price", {
        // Devolvemos el precio en la unidad legible (euros decimales)
        get: function () {
            return this._price / 100;
        },
        // Nos guardamos el precio en la unidad minima (céntimos enteros)
        set: function (price) {
            this._price = price * 100;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var product1 = new Product(1.50);
product1.price += 1.50;
console.log(product1.price);

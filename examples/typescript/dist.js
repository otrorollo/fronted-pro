var Brands;
(function (Brands) {
    Brands["AUDI"] = "Audi";
    Brands["SKODA"] = "Skoda";
})(Brands || (Brands = {}));
var audiA4Car = {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    start: function () {
        console.log("Start");
    }
};
var audiA3Car = {
    brand: 'Audi',
    model: 'A3',
    year: 2023,
    start: function () {
        console.log('Engine ON :)');
    }
};
var getCarBrand = function (item) {
    // return item.color; -> Devolveria un error, la propiedad color no existe en Car
    // return 'Hola desde getCarBrand'; // -> Es ok, devolvemos un string.
    console.log("La marca es: ".concat(item.brand));
    return "".concat(item.brand);
};
getCarBrand({
    brand: 'Skoda',
    model: 'Fabia',
    start: function () {
        console.log("Start");
    }
});

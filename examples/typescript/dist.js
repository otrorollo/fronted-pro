var car = {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
};
var brands = [
    'Toyota',
    'Audi',
    'Seat',
];
var brands2 = brands;
var teslaModels = [];
var tataModels;
function getCarYear(car) {
    if (car.year < 2020) {
        return car.year;
    }
    return car.year.toFixed(2);
}
// let carYear: number;
// carYear = getCarYear({brand: 'Seat', model: 'Ibiza', year: 2021});

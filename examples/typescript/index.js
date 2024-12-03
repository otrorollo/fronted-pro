// function formatUser(name: string, age: number): string {
//     return `Name: ${name}, Age: ${age}`;
// }
function formatUser(name, age) {
    if (name === void 0) { name = "Nombre por defecto"; }
    var ret;
    ret = "Name: ".concat(name);
    if (age) {
        ret += ", Age: ".concat(age);
    }
    return ret;
}
function printUser(name, age) {
    console.log(formatUser(name, age));
}
// let formattedUser: object;
// formattedUser = formatUser("Nauel", 10); -> Nos devolveria un error. Esta función siempre devuelve un string.
var user1 = formatUser('Nauel', 33);
var user2 = formatUser('Pedro');

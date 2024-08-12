const elemetns = ['Hello', 'my', 'name', 'is', 'Artem'];
console.log(elemetns.join());

swapCase = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

const inputString = "Hello, WoRlD!";
const result = swapCase(inputString);
console.log(result);



const database = [];
do {
    data = prompt("Введіть дані");
    database.push(data);
} while (confirm("Продовжити?"));

console.log(database);
let numberN = +prompt(`Введіть число N`);
while (!Number.isInteger(numberN)) {
    numberN = +prompt(`Введіть число N. Значення має бути цілим числом!`);
}

let numberM = +prompt(`Введіть число M`);
while (!Number.isInteger(numberM) || numberM === 0) {
    numberM = +prompt(`Введіть число M. ${numberM === 0 ? `Значення не має дорівнювати 0!` : `Значення має бути цілим числом!`}`);
}

const isPaired = confirm(`Пропускати парні числа?`);

let sumNumbers = 0;
for (let i = numberN; i <= numberM; i++) {
    if (isPaired && i%2 === 0) continue;
    sumNumbers += i;
}

console.log(`Користувач ввів такі значення:
N = ${numberN},
M = ${numberM},
ПропускатиПарні = ${isPaired.toString().toUpperCase()}
Сума чисел буде === ${sumNumbers}
`);
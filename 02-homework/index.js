let numberN = null;
let numberM = null;
let isIntegerNumberN = false;
let isIntegerNumberM = false;
let errorMessage = '';

while(!isIntegerNumberN) {
    numberN = prompt(`${errorMessage}Введіть число N.`);

    if (numberN && numberN.replace(/\s/g, '') !== '') {
        errorMessage = '';

        if (Number.isInteger(+numberN)) {
            isIntegerNumberN = true;
            numberN = +numberN;

            errorMessage = '';
        } else {
            errorMessage = 'Значення має бути цілим числом. ';
        }
    } else {
        errorMessage = 'Ви ввели пусту стрічку. ';
    }
}

while(!isIntegerNumberM) {
    numberM = prompt(`${errorMessage}Введіть число M.`);

    if (numberM && numberM.replace(/\s/g, '') !== '') {
        errorMessage = '';

        if (Number.isInteger(+numberM)) {
            if (+numberM <= numberN) {
                errorMessage = `Значення має бути більшим за число ${numberN}. `;
            } else {
                isIntegerNumberM = true;
                numberM = +numberM;

                errorMessage = '';
            }
        } else {
            errorMessage = 'Значення має бути цілим числом. ';
        }
    } else {
        errorMessage = 'Ви ввели пусту стрічку. ';
    }
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

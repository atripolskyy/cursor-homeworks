/**
 * Task #1.Функція що робить нескінченний генератор ідентифікаторів.
 */
function* createIdGenerator() {
  let index = 1;
  while(true) {
    yield index++;
  }
}

/**
 * Task #2.Генератор, який регулює розмір шрифту.
 */
// function* newFontGenerator(fontSize = 14) {
//   let baseFontSize = parseInt(fontSize);
//   while(true) {

//   }
// }

const idGenerator = createIdGenerator();

console.log(`To see current value of Generator please type:`);
console.log(`idGenerator.next().value`);


// const fontGenerator = newFontGenerator(14);

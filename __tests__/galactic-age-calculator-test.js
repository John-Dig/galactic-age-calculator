import Calculator from './../src/calculator.js';

describe('Calculator', () => {
});
//test 1
test('object Calculator exists', () => {
  const theCalculator = new Calculator;
  expect(theCalculator).toBeTruthy();
});

// import Object from './../src/calculator.js';
// describe('OBJECT', () => {
// });
// test('DESCRIBE TEST', () => {
//   const VARIABLE = new OBJECT();
//   expect(VARIABLE.THING).toEqual();
// });

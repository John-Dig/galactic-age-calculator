import {Calculator} from './../src/js/calculator';

//test 1
describe('Calculator', () => {
});
test('object Calculator exists', () => {
  console.log (Calculator);
  const theCalculator = new Calculator("hi");
  console.log(theCalculator);
  
  //expect(theCalculator).toBeTruthy();
});

// //test 1.3
// describe('Avatar', () => {
// });
// test('should create new Avatar object', () => {
//   const hero = new Avatar();
//   expect(hero.karma).toEqual(undefined);
//   expect(hero.physicalA).toEqual(undefined);
//   expect(hero.health).toEqual(undefined);
//   expect(hero.experience).toEqual(undefined);
//   expect(hero.inventory).toEqual(undefined);
// });
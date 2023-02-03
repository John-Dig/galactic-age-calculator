import {Calculator} from './../src/js/calculator';
import {User} from './../src/js/user';

//test 1.1
describe('Calculator', () => {
});
test('object Calculator exists', () => {
  const theCalculator = new Calculator("hi");
  
  expect(theCalculator).toBeTruthy();
});

//test 2
describe('User', () => {
});
test('should create new user Object', () => {
  const user1 = new User();
  expect(user1.userName).toEqual(undefined);
  expect(user1.userAge).toEqual(undefined);
  expect(user1.userBirthday).toEqual(undefined);
});

// //test 3
// test('should return age in mercury years from input in earth years', () => {
//   const theCalculator = new Calculator(100);
  
// })
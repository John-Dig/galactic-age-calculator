import {Calculator} from './../src/js/calculator';
import {User} from './../src/js/user';

//beforeEach
describe('Calculator, and beforeEach', () => {
  let theCalculator = new Calculator;
  let user1 = new User;
  beforeEach(() => {
    //add to this later
  })  
  //test 1.2  
  test('object Calculator exists', () => {
    const theCalculator = new Calculator();
    expect(theCalculator).toBeTruthy();
  });

  //test 2.1
  describe('User', () => {
  });
  test('should create new user Object', () => {
    expect(user1.userName).toEqual(undefined);
    expect(user1.userAge).toEqual(undefined);
    expect(user1.userBirthday).toEqual(undefined);
  });

  //test 3.1
  test('should return age in mercury years from input in earth years', () => {
    expect(theCalculator.mercury(100)).toEqual(24)
  })
}); //ends BeforeEach from test 1.x
import {Calculator} from './../src/js/calculator';
import {User} from './../src/js/user';

//beforeEach---------------------------
describe('Calculator, and beforeEach', () => {
  const theCalculator = new Calculator;
  const user1 = new User;
  theCalculator.user1 = user1;
  beforeEach(() => {
    theCalculator.user1.userName= "Rod Steiger"
    theCalculator.user1.userAge = 100;
    theCalculator.user1.userBirthday = "01/01/1923"
    //add to this later
  })  
  test('1.3: object Calculator exists', () => {
    const theCalculator = new Calculator();
    expect(theCalculator).toBeTruthy();
  });

  describe('User', () => {
  });
  test('2.3: should create new user Object', () => {
    expect(theCalculator.user1.userName).toEqual("Rod Steiger");
    expect(theCalculator.user1.userAge).toEqual(100);
    expect(theCalculator.user1.userBirthday).toEqual("01/01/1923");
  });

  test('3.3: should return age in mercury years from input in earth years', () => {
    expect(theCalculator.mercury(100)).toEqual(417)
  })

  test('4.4: should return age in all 4 planet years from input in earth years', () => {
    theCalculator.user1.mercuryUserAge = theCalculator.mercury(user1.userAge);
    theCalculator.user1.venusUserAge = theCalculator.venus(user1.userAge);
    theCalculator.user1.marsUserAge = theCalculator.mars(user1.userAge);
    theCalculator.user1.jupiterUserAge = theCalculator.jupiter(user1.userAge);
    expect(theCalculator.user1.mercuryUserAge).toEqual(theCalculator.user1.userAge / .24);
    expect(theCalculator.user1.venusUserAge).toEqual(theCalculator.user1.userAge /.62);
    expect(theCalculator.user1.marsUserAge).toEqual(theCalculator.user1.userAge / 1.88);
    expect(theCalculator.user1.jupiterUserAge).toEqual(theCalculator.user1.userAge / 11.86);
  })

  test ('5: should return planet ages for years since a specific birthday', () => {
    expect(theCalculator.user1.mercuryYearsSince).toEqual
    theCalculator.user1.venusYearsSince
    theCalculator.user1.marsYearsSince
    theCalculator.user1.jupiterYearSince
  })



}); //ends BeforeEach------------------------
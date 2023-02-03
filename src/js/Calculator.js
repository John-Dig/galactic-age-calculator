//business logic
export class Calculator {
  constructor(){ 
  }
  mercury = (earthYears) => {
    return earthYears * .24;
  }
  venus = (earthYears) => {
    return earthYears * 62;
  }
  mars = (earthYears) => {
    return earthYears * 1.88;
  }
  jupiter = (earthYears) => {
    return earthYears * 11.86;
  }
}

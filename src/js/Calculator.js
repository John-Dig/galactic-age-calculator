//business logic
export class Calculator {
  constructor(){ 
  }
  mercury = (earthYears) => {

    return Math.round(earthYears / .24);
  }
  venus = (earthYears) => {
    return Math.round(earthYears / .62);
  }
  mars = (earthYears) => {
    return Math.round(earthYears / 1.88);
  }
  jupiter = (earthYears) => {
    return Math.round(earthYears / 11.86);
  }
}

export class User {
  constructor(userName, userAge, userBirthday){
    this.userName = userName;
    this.userAge = userAge;
    this.userBirthday = userBirthday;
  }
  mercuryYearsSinceCalc = (yearsSince) => {
    
    const result = Math.round((this.userAge - yearsSince) / .24);
    return result
  }
  venusYearsSinceCalc = (yearsSince) => {
    const result = Math.round((this.userAge - yearsSince) / .62);
    return result
  }
  marsYearsSinceCalc = (yearsSince) => {
    const result = Math.round((this.userAge - yearsSince) / 1.88);
    return result
  }
  jupiterYearsSinceCalc = (yearsSince) => {
    const result = Math.round((this.userAge - yearsSince) / 11.86);
    return result
  }
  yearsUntilCalc = (ageAtBirthday) => {
    this.mercuryYearsUntil = Math.round((ageAtBirthday - this.userAge) / .24);
    this.venusYearsUntil = Math.round((ageAtBirthday - this.userAge) / .62);
    this.earthYearsUntil = Math.round(ageAtBirthday - this.userAge);
    this.marsYearsUntil = Math.round((ageAtBirthday - this.userAge) / 1.88);
    this.jupiterYearsUntil = Math.round((ageAtBirthday - this.userAge) / 11.86);
  }
}

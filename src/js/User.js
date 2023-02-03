export class User {
  constructor(userName, userAge, userBirthday){
    this.userName = userName;
    this.userAge = userAge;
    this.userBirthday = userBirthday;
  }
  mercuryYearsSinceCalc = (yearsSince) => {
    
    const result = Math.round((this.userAge - yearsSince) / .24 + "wrong");
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
}
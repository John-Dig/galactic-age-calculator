# Super Galactic Age Calculator

#### The Super Galactic Age Calculator gives info about relative aging on the 5 planets nearest our sun.

#### By John Diggins

## Technologies Used

* Javascript
* npm
* webpack
* babel
* eslint
* jest

## Description
#### Features
1. The program calculates the age the user would be in Mercury, Venus, Mars, or Jupiter years relative to earth years.

2. It can also calculate how many planet years have passed since a given past birthday of the user.

3. It can also calculate how many planet years will have to pass until a given future birthday of the user.

## Setup/Installation Requirements
* Clone this repository to your desktop.
* Navigate to the top level of the directory: galactic-age-calculator
* open a terminal, then:
>>npm install
>
>>npm run build
>
>>npm run lint
>
>>npm test
* see that it does what it says it does!

## Known Bugs
- Linting leaves 2 "parsing error" messages, still unsure why. It appears not to affect anything negatively.
- There is no user interface (yet)!


## Possible Future Changes
#### increase DRY, efficiency, modularization:
1. The program could have one object rather than two.  
2. All methods for calculations could be attached to User rather than Calculator.
3. Have just three methods attached to User: ageOnPlanet(), yearsPassedSinceBday(), yearsUntilBday(). Then each function would take 2 arguments from the user: a planet and a number. 
4. An array of relative planet orbit times could also be added. Then the proper value could be pulled from the array according to user selection.
5. If the above were done, and we have data on other solar systems; then we could easily expand the number of planets the program could account for.
6. It's technically a -Solar- Galactic Calculator.  Only if planets from other star systems in the galaxy were added would it deserve the "Galactic" title.  -Super- ? well...

###### License

##### Epicodus
>Copyright (c) 2023 John Diggins
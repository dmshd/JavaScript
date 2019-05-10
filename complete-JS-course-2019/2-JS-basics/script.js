/**
 * Udemy Complete JS Course 2019
 * Data types & variables
 */
 
// JS has dynamic typing : 
// data types are automatically assigned to variables

/**
* Variables and data types
*/
/*
*/
var firstName = 'John';
console.log(firstName);
var lastName = 'Doe';
var age = 28;
var fullAge = true;
console.log(fullAge); // true
var job; 
console.log(job); // Undefined
job = 'Teacher';
console.log(job); // Teacher
// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
// var if = 23; // word if is reserved by the language and cannot be used as a var name


/**
* Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// Variable mutation
age = 'twenty eight';
job = 'driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);



/**
* Basic operators
*/

var year, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder); // true

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);

/**
* Operator precedence
*/

var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge); 

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2; // 52
console.log(x);
x += 10; // 52 + 10 = 62
console.log(x);
x--; // 62 - 1 = 61
console.log(x);

/**
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
      BMI = mass / height^2 = mass / (height * height). 
      (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information 
    about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
    (Something like "Is Mark's BMI higher than John's? true"). 
*/
let markMass, markHeight, johnMass, johnHeight, markHasHigherBmi;
markMass = 110; // kg
markHeight = 1.83; // meters
johnMass = 85; // kg
johnHeight = 1.70; // meters

markBmi = markMass / ( markHeight * markHeight );
console.log(markBmi); // 32.846606348353184

johnBmi = johnMass / ( johnHeight * johnHeight );
console.log(johnBmi); // 29.411764705882355

markHasHigherBmi = markBmi > johnBmi;
console.log(markHasHigherBmi);  // true
console.log(`Is Mark's BMI higher than John's ? ${markHasHigherBmi}`)

/**
* If / else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

if (markBmi > johnBmi) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}

/**
* Boolean logic
*/

var firstName = 'John';
var age = 20;
if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

/**
* The Ternary Operator and Switch Statements
*/

var firstName = 'Jason';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink); // juice

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

/**
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}

/**
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), 
    and print the winner to the console. 
    Also include the average score in the output.
3. Then change the scores to show different winners. 
    Don't forget to take into account there might be a draw 
    (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
    Like before, log the average winner to the console. 
    HINT: you will need the && operator to take the decision. 
    If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, 
    keeping in mind there might be draws.
*/

let johnTeamAvgScore = (89 + 120 + 103) / 3;
let mikeTeamAvgScore = (116 + 94 + 123) / 3;
let maryTeamAvgScore = (97 + 134 + 105) / 3;
console.log(johnTeamAvgScore, mikeTeamAvgScore, maryTeamAvgScore); // 104 111 112

if ( johnTeamAvgScore > mikeTeamAvgScore && johnTeamAvgScore > maryTeamAvgScore ) {
  console.log(`John's team wins with ${johnTeamAvgScore} points`);
}else if ( mikeTeamAvgScore > johnTeamAvgScore && mikeTeamAvgScore > maryTeamAvgScore) {
  console.log(`Mike's team wins with ${mikeTeamAvgScore} points`);
}else if (maryTeamAvgScore > johnTeamAvgScore && maryTeamAvgScore > mikeTeamAvgScore) {
  console.log(`Mary's team wins with ${maryTeamAvgScore} points`);
}else {
  console.log(`There is a draw`);
}

/**
* Functions
*/

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane); // 29 71 50

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');


/**
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}
// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

/**
* Arrays
*/
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]); // Jane
console.log(names.length); // 3
// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names); // Array(4) [ "John", "Ben", "Jane", "Mary" ]
// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.'); // add one or multiple element at the beginning of the array and returns its lenght.
console.log(john);
john.pop(); // .pop() deletes the last element of the array
john.pop();
john.shift(); // La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.
console.log(john);
console.log(john.indexOf(23));// La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


/**
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

let tips, bills, finalPaidAmounts = [];

let tipCalculator = (bill) => {
  if (bill < 50) {
    perc = .2;
  }else if (bill > 50 && bill < 200) {
    perc = .15;
  }else {
    perc = .1;
  }
  return perc * bill;
}

bills = [124, 48, 268];

tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

finalPaidAmounts = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];
console.log(bills, tips, finalPaidAmounts);


/*****************************
* Objects and properties
*/

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


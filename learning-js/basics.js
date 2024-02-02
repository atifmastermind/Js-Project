//* alert
// alert("Good Job!");

//* Calculation

// 2 + 2;
// 10 - 3;

// to replace everything on page and write that text (its called mudifiing the web page its one of the most importent feature of javascript )

// document.body.innerHTML = "Hellow";

//* numbers and math

//* syntax
// ! rules that we have to follow when using a prgrammng language similar to english (grammar) we can create write as long as user understand its ok but in programming we have to follow the rules of syntax exactly

//* tutorial
// exp1
// let tshirt = 10;
// let socks = 8;
// let dinner = 20;
// console.log(tshirt + socks + dinner);

// exp2
// let bankaccount = 100;
// let lunch = 20;
// let dinner = 50;
// let salary = 200;

// console.log(bankaccount - lunch - dinner + salary);

//* Orders of Operator
// the way math normaly worked is that multiply and divide are done first add and subsract are done ater this is called
//! javascript follows the same rules multiple and divide are done first add and subsract are done after the order of operations is also called operator precedence is javascript. one more thing is that multiple and divide have the same priority, so if we have both is a calcucation it will calculate from left to right.
//(2 * 3) / 3;
// ! plus and minius have a same priority is well its also calculate from left to right.
//2 + 3 - 5;
// ! another feature of the other operations is that we can use brackets to control which part of the calculation gets done first, brakects have higher priority example:
//(1 + 1) * 3; // ? result wil be 6 if we won't use bracket result will be 4

//* syntax rules for brackets
// so we just have to have a matching open bracket and closed brackets
// percent farmola
// 10% = 10/100 = 0.1
// we multiply result to 0.1 to add 10% in cost
//(12 + 18 * 2) * 0.1;
// ! if we won't wraped this with brackets result will be diffrent

//* Weird behavior of math in javascript
//terminology in programing
//whole numbers like two , three, four are called //! integers
//decimel numbers like 2.2, 2.5 are called //! floating point numbers or float
//floating numbers have problem like
//0.1 + 0.2 + 0.3000000000000004
//! computers can store 0.25 without any problems so these inaccuracies only happen with some floats but not all of them. however when calculation money we definitely want to avoid any inaccuracies.
//20.95 + 7.99
//? the best practice when calculation money is to calculate in cents instead of dollors. so instead of 20 and 95 sents we're going to calculate:
//2095 + 799 // we are not using floats anymore but now this number is in cents we need to convert back to dolloars, we'll surround this calculation with brackets to make sure we calculate this first then we devide this with 100
//(2095 + 799) / 100 //? now this number is exact with not inaccuracies (in programing calculations with floats are some times inaccurate and when working with money the best prective is to do the calculation is cents adn then convert back to dollors  at the end )

//* How to round a number
//rounding just means taking a number and moving it to the neatest integer to round a number we can use this code,
//Math.round(2.2) //? this wil round a number to 2
//Math.round ((2095 + 799) * 0.1) / 100 //? round this number

//* How to show 2 values after dot

// var toaster = 18.9449;
// var shirt = 7.559;
// var basketball = 2.6;
// var shipping = 4.99;
// var tax = 0.1;

// var total = toaster + shirt * 2 + basketball;
// let two_values_after_dots = total.toFixed(2);
// console.log(two_values_after_dots);

//? eaxmple 1

// var soup = 10;
// var burger = 8;
// var ice_cream = 5;

// console.log(soup + burger * 3 + ice_cream);

//? eaxmple 2

// var soup = 10;
// var burger = 8;
// var ice_cream = 5;

// console.log((soup + burger * 3 + ice_cream) / 3);

//? eaxmple 3

// var toaster = 18.5;
// var shirt = 7.5;

// console.log(toaster + shirt * 2);

//? eaxmple 4

// var toaster = 18.5;
// var shirt = 7.5;

// console.log((toaster + shirt * 2) * 0.1);

//? eaxmple 5

// var toaster = 18.5;
// var shirt = 7.5;

// console.log((toaster + shirt * 2) * 0.2);

//? eaxmple 6

// var toaster = 18.5;
// var shirt = 7.5;

// console.log((toaster + shirt * 2) * 0.2);

//? eaxmple 7

// var toaster = 18.9449;
// var shirt = 7.559;
// var basketball = 2.6;
// var shipping = 4.99;
// var tax = 0.1;

// console.log(Math.round(toaster + shirt * 2 + basketball));

//? eaxmple 8

// var toaster = 18.9449;
// var shirt = 7.559;
// var basketball = 2.6;
// var shipping = 4.99;
// var tax = 0.1;

// console.log(Math.round(toaster + shirt * 2 + basketball + shipping));

//? eaxmple 9

// var toaster = 18.9449;
// var shirt = 7.559;
// var basketball = 2.6;
// var shipping = 4.99;
// var tax = 0.1;

// console.log(Math.round((toaster + shirt * 2 + basketball + shipping) * tax));

//? eaxmple 10

// var toaster = 18.9449;
// var shirt = 7.559;
// var basketball = 2.6;
// var shipping = 4.99;
// var tax = 0.1;

// console.log(Math.floor((toaster + shirt * 2 + basketball + shipping) * tax));

//? eaxmple 11

// var toaster = 18.9449;
// var shirt = 7.559;
// var basketball = 2.6;
// var shipping = 4.99;
// var tax = 0.1;

// console.log(Math.ceil((toaster + shirt * 2 + basketball + shipping) * tax));

//? eaxmple 12

// Given temperature in Celsius
// var celsiusTemperature = 25;
// Convert Celsius to Fahrenheit
// var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
// Display the result
// console.log(fahrenheitTemperature);

//? eaxmple 13

// Given temperature in Fahrenheit
// var fahrenheitTemperature = 86;
// Convert Fahrenheit to Celsius
// var celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
// Display the result
// console.log(celsiusTemperature);

//? eaxmple 14

// Given temperature in Celsius
// var celsiusTemperature = -5;
// Convert Celsius to Fahrenheit
// var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
// Display the result
// console.log(fahrenheitTemperature);

//* Strings

//? syntax Rules

// combine strings or Concatenation
// "Muhammad"+ "Atif"+ "Ajmal"

// typeof propertie will check the type of value
// typeof 2 //this will tell that its a number
// typeof "Atif" //this will tell that its a string

//? type coercion or automatic type conversion
// when we add string and number togather javascript will automatically convert number to string
// "atif" + 3

//? strings also follow the order of operations
// "$" + (20.95 + 7.99).toFixed(2)

// 'items (' + (1 + 1)+ '): $' + (20.95 + 7.99).toFixed(2);
// alert ('items (' + (1 + 1)+ '): $' + (20.95 + 7.99).toFixed(2);)

//? more details about strings

// 3 ways to create a string
// '' //! the frist way is to use single quotes
// "" //! the second way is to use double quotes
// `` //! the third way is to use double quotes
// recomended is single qoutes in javascript
// there is one situation where double quotes might be useful and that is if we have a single quote inside the string example:
"i'm learning JavaScipt";

//? Escape Character
// there's actually another solution to this problem other then using double quotes, and that;s by using an escape charecter
// so a character is one letter number or symbol in a piece of text.
// now in addition to these characters we have a speacial set of characters we can also use in a String called escape characters escape character looks like this \ a backslash and then another character like single quote this combination actualy counts as one charecter in a string
// for example,
// 'I\'m learing JavaScript'
//? newline character
// the last escape character will learn in this lesson is back slash n or \n this escape character dosen't create the letter its create a new line of text
// for example,
// alert('some/ntext')

//? backticks
// we call these template strings and they have a name because they have some special features
//! the first speacial feature of template strings is called interpolation
// interpolation lets us insert a vale directly  into a String. for example,
// `item (${1+1}): $${(20.95 + 7.99).toFixed(2)}`
//? interpolation is recomendation

//?multi-line string
// template strings have another special feature called multi-line strings
/*`some
text` */

//? eaxmple 1

// let coffee = 5
// let bagel = 3

// console.log("'Total cost:' + '$' " + (coffee + bagel));

//* variable
// variable is like a container, we can save a value lie a number or a string inside a variable and then use it later.
// let variabel = 3;

//? syntax Rules

//? variable name restrictions:
// ! can't use secial words example:
// let let  = 3;
// that's because let already has a special meaning in javascript it creates a variable. so let is a reserved word.
//we can used let1 or so on
// ! can't start with a number example:
// let 2name = 3;
//if we start with a number, javascript will think this is a number instead of a variable name.
// we can use numbers in the middle or the end
//let na2me = 3;
//let name2 = 3;
// ! we can't use most special charecters like these or pace in a variable name examle:
// let name@!#%^&* = 3;
// let name two = 3;
// * there are two speacial characters we can use dollar and underscore.
// let $name = 3;
// let _name = 3;
// so those are the rules for naming variables.

// ? change variable value
//like we have variable name
// shirt_name = "levi's";
// we can change this variable value like this
// shirt_name = "denim";
// console.log(shirt_name);

// ! Assigning a value
// when we assigning a value to variable its called assigning a value to a variable
// ! re-assigning a value
// when we change a value insite a variable its called re-assigning a value to a variable

//? syntax rues for re-assigning a value
// we don't use "let" when re-assigning thats because let creates a new variable
// shirt_name = "denim";

//? shortcuts for re-assigning variables
//long way
//cartQuantity = cartQuantity + 2;
// short way
//cartQuantity += 2;
// more short way
//cartQuantity++;

//? variable re-assignment shortcuts

// += 2 variable = variable + 2
// -= 2 variable = variable - 2
// *= 2 variable = variable * 2
// /= 2 variable = variable / 2
// ++ 2 variable = variable + 1
// -- 2 variable = variable - 1

//? best prectices for naming variables
// Naming Concention
//! camelCase
// in camelcase we combain the words togather and capitalize every word except the first word camelCase is the standard naming convention for Javascript
//! PascalCase
// Pascal case is the same as Camel Case except we capitalize the first word.
//! Kebab case
// here we keep the words lowercase and combine them with a dash
// its doesn't work in javascript its workds in html and css
//! snake_case
//where we keep the words lowercase and combine them with underscores.
// its ued in other languages, but its not really used in javascript

// ? 3 ways to create variables
// ! so the first way is to use let
// let employee = "Atif"

// ! seccond way is to use const
// const employee = "Atif"
// if we used const we can't change this value later

// ! third way is Var
var employee = "Atif";

// ? booleans and if statements

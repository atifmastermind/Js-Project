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

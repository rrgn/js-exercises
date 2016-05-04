/* ## Days of the Week

Given a number between 0 and 6, print a day of the week. 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. #if #easy */

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (var i = 0; i < 7; i++) {
  var someDay = daysOfWeek[i];
  console.log(someDay);
}


/* ## Multiple of Five?

Given a number, print "<number> is a multiple of 5." if it is a multiple of 5. Print "<number> is not a multiple of 5." if it is not a multiple of 5. #if #easy */

var fiver = 10;
if (fiver % 5 === 0) {
  console.log(fiver + " is a multiple of 5")
} else {
  console.log(fiver + " is not a multiple of 5")
}

/* ## Celsius to Fahrenheit

Given a number of degrees in Celsius, print the equivalent degrees in Fahrenheit. #math #easy */


function fahrenheit(celcius) {
var fahrenheit = 9 / 5 * celcius + 32;
console.log(fahrenheit);
}

fahrenheit(22);

/* ## Tip Calculator

Given the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", print the total bill with the tip included. The amount of tip given for each level of service is defined by:

```
"good" -> 20%
"fail" -> 15%
"bad"  -> 10%
```

#if #math #medium */

var billTotal = 55;
var servLevel = 6;
var total;

if (servLevel >= 8) {
  total = billTotal * 1.20;
}
else if (servLevel > 5) {
  total = billTotal * 1.15;
}
else {
  total = billTotal * 1.10;
}

/* function below */
function totalToPay(billTotal, servLevel) {
  if (servLevel >= 8) {
    var total = billTotal * 1.20;
  }
  else if (servLevel > 5) {
    total = billTotal * 1.15;
  }
  else {
    total = billTotal * 1.10;
  }

  return total;
}

totalToPay(55, 6);

/* ## Tip Calculator II

Like "Tip Calculator", except you are also given the number of people to divid the total into. Print the amount for each person to pay.

#if #math #medium */

var billTotal = 55;
var servLevel = 6;
var total;
var numPpl = 4;

if (servLevel >= 8) {
  total = billTotal * 1.20;
}
else if (servLevel > 5) {
  total = billTotal * 1.15;
}
else {
  total = billTotal * 1.10;
}

var totalPerPax = billTotal / numPpl;

console.log(totalPerPax);

/* function below */
function totalToPayPerPax(billTotal, servLevel, pax) {
  if (servLevel >= 8) {
    var total = billTotal * 1.20;
  }
  else if (servLevel > 5) {
    total = billTotal * 1.15;
  }
  else {
    total = billTotal * 1.10;
  }

  return total / pax;
}

totalToPayPerPax(55, 6, 7);

/* ## How Many Days In the Month?

Given a month number, between 1 and 12, print the number of days in that month. You do not need to account for the leap year. #if #easy */

//put the word "month" before each num to make program work //
var month = 6;
if (month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12) {
  console.log("31 days");
}
else if (month === 4 ||
  month === 6 ||
  month === 9 ) {
  console.log("30 days");
}
else if (month === 2) {
  console.log("28 days");
}
else {
  console.log("Pls enter a month between 1 to 12");
}

/* group b */
/*## 1 to 100

Using a while loop. Print the numbers from 1 to 100, one on a line. #loop #if #easy */
var i = 0;
while (i <= 100) {
  console.log(i);
   i++;
 }

/* ## Even Numbers II

Given a number n print the sum of the even numbers between 1 and n. #loop #easy */
var n = 100;
for (var i = 2; i < n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

var n = 100;
var i = 0;
while (i < n) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

/* ## Print a Square

Print a 5x5 square of * characters. It should look like:

```
*****
*****
*****
*****
*****
```

#loop #easy */

for (var i = 0; i < 5; i++) {
  if (i < 5) {
    console.log("*****");
  }
}

var counter = 0;
while (counter < 5) {
  console.log("*****");
  counter++;
}
/*
## Print a Square II

Given a positive number n, print a square of nxn of * characters.

#loop #medium */


var n = 8;
var row = "";
var counter = 0;

while (counter < n) {
  row = row + "*";
  counter++;

}

counter = 0;
while (counter < n) {
  console.log(row);
  counter++;
}
/* alternate answer
var number = 0;
var n = 10;
var box = "*";
var boxnew = "*";
var boxnumber = 1
while (number <= n) {
  while (boxnumber <= n - 1) {
    boxnumber = boxnumber + 1;
    boxnew = boxnew + box;
  }
  number = number + 1;
  console.log(boxnew);
}
*/

/*
## Print a Triangle

Print a triangle consisting of * characters like this:

```
   *
  ***
 *****
*******
```

#loop #easy
 */

 console.log("   *");
 console.log("  ***");
 console.log(" *****");
 console.log("*******");

/* ## Print a Triangle II

Given a number as the height, print a triangle as in "Print a Triangle" but with the given height.

#loop #if #medium */

var rows = 4;
/*
0 - 3 spaces, 1 star
1 - 2 spaces, 3 stars
2 - 1 space, 5 stars
3 - 0 space, 7 stars
*/

var counter = 0;
while (counter < n) {
  var numStars = numStars + "*";
  console.log(numStars);
}

 /* ## Print a Box

 Given a height and width, print a box consisting of * characters as its border. For example, given the height of 4 and the width of 6, you should print:

 ```
 ******
 *    *
 *    *
 ******
 ```

 #loop #if #medium
*/

var height = "";
var width = "";
var counter = 0;
var w = 6;
var h = 4;
while (counter < w) {
  width = width + "*";
  counter++;
  console.log(width);
}

counter = 0;
while (counter < h) {
  height = height + "*";
}
console.log(height);
counter++;
/*
## Multiple of 3 and 5

Print the multiples of 3 and multiples of 5 between 1 and 100 inclusive. #loop #if #easy
*/
for (var i = 0; i <= 100; i++) {
if (i % 3 === 0) {
  console.log(i);
}

if (i % 5 === 0) {
  console.log(i);
  }
}
/* exercise c

## Uppercase a String

Given a string, print the string uppercased. #string #easy
*/

var str = "What up!"
var result = str.toUpperCase();
console.log(result);

/* ## Word Tokenizer

Given a paragraph of text, print the number of words in the paragraph. #string #easy */

var par = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var numChar = par.length;
console.log(numChar);

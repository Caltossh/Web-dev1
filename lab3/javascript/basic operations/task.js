
//task1 What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

alert(++a);
alert(b++); 
alert(a); 
alert(b); 



//task2  What are the values of a and x after the code below?

let n = 2;
let x = 1 + (n*=2); // n = n*2; 1+4=5;  x=5


//task3
/*"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7) */

//task4
let y = "1"; 
let z = "2"; 
alert(y + z);  // because data type of string
// 1> Maximum number between two numbers, okay, by using the ternary operator 

let num1=10;
let num2=20;

let max = num1 > num2 ? num1 : num2;
console.log("Maximum number is:", max); // Output: Maximum number is: 20    

// 2> And maximum between the three numbers also by using turnery over Upload your solution to the GitHub profile also. 

let b = 15;
let c = 20;
let d = 25;
let maxofthree = b>c ? (b>d ? b:d) : (c>d ? c:d);
console.log("Maximum number among three is:", maxofthree); // Output: Maximum number among three is: 25 

// 3>
let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a); //Output: 18
console.log(a); // Output : 6
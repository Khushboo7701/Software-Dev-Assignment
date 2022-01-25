/*
Write a JS function for binary addition using arrays only.
Example:
A = [0,0,1,0]
B = [0,0,1,0]
C  [0,1,0,0]
*/

function binaryAddition(a,b){
    var c = [];
    var carry=0, temp=0;
    var a = Array.from(a); // creating deep copy of given array
    var b = Array.from(b);  // creating deep copy of given array
    // appending zeros to beginning of the array with smaller length if the lengths of array dont match
    while(Math.max(a.length,b.length) - a.length >0){
        a.unshift(0);  
    }
    while(Math.max(a.length,b.length) - b.length >0){
        b.unshift(0);
    }
    for(i = a.length-1; i >= 0; i--){
        var el1 = a[i];
        var el2 = b[i];
        temp = el1 + el2 + carry;  // performing binary addition according to binary rules
        carry = 0;
        if(temp === 2){  // to perform addition according to binary rules, i.e. 1+1 = 0, carry= 1 
            temp = 0;
            carry = 1;
        }
        else if(temp === 3){ // to perform addition according to binary rules, i.e. 1+1+1 = 1, carry= 1 
            temp = 1;
            carry = 1;
        }
        c.unshift(temp)
    }
    if(carry){
        c.unshift(carry);   // when we are done with addition of left most bits, we simply append the carry to the beginning of result if it is not equal to zero.
    }
    console.log(c);
    return c;
}

result=[];
var n = prompt("How many arrays do you want to perform binary addition on?")
// var n = 3;
a = prompt("Enter array 1");
// a = [1,1,1,0];
result = a;
console.log(result);
// loop to take input arrays from user
for(k = 2; k <= n; k++){ 
    b = prompt("Enter array " + i);
    // b = [1,0,0,1];
    result = binaryAddition(Array.from(result),b);   // adds the entered array with the binary sum so far
    console.log("result : " + result);
}
console.log("Resulting sum is: " + result);



/* Create two variables with different values. Then swap the values so that
 * x becomes y and y becomes x. Display the values before and after the swap
 */
let x = 'cat';
let y ='dog';

console.log("Before swap: ",x,y);

let swap = x;
x = y;
y = swap;

console.log("After swap: ",x,y);
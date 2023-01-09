/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array", arr2);
// the above has a problem as the new number 4 is not only pushed into the arr 2, but also arr1


//
// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log("Third array", arr3);
console.log("Forth array", arr4);
// the above code copies the arr3 into a new arr4, and then when you push the number 7 into it, arr3 stays the same and arr4 is updated with the new number


//
// Copying an object
let obj1 = { a:1, b:2, c:3 };
let obj2 = { ...obj1, d:4 };
let obj3 = { ...obj1, b: 5 }
console.log("First Object", obj1);
console.log("Second Object", obj2);
console.log("Third Object", obj3);
// in the above you are copying the object 1 into obj 2 and also then adding d:4 onto the end
// in obj 3, you are copying obj 1 but then replacing b from being 2 and is now 5


//
// Copying only part of an array/object
let arr5 = [...arr1, {...obj1 }, ...arr3, "x", "y", "z"];
console.log(arr5);


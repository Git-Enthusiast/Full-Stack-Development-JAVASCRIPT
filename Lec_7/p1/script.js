 const words =['apple','banana','mango',12,true,{name:'Rajan',},function hello(){
    console.log('hello world');
 },];
 console.log(words[2]);
 console.log(words[6]);
 console.log(words,length)
const newwords = words;
newwords[1]="Kiwi";
console.log(words);
console.log(newwords);


// here "student" is an non-primitive data types called objects
// object is a  collection of differernt data types . 

const student ={
   fullName : "Rajan Raj",
   age : 21,
   cgpa : 8.8,
   isPass : true,
   // key: value,
};
console.log(student);
console.log(student["fullName"]);
console.log(student.fullName);
console.log(student["age"]);
// both is valid format
// to change value of object :
student["fullName"]= "Om Pradhan";
// or 
student.fullName = "Om Pradhan";
student.cgpa = 9.1;
// we can not change value of a const variable but
// we can change key of a const object  
// here student is an object but we are able to change its key
// i.e. name, cgpa etc.
console.log(typeof(student));
console.log(typeof(student["age"]));

console.log(student);
//  index()  --> searches an element of an array and returns its postion.
// includes()  --> check if an array contains an specific element or not
// push()  --> add a new element to the end of an array and returns new length of an array.
// unshift() --> add a new element to the beginning of an array and returns new lenght of an array.
// pop() --> removes last element of an array and returns the removed element
// shift() --> removes first element of the array and returns the removed element
// sort() --> sort the element alphabetically in string and in ascending order.
// slice()--> select the part of an array and returns the new array.
 
const num =[4,1,3,8,2,8,6];
console.log(num.indexOf(8));
// if in index if element not present it will returns -1;
console.log(num.includes(8));
num.push("Rajan");
console.log(num);
// or
console.log(num.push("Rajan"));
console.log(num.unshift("Rajan"));
console.log(num.pop());
console.log(num.shift());

const num1 =[4,1,3,8,2,8,6];
console.log (num1.sort());

const num2 =[4,1,3,8,2,8,6];
const subarray = num2.slice(2,5);
console.log(subarray);
   



// ES6: added let and constant in the language
// createing variable using let / const / var
// var function scope while let ist block scope
	let name = "Max";
	function greet(){
		console.log(name);
		
	}
// the difference between let and var would be if u use if statment

// Hoisting u cant access variable before u initilize it. Hoisiting the browser get the declaration at the begining 
// of the file
	console.log(name);
	let name = "Max"; 
	
// if u have two javascript file over each other the variables could be accessed from each other


// ptimitive and reference variable
// Array and object is stored by reference 
	let person = {age : 30}:
	let anotherperson = person;
	person.age = 50
	console.log(anotherperson.age) // 50
	let newPerson = {... person} // we get new object
	
// important ------------------------>
// annyou,uis function 
	button.addEventListener('click', function(){console.log("hi")}); // will create A function every time it is called because it annoymus finction
	function A(){console.log("hi")};
	button.addEventListener(A); // it would be added once because it is not annoymus function so browser knows it is the same function
//<-----------------------

// functions are objects
// Rest operator 
	const sumUp = (...numbers) =>{ for (const a of numbers){ console.log(a);}}; // it change the parameter to Array
// there is arguments keyword in function with is declared with finction name
// Array like object any object which has length and index.

/*
--------------------------------
Array
*/
// create Array
	const number = [1, 2, 3,];
	const moreNumberss= Array.from('hello') // chnage iteratbor to array.
	
// push and unshift -> add  | pop and shift -> remove element	

Arrayname.splice(4,0,"ahmed") // start, how many to delete, what to inset at this index

const newArray = oldArray.slice(); // used to copy array
const partOfArray = oldArray.slice(0,2); // return element number 0 and 1
const concatedArray = oldArray.concate([1,2,3]); // it takes array
const INDEX = oldArray.indexOF(1); // return the index of the element of the element
const element = array.find((element, index , wholeArra)=> return True) // it return object by reference that means if u changed the element u change the array
	// u can use findIndex which will return index  remember by useing spread operator (...) u can solve the problem and get a new element
const newMapedArray = oldArray.map((element, index, wholearray) => return element * 2) // it return new array
const filteredArray= oldArray.filter((element, index, wholearray) => return true) // if true return the object otherwise it will be dropped
const sum = Array.reduce((pre, current) => {pre += cuurent}, 0) // 0 is the ititial values of the pre
const newarray = string.split("spritter"); // join will change array to string the defaukt will add comma 

const [firstname, lastName, ...other  ] = oldarray  // will copy the data from array to the element in the left and spread operator will catch the rest elements and
	// store it in new Array
	
/*
--------------------------------
Object
*/
// u can delete a properity of an object by using delete function  
	delete object1.attribute;

// u can access properity of an object using []
	object["key"]; // u can access properity of an object
	
// object destructur
	const {keywhichexis:uCanchangeTheName, otherProperties} = object; // so u get the key from the object otherProperties -> will get the other properities
	
// remember this points always to the calling object that means the name before .
	function.bind("what u wan this refere to")

// remember arrow function inheritance this keyword
	const a = ()=>{return this};
	

/*
-----------------------------------------------------
functions very important
*/

function outer(x)
{
	return function innen(y)
	{
		return x * y
	}
}

let a = outer(3); // outer return function and remembers the value of x 
let b = a(2) // b = 6  //  it is only possible becuase a remembes the value of x


let userName = "Ahmed";
 function a (){
	 console.log(userName)
 }
username = "newName"
a() // will print the newName Very important Global variable should be clear 




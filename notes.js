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
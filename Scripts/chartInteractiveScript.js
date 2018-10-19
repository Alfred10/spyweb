function checkAnswer(input) {
	
	var response = document.getElementById(input).value;
	
	if(input === "problem1") {
		
		var intArray = new Array(117, 112, 116, 114, 101, 110, 100);
		var comparableString = "";
		
		for(q = 0; q < intArray.length; q++) {
			
			comparableString += String.fromCharCode(intArray[q]);
			
		}
		
		if(response.toLowerCase().trim() === comparableString) {
			
			alert("Correct!");
			
		} else if(response === "") {
			
			alert("Please enter an answer.");
			
		} else {
			
			alert("Incorrect, please try again.");
			
		}
		
	}
	
	if(input === "problem2") {
		
		var intArray = new Array(100, 111, 119, 110, 116, 114, 101, 110, 100);
		var comparableString = "";
		
		for(q = 0; q < intArray.length; q++) {
			
			comparableString += String.fromCharCode(intArray[q]);;
			
		}
		
		if(response.toLowerCase().trim() === comparableString) {
			
			alert("Correct!");
			
		} else if(response === "") {
			
			alert("Please enter an answer.");
			
		} else {
			
			alert("Incorrect, please try again.");
			
		}
		
	}
	
	if(input === "problem3") {
		
		var intArray = new Array(99, 111, 110, 115, 111, 108, 105, 100, 97, 116, 105, 111, 110);
		var comparableString = "";
		
		for(q = 0; q < intArray.length; q++) {
			
			comparableString += String.fromCharCode(intArray[q]);;
			
		}
		
		if(response.toLowerCase().trim() === comparableString) {
			
			alert("Correct!");
			
		} else if(response === "") {
			
			alert("Please enter an answer.");
			
		} else {
			
			alert("Incorrect, please try again.");
			
		}
		
	}
	
	if(input === "problem4") {
		
		var intArray = new Array(112, 117, 109, 112, 32, 97, 110, 100, 32, 100, 117, 109, 112);
		var comparableString = "";
		
		for(q = 0; q < intArray.length; q++) {
			
			comparableString += String.fromCharCode(intArray[q]);;
			
		}
		
		if(response.toLowerCase().trim() === comparableString) {
			
			alert("Correct!");
			
		} else if(response === "") {
			
			alert("Please enter an answer.");
			
		} else {
			
			alert("Incorrect, please try again.");
			
		}
		
	}
	
}
function invertedBinaryTranslation(n) {
	
	if(n === 0) {
		
		return("True");
		
	} else {
		
		return("False");
		
	}
	
}

function selectAnswer(parentObject, childObject) {

	choice = parentObject.getElementsByTagName("div");
	for(q = 0; q < choice.length; q++) {
		
		if(choice[q].className === childObject.className) {
			
			choice[q].style.backgroundColor = "#75A5FF";
			
		} else {
			
			choice[q].style.backgroundColor = null;
			
		}
		
	}
	
}

function selectedChoiceBinary(object, trueIndex) {
	
	var array = object.getElementsByTagName("div");
	for(a = 0; a < array.length; a++) {
		
		if(array[a].style.backgroundColor != "") {
			
			if(a === trueIndex) {
				
				return("True");
				
			} else {
				
				return("False");
				
			}
			
		}
		
	}
	
	return("");
	
}

function selectedChoiceMC(object) {
	
	var array = object.getElementsByTagName("div");
	for(a = 0; a < array.length; a++) {
		
		if(array[a].style.backgroundColor != "") {
			
			if(a === 0) {
				
				return("A");
				
			} else if(a === 1) {
				
				return("B");
				
			} else if(a === 2) {
				
				return("C");
				
			} else {
				
				return("D");
				
			}
			
		}
		
	}
	
	return("");
	
}

function createResultsTable3C(parent, columnLabel, userInput, answer) {
	
	var resultTable = document.createElement("table");
	resultTable.id = "resultTableID";
	resultTable.border = "1";
	resultTable.cellpadding = "5";
	for(u = 0; u < 1 + answer.length; u++) {
		
		var row = resultTable.insertRow(u);
		for(v = 0; v < 3; v++) {
			
			var col = row.insertCell(v);
			if(u === 0) {
				
				col.innerHTML = columnLabel[v];
				
			} else if(v === 0) {
				
				// The first column will be labeled with integers in [1, answer.length].
				col.innerHTML = u;
				
			} else if(v === 1) {
				
				col.innerHTML = userInput[u - 1];
				
			} else {
				
				col.innerHTML = answer[u - 1];
				
			}
			
		}
		
	}
	
	parent.appendChild(resultTable);
	
}
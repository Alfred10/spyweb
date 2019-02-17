function clickOnEnter(textBoxId, buttonId) {
	
	document.getElementById(textBoxId).addEventListener("keyup",
		
		function(event) {
			
			event.preventDefault();
			
			if(event.keyCode === 13) {
				
				document.getElementById(buttonId).click();
				
			}
			
		}
		
	);
	
}

function getInputValue(elementId) {
	
	return(document.getElementById(elementId).value);
	
}

function compareStringInput(textBoxId, referenceString) {
	
	return(document.getElementById(textBoxId).value === referenceString);
	
}

function swapTextInputState(textBoxId) {
	
	if(document.getElementById(textBoxId).disabled === false) {
		
		document.getElementById(textBoxId).disabled = true;
		
	} else {
		
		document.getElementById(textBoxId).disabled = false;
		
	}
	
}

function updateInnerValue(elementId, newValue) {
	
	document.getElementById(elementId).innerHTML = newValue;
	
}

function swapInnerValue(elementId0, elementId1) {
	
	var holder = document.getElementById(elementId0).innerHTML;
	document.getElementById(elementId0).innerHTML = document.getElementById(elementId1).innerHTML;
	document.getElementById(elementId1).innerHTML = holder;
	
}
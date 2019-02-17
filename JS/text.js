function setSize(elementId, size) {
	
	document.getElementById(elementId).style.fontSize = size;
	
}

function setColor(elementId, color) {
	
	document.getElementById(elementId).style.color = color;
	
}

function setFont(elementId, font) {
	
	document.getElementById(elementId).style.fontFamily = font;
	
}

function setLineHeight(elementId, spacing) {
	
	document.getElementById(elementId).style.lineHeight = spacing;
	
}

function addTextShadow(elementId, dx, dy, blurRadius, color) {
	
	document.getElementById(elementId).style.textShadow = dx + " " + dy + " " + blurRadius + " " + color;
	
}

function setTextAlign(elementId, alignment) {
	
	document.getElementById(elementId).style.textAlign = alignment;
	
}
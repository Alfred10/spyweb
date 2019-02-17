function getMouseX(event) {
	
	return(event.clientX);
	
}

function getMouseY(event) {
	
	return(event.clientY);
	
}

function setCoordinatesOnClick(elementId) {
	
	setXY(elementId, getMouseX(event), getMouseY(event));
	
}

function rectangle(elementId, positionType, x, y, width, height, color) {
	
	document.getElementById(elementId).style.position = positionType;
	document.getElementById(elementId).style.left = x + "px";
	document.getElementById(elementId).style.top = y + "px";
	document.getElementById(elementId).style.width = width;
	document.getElementById(elementId).style.height = height;
	document.getElementById(elementId).style.backgroundColor = color;
	
}

function getX(elementId) {
	
	return(document.getElementById(elementId).offsetLeft);
	
}

function getY(elementId) {
	
	return(document.getElementById(elementId).offsetTop);
	
}

function setXY(elementId, xPrime, yPrime) {
	
	document.getElementById(elementId).style.left = xPrime + "px";
	document.getElementById(elementId).style.top = yPrime + "px";
	
}

function translateXY(elementId, dx, dy) {
	
	document.getElementById(elementId).style.left = parseFloat(document.getElementById(elementId).style.left) + dx + "px";
	document.getElementById(elementId).style.top = parseFloat(document.getElementById(elementId).style.top) + dy + "px";
	
}

function getWidth(elementId) {
	
	return(parseFloat(document.getElementById(elementId).style.width));
	
}

function getHeight(elementId) {
	
	return(parseFloat(document.getElementById(elementId).style.height));
	
}

function setWidth(elementId, widthPrime) {
	
	document.getElementById(elementId).style.width = widthPrime;
	
}

function setHeight(elementId, heightPrime) {
	
	document.getElementById(elementId).style.height = heightPrime;
	
}

function getClientWidth(elementId) {
	
	return(parseFloat(document.getElementById(elementId).clientWidth));
	
}

function getClientHeight(elementId) {
	
	return(parseFloat(document.getElementById(elementId).clientHeight));
	
}
function setCursor(elementId, cursorVariant) {
	
	document.getElementById(elementId).style.cursor = cursorVariant;
	
}

function changeClassName(elementId, newElementClassName) {
	
	document.getElementById(elementId).className = newElementClassName;
	
}

function toggleClassName(elementId, initialElementClassName, finalElementClassName) {
	
	if(document.getElementById(elementId).className === finalElementClassName) {
		
		document.getElementById(elementId).className = initialElementClassName;
		
	} else {
		
		document.getElementById(elementId).className = finalElementClassName;
		
	}
	
}

function setZIndex(elementId, z) {
	
	document.getElementById(elementId).style.zIndex = z;
	
}

function setOverflow(elementId, overflowType) {
	
	document.getElementById(elementId).style.overflow = overflowType;
	
}

function setOverflowX(elementId, overflowXType) {
	
	document.getElementById(elementId).style.overflowX = overflowXType;
	
}

function setOverflowY(elementId, overflowYType) {
	
	document.getElementById(elementId).style.overflowY = overflowYType;
	
}

function setFloat(elementId, floatPosition) {
	
	document.getElementById(elementId).style.cssFloat = floatPosition;
	
}

function setPositionType(elementId, positionType) {
	
	document.getElementById(elementId).style.position = positionType;
	
}

function setPadding(elementId, paddingSize) {
	
	document.getElementById(elementId).style.padding = paddingSize;
	
}

function setPaddingTRBL(elementId, topPadding, rightPadding, bottomPadding, leftPadding) {
	
	document.getElementById(elementId).style.paddingTop = topPadding;
	document.getElementById(elementId).style.paddingRight = rightPadding;
	document.getElementById(elementId).style.paddingBottom = bottomPadding;
	document.getElementById(elementId).style.paddingLeft = leftPadding;
	
}

function setMargin(elementId, marginSize) {
	
	document.getElementById(elementId).style.margin = marginSize;
	
}

function setMarginTRBL(elementId, topMargin, rightMargin, bottomMargin, leftMargin) {
	
	document.getElementById(elementId).style.marginTop = topMargin;
	document.getElementById(elementId).style.marginRight = rightMargin;
	document.getElementById(elementId).style.marginBottom = bottomMargin;
	document.getElementById(elementId).style.marginLeft = leftMargin;
	
}

function setBackgroundColor(elementId, color) {
	
	document.getElementById(elementId).style.backgroundColor = color;
	
}

function setUniformBorderStyle(elementId, width, style, color) {
	
	document.getElementById(elementId).style.border = width + " " + style + " " + color;
	
}

function setBoxShadow(elementId, dx, dy, blurValue, shadowSpread, color) {
	
	document.getElementById(elementId).style.boxShadow = dx + " " + dy + " " + blurValue + " " + shadowSpread + " " + color;
	
}

function setUniformBorderRadius(elementId, radius) {
	
	document.getElementById(elementId).style.borderRadius = radius;
	
}

function setBorderRadius(elementId, radiusTopLeft, radiusTopRight, radiusBottomRight, radiusBottomLeft) {
	
	document.getElementById(elementId).style.borderTopLeftRadius = radiusTopLeft;
	document.getElementById(elementId).style.borderTopRightRadius = radiusTopRight;
	document.getElementById(elementId).style.borderBottomLeftRadius = radiusBottomLeft;
	document.getElementById(elementId).style.borderBottomRightRadius = radiusBottomRight;
	
}
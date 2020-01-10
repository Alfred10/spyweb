// Functions:
function assignXY(object, xPrime, yPrime) {
	
	object.style.left = xPrime + "px";
	object.style.top = yPrime + "px";
	
}

// Adding a footer:
var footer = document.createElement("div");
footer.id = "footerID";
footer.style.fontSize = "25px";
footer.style.fontFamily = "verdana";
footer.style.color = "#FFFFFF";
document.body.appendChild(footer);

// Variables:
var b = new Array(2);
b[0] = (document.location.href.indexOf("HTML") === -1);
b[1] = (document.location.href.indexOf("Miscellaneous") != -1);

// Adding a link to standard.css:
var link = document.getElementsByTagName("link");
detect = false;
for(q = 0; q < link.length; q++) {
	
	if(link[q].href.indexOf("standard.css") != -1) {
		
		detect = true;
		
	}
	
}

if(!detect) {
	
	var standard = document.createElement("link");
	standard.rel = "stylesheet";
	standard.type = "text/css";
	if(b[0]) {
		
		standard.href = "CSS/standard.css";
		
	} else {
		
		standard.href = "../../CSS/standard.css";
		
	}
	
	document.head.appendChild(standard);
	
}

// Adding subFooters:
var subFooter = new Array(3);
var subFooterBackgroundColor = ["#035354", "#079597", "#73C9CB"];
for(q = 0; q < 3; q++) {
	
	subFooter[q] = document.createElement("div");
	subFooter[q].id = "subFooter[" + q + "]ID";
	subFooter[q].style.textAlign = "center";
	subFooter[q].style.paddingTop = "45px";
	subFooter[q].style.paddingBottom = "45px";
	subFooter[q].style.backgroundColor = subFooterBackgroundColor[q];
	footer.appendChild(subFooter[q]);
	
}

// Adding subFooterSubComponents:
var subFooterSubComponent = new Array(2);
for(q = 0; q < subFooterSubComponent.length; q++) {
	
	subFooterSubComponent[q] = document.createElement("div");
	subFooterSubComponent[q].id = "subFooterSubComponent" + q + "ID";
	subFooterSubComponent[q].style.display = "inline-block";
	subFooterSubComponent[q].style.textAlign = "center";
	subFooterSubComponent[q].style.width = "42%";
	var wMem = subFooterSubComponent[q].style.width;
	dx = (50 - parseInt(subFooterSubComponent[q].style.width)) / (2 * subFooterSubComponent.length);
	subFooterSubComponent[q].style.padding = "20px " + dx + "% " + "20px " + dx + "%";
	subFooter[0].appendChild(subFooterSubComponent[q]);
	delete dx;
	
}

// subFooterSubComponent[0]:
subFooterSubComponent[0].innerHTML = "<font><b>Instagram</b></font><p style = 'font-size: 21px;'>Want to be notified on future projects or see my daily trading recaps?</p>";

// subFooterSubComponent[1]:
subFooterSubComponent[1].innerHTML = "<font><b>YouTube</b></font><p style = 'font-size: 21px;'>Want to see my weekly trading lessons?</p>";

// Adding buttons:
var button = new Array(subFooterSubComponent.length);
var buttonID = ["instagramButtonID", "youtubeButtonID"];
var buttonText = ["<b><i>INSTAGRAM</i><b>", "<b><i>YOUTUBE</i></b>"];
var buttonHyperlink = ["https://www.instagram.com/_themarketmaker/", "https://www.youtube.com/channel/UCAvsG2ESUjmxlASTdfvp-4A"];
for(q = 0; q < button.length; q++) {
	
	button[q] = document.createElement("font");
	button[q].id = buttonID[q];
	button[q].className = "noHighlight";
	button[q].innerHTML = buttonText[q];
	button[q].setAttribute("onmouseleave", "if(this.style.boxShadow.indexOf('-') === -1) {assignXY(this, 2, -2); this.style.boxShadow = '-2px 2px 0px 1px #0D57A5';}");
	button[q].setAttribute("onmousedown", "assignXY(this, -2, 2); this.style.boxShadow = '0px 0px 0px 0px #0D57A5';");
	button[q].setAttribute("onmouseup", "assignXY(this, 0, 0); this.style.boxShadow = '-2px 2px 0px 1px #0D57A5';");
	button[q].setAttribute("ontouchstart", "assignXY(this.id, -2, 2); this.style.boxShadow = '0px 0px 0px 0px #0D57A5';");
	button[q].setAttribute("ontouchend", "assignXY(this.id, 0, 0); this.style.boxShadow = '-2px 2px 0px 1px #0D57A5';");
	button[q].setAttribute("onclick", "window.open('" + buttonHyperlink[q] + "');");
	button[q].style.cursor = "pointer";
	button[q].style.position = "relative";
	button[q].style.borderRadius = "20px";
	button[q].style.padding = "10px";
	button[q].style.backgroundColor = "#2D97F5";
	button[q].style.boxShadow = "-2px 2px 0px 1px #0D57A5";
	tempCent = document.createElement("center");
	tempCent.appendChild(button[q]);
	subFooterSubComponent[q].appendChild(tempCent);
	delete tempCent;
	
}

// subFooter[1]:
var paypal = "<form action = 'https://www.paypal.com/cgi-bin/webscr' method = 'post' target = '_top'><input type = 'hidden' name = 'cmd' value = '_s-xclick' /><input type = 'hidden' name = 'hosted_button_id' value = 'DRBDUV9Z73JX8' /><input type = 'image' src = 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border = '0' name = 'submit' title = 'PayPal - The safer, easier way to pay online!' alt = 'Donate with PayPal button' /><img alt = '' border = '0' src = 'https://www.paypal.com/en_US/i/scr/pixel.gif' width = '1' height = '1' /></form>";
subFooter[1].innerHTML = "<center><font><b>Feeling Generous?</b></font><p style = 'font-size: 25px; margin-left: 5%; margin-right: 5%;'>Consider showing your appreciation by donating to help fund our future complimentary trading courses. Any amount will be immensely appreciated.</p>" + paypal + "</center>";

// subFooter[2]:
var version = "v:3.1.0";
if(b[0]) {
	
	subFooter[2].innerHTML = "<center style = 'margin-left: 1%; margin-right: 1%;'><a class = 'removeDefaultHyperlinkStyle' href = 'HTML/Miscellaneous/changes.html'><b><i>SPYweb " + version + "</i></b></a></center>";
	
} else if(b[1]) {
	
	subFooter[2].innerHTML = "<center style = 'margin-left: 1%; margin-right: 1%;'><a class = 'removeDefaultHyperlinkStyle' href = 'changes.html'><b><i>SPYweb " + version + "</i></b></a></center>";
	
} else {
	
	subFooter[2].innerHTML = "<center style = 'margin-left: 1%; margin-right: 1%;'><a class = 'removeDefaultHyperlinkStyle' href = '../Miscellaneous/changes.html'><b><i>SPYweb " + version + "</i></b></a></center>";
	
}

// Implementing responsive design:
var responsiveFooterActive = false;
function responsiveFooter() {
	
	if(!responsiveFooterActive && window.innerWidth < 800) {
		
		a = 50 - parseInt(wMem);
		b = 100 - a / subFooterSubComponent.length;
		for(q = 0; q < subFooterSubComponent.length; q++) {
			
			subFooterSubComponent[q].style.display = "block";
			subFooterSubComponent[q].style.width = b + "%";
			
		}
		
		delete a, b;
		responsiveFooterActive = true;
		
	}
	
	if(responsiveFooterActive && window.innerWidth >= 800) {
		
		for(q = 0; q < subFooterSubComponent.length; q++) {
			
			subFooterSubComponent[q].style.display = "inline-block";
			subFooterSubComponent[q].style.width = wMem;
			
		}
		
		responsiveFooterActive = false;
		
	}
	
}

setInterval(responsiveFooter, 1/*ms*/);
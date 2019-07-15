// Functions:
function isMobileDevice() {
	
	return(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
	
}

function toggleHiddenBlock(object) {
	
	if(object.style.display === "none") {
		
		object.style.display = "block";
		
	} else {
		
		object.style.display = "none";
		
	}
	
}

function toggleHiddenInlineBlock(object) {
	
	if(object.style.display === "none") {
		
		object.style.display = "inline-block";
		
	} else {
		
		object.style.display = "none";
		
	}
	
}

function isIndex() {
	
	if(document.location.href.indexOf("HTML") === -1) {
	
		return(true);
		
	}
	
	return(false);
	
}

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
	if(isIndex()) {
		
		standard.href = "CSS/standard.css";
		
	} else {
		
		standard.href = "../CSS/standard.css";
		
	}
	
	document.head.appendChild(standard);
	
}

// Adding the navigation rectangle:
var navigation = document.createElement("div");
navigation.id = "navigationID";
navigation.style.position = "fixed";
navigation.style.zIndex = "100";
navigation.style.left = "0px";
navigation.style.top = "0px";
navigation.style.width = "100%";
navigation.style.height = "50px";
navigation.style.backgroundColor = "#0D86F1";

// Adding space:
var emptySpace = document.createElement("div");
emptySpace.id = "emptySpaceID";
emptySpace.style.paddingBottom = navigation.style.height;
document.body.prepend(emptySpace);
document.body.prepend(navigation);

// Adding the logo:
var logoImage = document.createElement("img");
logoImage.id = "logoID";
if(isIndex()) {
	
	logoImage.src = "IMG/H/logoRGB(255,255,255).png";;
	
} else {
	
	logoImage.src = "../IMG/H/logoRGB(255,255,255).png";;
	
}

logoImage.alt = "spyweb logo";
logoImage.width = 80;
logoImage.height = 50;
var logoHyperlink = document.createElement("a");
logoHyperlink.id = "logoHyperlinkID";
if(isIndex()) {
	
	logoHyperlink.href = "index.html";
	
} else {
	
	logoHyperlink.href = "../index.html";
	
}

logoHyperlink.style.position = "fixed";
logoHyperlink.style.left = "20px";
logoHyperlink.appendChild(logoImage);
navigation.appendChild(logoHyperlink);

// Adding the word SPYweb:
var webTitle = document.createElement("a");
webTitle.id = "webTitleID";
webTitle.innerHTML = "<b><i>SPYweb</i></b>";
if(isMobileDevice()) {
	
	webTitle.innerHTML += "<sub style = 'font-family: courier;'><b>mobile</b></sub>";
	
}

webTitle.className = "removeDefaultHyperlinkStyle";
if(isIndex()) {
	
	webTitle.href = "index.html";
	
} else {
	
	webTitle.href = "../index.html";
	
}

webTitle.style.position = "fixed";
webTitle.style.top = "10px";
webTitle.style.left = (parseInt(logoHyperlink.style.left) + logoHyperlink.clientWidth) + "px";
webTitle.style.fontFamily = "verdana";
webTitle.style.fontSize = "25px";
webTitle.style.color = "#FFFFFF";
webTitle.style.textShadow = "-3px 1px 0px rgba(105, 105, 80, 0.8)";
navigation.appendChild(webTitle);

// Adding the triple bar:
var tripleBar = document.createElement("div");
tripleBar.innerHTML = "&#x2630;";
tripleBar.className = "noHighlight";
tripleBar.setAttribute("onmouseover", "function f0() {tripleBar.style.backgroundColor = '#DFEFFF'; tripleBar.style.color = '#000000';} f0();");
tripleBar.setAttribute("onmouseout", "function f0() {tripleBar.style.backgroundColor = '#0D86F1'; tripleBar.style.color = '#FFFFFF';}; f0();");
tripleBar.setAttribute("onmousedown", "function f0() {tripleBar.style.backgroundColor = '#11B2FF'; tripleBar.style.color = '#FFFFFF';} f0();");
tripleBar.setAttribute("onmouseup", "function f0() {tripleBar.style.backgroundColor = '#DFEFFF'; tripleBar.style.color = '#000000';} f0();");
tripleBar.setAttribute("ontouchstart", "function f0() {tripleBar.style.backgroundColor = '#11B2FF'; tripleBar.style.color = '#FFFFFF';} f0();");
tripleBar.setAttribute("ontouchend", "function f0() {tripleBar.style.backgroundColor = '#0D86F1'; tripleBar.style.color = '#FFFFFF';} f0();");
tripleBar.style.cursor = "pointer";
tripleBar.style.display = "inline-block";
tripleBar.style.float = "right";
tripleBar.style.paddingTop = "7px";
tripleBar.style.paddingRight = "12px";
tripleBar.style.paddingBottom = "10px";
tripleBar.style.paddingLeft = "15px";
tripleBar.style.fontSize = "25px";
tripleBar.style.color = "#FFFFFF";
function balance() {
	
	var count = 0;
	while(tripleBar.clientHeight < navigation.clientHeight) {
		
		if(count % 2 === 0) {
			
			tripleBar.style.paddingTop = (1 + parseInt(tripleBar.style.paddingTop)) + "px";
			
		} else {
			
			tripleBar.style.paddingBottom = (1 + parseInt(tripleBar.style.paddingBottom)) + "px";
			
		}
		
	}
	
	while(tripleBar.clientHeight > navigation.clientHeight) {
		
		if(count % 2 === 0) {
			
			tripleBar.style.paddingTop = (parseInt(tripleBar.style.paddingTop) - 1) + "px";
			
		} else {
			
			tripleBar.style.paddingBottom = (parseInt(tripleBar.style.paddingBottom) - 1) + "px";
			
		}
		
	}
	
}

setTimeout(balance, 1/*ms*/);
navigation.appendChild(tripleBar);

// Adding the submenu:
var submenu = document.createElement("div");
submenu.id = "submenuID";
submenu.style.display = "none";
submenu.style.position = "fixed";
submenu.style.float = "right";
submenu.style.left = "0px";
submenu.style.top = "50px";
submenu.style.width = "100%";
var submenuHeightError = 50;
setInterval(function() {submenu.style.height = window.innerHeight - submenuHeightError + "px";}, 1/*ms*/);
submenu.style.overflow = "auto";
navigation.appendChild(submenu);

// Adding sublinks:
var numberOfSublinks = 6;
var numberOfSublinkSublinks = 8;
var sublink = new Array(numberOfSublinks + numberOfSublinkSublinks);
var sublinkLabel = new Array(sublink.length);
sublinkLabel[0] = "<font class = 'nonWrappable'>&emsp;Home</font>";
sublinkLabel[1] = "<font class = 'nonWrappable'>&emsp;About Us</font>";
sublinkLabel[2] = "<font class = 'nonWrappable'>&emsp;Contact Us</font>";
sublinkLabel[3] = "<font class = 'nonWrappable'>&emsp;What's New</font>";
sublinkLabel[4] = "<font class = 'nonWrappable'>&emsp;Chapter 1<font id = 'down0' style = 'display: inline-block;'>&#x25BE;</font><font id = 'up0' style = 'display: none;'>&#x25B4;</font></font></div>";
sublinkLabel[5] = "<font class = 'nonWrappable chapter1'>&emsp;1. Basic Methods of Analysis</font>";
sublinkLabel[6] = "<font class = 'nonWrappable chapter1'>&emsp;2. News and Futures</font>";
sublinkLabel[7] = "<font class = 'nonWrappable chapter1'>&emsp;3. Getting Started</font>";
sublinkLabel[8] = "<font class = 'nonWrappable chapter1'>&emsp;4. Conclusion of Chapter 1</font>";
sublinkLabel[9] = "<font class = 'nonWrappable'>&emsp;Chapter 2<font id = 'down1' style = 'display: inline-block;'>&#x25BE;</font><font id = 'up1' style = 'display: none;'>&#x25B4;</font></font></div></font>";
sublinkLabel[10] = "<font class = 'nonWrappable chapter2'>&emsp;1. Big Picture and Patterns</font>";
sublinkLabel[11] = "<font class = 'nonWrappable chapter2'>&emsp;2. Entry, Exit, and Stop Loss</font>";
sublinkLabel[12] = "<font class = 'nonWrappable chapter2'>&emsp;3. Step-by-Step Analysis</font>";
sublinkLabel[13] = "<font class = 'nonWrappable chapter2'>&emsp;4. Personal Trading</font>";
var sublinkHyperlink = new Array(sublink.length);
if(isIndex()) {
	
	sublinkHyperlink[0] = "index.html";
	sublinkHyperlink[1] = "HTML/about_us.html";
	sublinkHyperlink[2] = "HTML/contact.html";
	sublinkHyperlink[3] = "HTML/changes.html";
	sublinkHyperlink[4] = "javascript:void(0);";
	sublinkHyperlink[5] = "HTML/chapter1_section1.html";
	sublinkHyperlink[6] = "HTML/chapter1_section2.html";
	sublinkHyperlink[7] = "HTML/chapter1_section3.html";
	sublinkHyperlink[8] = "HTML/chapter1_section4.html";
	sublinkHyperlink[9] = "javascript:void(0);";
	sublinkHyperlink[10] = "HTML/chapter2_section1.html";
	sublinkHyperlink[11] = "HTML/chapter2_section2.html";
	sublinkHyperlink[12] = "HTML/chapter2_section3.html";
	sublinkHyperlink[13] = "HTML/chapter2_section4.html";
	
} else {
	
	sublinkHyperlink[0] = "../index.html";
	sublinkHyperlink[1] = "about_us.html";
	sublinkHyperlink[2] = "contact.html";
	sublinkHyperlink[3] = "changes.html";
	sublinkHyperlink[4] = "javascript:void(0);";
	sublinkHyperlink[5] = "chapter1_section1.html";
	sublinkHyperlink[6] = "chapter1_section2.html";
	sublinkHyperlink[7] = "chapter1_section3.html";
	sublinkHyperlink[8] = "chapter1_section4.html";
	sublinkHyperlink[9] = "javascript:void(0);";
	sublinkHyperlink[10] = "chapter2_section1.html";
	sublinkHyperlink[11] = "chapter2_section2.html";
	sublinkHyperlink[12] = "chapter2_section3.html";
	sublinkHyperlink[13] = "chapter2_section4.html";
	
}

for(q = 0; q < sublink.length; q++) {
	
	sublink[q] = document.createElement("a");
	sublink[q].href = sublinkHyperlink[q];
	sublink[q].innerHTML = sublinkLabel[q];
	if(sublink[q].innerHTML.indexOf(".") != -1) {
		
		sublink[q].className = "removeDefaultHyperlinkStyle";
		sublink[q].setAttribute("onmouseover", "function f0() {sublink[" + q + "].style.backgroundColor = '#282828'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
		sublink[q].setAttribute("onmouseout", "function f0() {sublink[" + q + "].style.backgroundColor = '#E0E0E0'; sublink[" + q + "].style.color = '#000000';} f0();");
		sublink[q].setAttribute("onmousedown", "function f0() {sublink[" + q + "].style.backgroundColor = '#31FFC2'; sublink[" + q + "].style.color = '#000000';} f0();");
		sublink[q].setAttribute("onmouseup", "function f0() {sublink[" + q + "].style.backgroundColor = '#282828'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
		sublink[q].setAttribute("ontouchstart", "function f0() {sublink[" + q + "].style.backgroundColor = '#31FFC2'; sublink[" + q + "].style.color = '#000000';} f0();");
		sublink[q].setAttribute("ontouchend", "function f0() {sublink[" + q + "].style.backgroundColor = '#E0E0E0'; sublink[" + q + "].style.color = '#000000';} f0();");
		sublink[q].style.display = "block";
		sublink[q].style.backgroundColor = "#E0E0E0";
		sublink[q].style.color = "#000000";
		
	} else {
		
		sublink[q].className = "removeDefaultHyperlinkStyle";
		sublink[q].setAttribute("onmouseover", "function f0() {sublink[" + q + "].style.backgroundColor = '#DFEFFF'; sublink[" + q + "].style.color = '#000000';} f0();");
		sublink[q].setAttribute("onmouseout", "function f0() {sublink[" + q + "].style.backgroundColor = '#0D86F1'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
		sublink[q].setAttribute("onmousedown", "function f0() {sublink[" + q + "].style.backgroundColor = '#11B2FF'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
		sublink[q].setAttribute("onmouseup", "function f0() {sublink[" + q + "].style.backgroundColor = '#DFEFFF'; sublink[" + q + "].style.color = '#000000';} f0();");
		sublink[q].setAttribute("ontouchstart", "function f0() {sublink[" + q + "].style.backgroundColor = '#11B2FF'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
		sublink[q].setAttribute("ontouchend", "function f0() {sublink[" + q + "].style.backgroundColor = '#0D86F1'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
		sublink[q].style.display = "block";
		sublink[q].style.backgroundColor = "#0D86F1";
		sublink[q].style.color = "#FFFFFF";
		
	}
	
	sublink[q].style.cursor = "pointer";
	sublink[q].style.postion = "fixed";
	sublink[q].style.width = "2257px";
	sublink[q].style.height = "42px";
	sublink[q].style.paddingTop = (parseInt(navigation.style.height) - parseInt(sublink[q].style.height)) + "px";
	sublink[q].style.fontFamily = "verdana";
	sublink[q].style.fontSize = "25px";
	submenu.appendChild(sublink[q]);
	
}

function hideSections() {
	
	for(q = 0; q < sublink.length; q++) {
		
		if(sublink[q].innerHTML.indexOf('.') != -1) {
			
			sublink[q].style.display = 'none';
			
		}
		
	}
	
	document.getElementById("down0").style.display = "inline-block";
	document.getElementById("up0").style.display = "none";
	document.getElementById("down1").style.display = "inline-block";
	document.getElementById("up1").style.display = "none";
	
}

tripleBar.setAttribute("onclick", "toggleHiddenBlock(submenu); for(q = 0; q < sublink.length; q++) {sublink[q].style.width = submenu.scrollWidth + 'px';} hideSections(); tripleBar.setAttribute('onclick', 'toggleHiddenBlock(submenu); hideSections();');");
for(a = 0; a < sublink.length; a++) {
	
	if(sublink[a].children[0].innerHTML.indexOf("Chapter 1") != -1) {
		
		tempStr = "";
		for(b = 0; b < sublink.length; b++) {
			
			if(sublink[b].children[0].className.indexOf("chapter1") != -1) {
				
				tempStr += "toggleHiddenBlock(sublink[" + b + "]);";
				
			}
			
		}
		
		sublink[a].setAttribute("onclick", "toggleHiddenInlineBlock(document.getElementById('down0')); toggleHiddenInlineBlock(document.getElementById('up0'));" + tempStr);
		delete tempStr;
		
	}
	
	if(sublink[a].children[0].innerHTML.indexOf("Chapter 2") != -1) {
		
		tempStr = "";
		for(b = 0; b < sublink.length; b++) {
			
			if(sublink[b].children[0].className.indexOf("chapter2") != -1) {
				
				tempStr += "toggleHiddenBlock(sublink[" + b + "]);";
				
			}
			
		}
		
		sublink[a].setAttribute("onclick", "toggleHiddenInlineBlock(document.getElementById('down1')); toggleHiddenInlineBlock(document.getElementById('up1'));" + tempStr);
		delete tempStr;
		
	}
	
}
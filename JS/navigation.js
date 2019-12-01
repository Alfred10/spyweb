// Functions:
function isMobileDevice() {
	
	return(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
	
}

function isIE() {
	
	return(!!document.documentMode);
	
}

function toggleHiddenBlock(object) {
	
	if(object.style.display === "none") {
		
		object.style.display = "block";
		
	} else {
		
		object.style.display = "none";
		
	}
	
}

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

// Adding the navigation rectangle:
var navigation = document.createElement("div");
navigation.id = "navigationID";
navigation.style.position = "fixed";
navigation.style.zIndex = "100";
navigation.style.left = "0px";
navigation.style.top = "0px";
navigation.style.width = "100%";
navigation.style.height = "50px";
navigation.style.backgroundColor = "#333333";

// Adding space:
var emptySpace = document.createElement("div");
emptySpace.id = "emptySpaceID";
emptySpace.style.paddingBottom = navigation.style.height;
if(!isIE()) {
	
	document.body.prepend(emptySpace);
	document.body.prepend(navigation);
	
} else {
	
	document.body.appendChild(emptySpace);
	document.body.appendChild(navigation);
	
}

// Adding the logo:
var logoImage = document.createElement("img");
logoImage.id = "logoID";
if(b[0]) {
	
	logoImage.src = "IMG/H/logoRGB(255,255,255).png";;
	
} else {
	
	logoImage.src = "../../IMG/H/logoRGB(255,255,255).png";;
	
}

logoImage.alt = "spyweb logo";
logoImage.width = 80;
logoImage.height = 50;
var logoHyperlink = document.createElement("a");
logoHyperlink.id = "logoHyperlinkID";
if(b[0]) {
	
	logoHyperlink.href = "index.html";
	
} else {
	
	logoHyperlink.href = "../../index.html";
	
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
if(b[0]) {
	
	webTitle.href = "index.html";
	
} else {
	
	webTitle.href = "../../index.html";
	
}

webTitle.style.position = "fixed";
webTitle.style.top = "10px";
webTitle.style.left = (parseInt(logoHyperlink.style.left) + logoHyperlink.clientWidth) + "px";
webTitle.style.fontFamily = "verdana";
webTitle.style.fontSize = "25px";
webTitle.style.color = "#FFFFFF";
navigation.appendChild(webTitle);

// Adding the triple bar:
var tripleBar = document.createElement("div");
tripleBar.innerHTML = "&#x2630;";
tripleBar.id = "tripleBarID";
tripleBar.className = "noHighlight";
tripleBar.setAttribute("onmouseover", "function f0() {tripleBar.style.backgroundColor = '#FFF0F0'; tripleBar.style.color = '#000000';} f0();");
tripleBar.setAttribute("onmouseout", "function f0() {tripleBar.style.backgroundColor = '" + navigation.style.backgroundColor + "'; tripleBar.style.color = '#FFFFFF';} f0();");
tripleBar.setAttribute("onmousedown", "function f0() {tripleBar.style.backgroundColor = '#FF2626'; tripleBar.style.color = '#FFFFFF';} f0();");
tripleBar.setAttribute("onmouseup", "function f0() {tripleBar.style.backgroundColor = '#FFF0F0'; tripleBar.style.color = '#000000';} f0();");
tripleBar.setAttribute("ontouchstart", "function f0() {tripleBar.style.backgroundColor = '#FF2626'; tripleBar.style.color = '#FFFFFF';} f0();");
tripleBar.setAttribute("ontouchend", "function f0() {tripleBar.style.backgroundColor = '" + navigation.style.backgroundColor + "'; tripleBar.style.color = '#FFFFFF';} f0();");
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
			count++;
			
		} else {
			
			tripleBar.style.paddingBottom = (1 + parseInt(tripleBar.style.paddingBottom)) + "px";
			count++;
			
		}
		
	}
	
	count = 0;
	while(tripleBar.clientHeight > navigation.clientHeight) {
		
		if(count % 2 === 0) {
			
			tripleBar.style.paddingTop = (parseInt(tripleBar.style.paddingTop) - 1) + "px";
			count++;
			
		} else {
			
			tripleBar.style.paddingBottom = (parseInt(tripleBar.style.paddingBottom) - 1) + "px";
			count++;
			
		}
		
	}
	
}

setInterval(balance, 1/*ms*/);
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
submenu.style.overflowY = "auto";
navigation.appendChild(submenu);

// Adding sublinks:
var numberOfSublinks = 9;
var sublink = new Array(numberOfSublinks);
var sublinkLabel = new Array(sublink.length);
sublinkLabel[0] = "<font class = 'nonWrappable'>&emsp;Home</font>";
sublinkLabel[1] = "<font class = 'nonWrappable'>&emsp;Chapter 1</font>";
sublinkLabel[2] = "<font class = 'nonWrappable'>&emsp;Chapter 2</font>";
sublinkLabel[3] = "<font class = 'nonWrappable'>&emsp;Chapter 3</font>";
sublinkLabel[4] = "<font class = 'nonWrappable'>&emsp;About Us</font>";
sublinkLabel[5] = "<font class = 'nonWrappable'>&emsp;Changes</font>";
sublinkLabel[6] = "<font class = 'nonWrappable'>&emsp;Contact Us</font>";
sublinkLabel[7] = "<font class = 'nonWrappable'>&emsp;Sitemap</font>";
sublinkLabel[8] = "<font class = 'nonWrappable'>&emsp;Privacy Policy</font>";
var sublinkHyperlink = new Array(sublink.length);
if(b[0]) {
	
	sublinkHyperlink[0] = "index.html";
	sublinkHyperlink[1] = "HTML/Miscellaneous/sitemap.html#chapter1";
	sublinkHyperlink[2] = "HTML/Miscellaneous/sitemap.html#chapter2";
	sublinkHyperlink[3] = "HTML/Miscellaneous/sitemap.html#chapter3";
	sublinkHyperlink[4] = "HTML/Miscellaneous/about_us.html";
	sublinkHyperlink[5] = "HTML/Miscellaneous/changes.html";
	sublinkHyperlink[6] = "HTML/Miscellaneous/contact_us.html";
	sublinkHyperlink[7] = "HTML/Miscellaneous/sitemap.html";
	sublinkHyperlink[8] = "HTML/Miscellaneous/privacy_policy.html";
	
} else if(b[1]) {
	
	sublinkHyperlink[0] = "../../index.html";
	sublinkHyperlink[1] = "sitemap.html#chapter1";
	sublinkHyperlink[2] = "sitemap.html#chapter2";
	sublinkHyperlink[3] = "sitemap.html#chapter3";
	sublinkHyperlink[4] = "about_us.html";
	sublinkHyperlink[5] = "changes.html";
	sublinkHyperlink[6] = "contact_us.html";
	sublinkHyperlink[7] = "sitemap.html";
	sublinkHyperlink[8] = "privacy_policy.html";
	
} else {
	
	sublinkHyperlink[0] = "../../index.html";
	sublinkHyperlink[1] = "../Miscellaneous/sitemap.html#chapter1";
	sublinkHyperlink[2] = "../Miscellaneous/sitemap.html#chapter2";
	sublinkHyperlink[3] = "../Miscellaneous/sitemap.html#chapter3";
	sublinkHyperlink[4] = "../Miscellaneous/about_us.html";
	sublinkHyperlink[5] = "../Miscellaneous/changes.html";
	sublinkHyperlink[6] = "../Miscellaneous/contact_us.html";
	sublinkHyperlink[7] = "../Miscellaneous/sitemap.html";
	sublinkHyperlink[8] = "../Miscellaneous/privacy_policy.html";
	
}

for(q = 0; q < sublink.length; q++) {
	
	sublink[q] = document.createElement("a");
	sublink[q].href = sublinkHyperlink[q];
	sublink[q].innerHTML = sublinkLabel[q];
	sublink[q].className = "removeDefaultHyperlinkStyle";
	sublink[q].setAttribute("onmouseover", "function f0() {sublink[" + q + "].style.backgroundColor = '#FFF0F0'; sublink[" + q + "].style.color = '#000000';} f0();");
	sublink[q].setAttribute("onmouseout", "function f0() {sublink[" + q + "].style.backgroundColor = '" + navigation.style.backgroundColor + "'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
	sublink[q].setAttribute("onmousedown", "function f0() {sublink[" + q + "].style.backgroundColor = '#FF2626'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
	sublink[q].setAttribute("onmouseup", "function f0() {sublink[" + q + "].style.backgroundColor = '#FFF0F0'; sublink[" + q + "].style.color = '#000000';} f0();");
	sublink[q].setAttribute("ontouchstart", "function f0() {sublink[" + q + "].style.backgroundColor = '#FF2626'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
	sublink[q].setAttribute("ontouchend", "function f0() {sublink[" + q + "].style.backgroundColor = '" + navigation.style.backgroundColor + "'; sublink[" + q + "].style.color = '#FFFFFF';} f0();");
	sublink[q].style.display = "block";
	sublink[q].style.backgroundColor = "#333333";
	sublink[q].style.color = "#FFFFFF";
	sublink[q].style.cursor = "pointer";
	sublink[q].style.postion = "fixed";
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
	
}

tripleBar.setAttribute("onclick", "toggleHiddenBlock(submenu);");

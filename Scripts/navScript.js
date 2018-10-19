function changeClassName() {
	
	if (document.getElementById("nav").className === "nav") {
		
		document.getElementById("nav").className += " responsive";
		
	} else {
		
		document.getElementById("nav").className = "nav";
		
	}
	
}

function present(input) {
	
	document.getElementById(input).classList.toggle("drop");
	
}

window.onclick = function(event) {
	
	if(!event.target.matches('.dropbtn')) {
		
		if(document.getElementById("chap1").classList.contains('drop')) {
			
			document.getElementById("chap1").classList.remove('drop');
			
		}
		
		if(document.getElementById("chap2").classList.contains('drop')) {
			
			document.getElementById("chap2").classList.remove('drop');
			
		}
		
	}
	
}
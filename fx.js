function sleep(delay) {
	var sleepMoment = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - sleepMoment) > delay){
			break;
		}
	}
}

function fadeIn() {
	document.body.className = document.body.className.replace("buio","");
	//setTimeout(function() { document.body.parentNode.style.backgroundColor = "transparent"; }, 2000);
}

function fadeOut() {
	document.body.className = document.body.className.replace("","fade-out");
}

function changePage (url) {
	fadeOut();
	setTimeout(function() { location.replace(url); }, 2000);
}

function viewCell (casella, colore) {
	casella.style.backgroundColor = colore;
	casella.style.transition = "all 0.5s";
}

function fadeInPopup (popuppo, contenuto){
	popuppo.style.display = "block";
	popuppo.className = popuppo.className.replace("animate","animated fadeInDown");
	popuppo.innerHTML = contenuto;
}

function fadeOutPopup (popuppo) {
	popuppo.className = popuppo.className.replace("animated fadeInDown","animated fadeOutUp");
	setTimeout(function() {
		popuppo.className = popuppo.className.replace("animated fadeOutUp","animate");
		if (popuppo && popuppo.style.display == "block"){
			popuppo.style.display = "none";
		}
	}, 1000);
}

function fadeInBottoni (menu){
	menu.style.display = "block";
	menu.className = menu.className.replace("animate","animated fadeIn");
}

function fadeOutBottoni (menu) {
	menu.className = menu.className.replace("animated fadeIn","animated fadeOut");
	setTimeout(function() {
		menu.className = menu.className.replace("animated fadeOut","animate");
		if (menu && menu.style.display == "block"){
			menu.style.display = "none";
		}
	}, 1000);
}

function isAdiacente (casella, altra){
	if (getLettera(casella) == getLettera(altra)){
		const n1 = getNumeroNumero(casella);
		const n2 = getNumeroNumero(altra);
		return n1 >= n2-1 && n1 <= n2+1;
	} else if (getNumero(casella) == getNumero(altra)){
		const n1 = getLettera(casella).charCodeAt(0);
		const n2 = getLettera(altra).charCodeAt(0);
		return n1 >= n2-1 && n1 <= n2+1;
	}
}

function riordinaCaselle (sorgente, daOrdinare) {
	var caselle = daOrdinare.slice();
	var riordinate = [];
	var intermedie = [];
	if (sorgente instanceof Array){
		for (var k=0; k<sorgente.length; k++){
			if (caselle.indexOf(sorgente[k]) >= 0){
				intermedie.push(sorgente[k]);
			}
		}
	} else {
		intermedie.push(sorgente);
	}
	
	for (var j=0; j<intermedie.length; j++){
		var casella = intermedie[j];
		for (var i=caselle.length-1; i>=0; i--){
			var temp = caselle[i];
			if (isAdiacente(casella, temp)){
				intermedie.push(temp);
				riordinate.push(temp);
				caselle.splice(i,1);
			}
		}
	}
	if (riordinate.length == 0){
		riordinate = caselle;
	}
	return riordinate;	
}

function testaRiordina (){
	var caselle = getCaselle("a1", "e5");
	var riordinate = riordinaCaselle("c1", caselle);
	alert ("Normale: " + stampArray (getCaselle("a1", "e5")) + "\nRiordinate: " + stampArray (riordinate));
}
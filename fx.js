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
	popuppo.className = popuppo.className.replace("animate","animated fadeIn");
	popuppo.innerHTML = contenuto;
}

// function fadeInPopup (popuppo, contenuto) {
	// popuppo.style.width = "60vw";
	// popuppo.style.height = "40vh";
	// setTimeout(function() { popuppo.innerHTML = contenuto; }, 1000);
// }

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
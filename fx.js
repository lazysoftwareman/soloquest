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

function rallentaMostraPopup (popuppo, contenuto){
	setTimeout(function() {
		popuppo.style.display = "block";
		popuppo.innerHTML = contenuto;
	}, 100);
}

// function fadeInPopup (popuppo, contenuto) {
	// popuppo.style.width = "60vw";
	// popuppo.style.height = "40vh";
	// setTimeout(function() { popuppo.innerHTML = contenuto; }, 1000);
// }

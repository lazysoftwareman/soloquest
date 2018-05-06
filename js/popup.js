//GESTIONE POPUP E MENU

function mostraBottoni(elemento, x, y) {
	mostraOverlay();
	const bottoni = elemento.azioni;
	const menu = document.getElementById("popupMenu");
	menu.style.top = 0+"px";
    menu.style.left = 0+"px";
	menu.innerHTML = "";
	for (var i=0; i<bottoni.length; i++){
		const bottone = bottoni[i];
		var span = document.createElement("span");
		span.onclick = function(){		
			nascondiOverlay();
			esegui(bottone);
			chiudiBottoni();
		}
		span.innerHTML = bottone.label;
		menu.appendChild (span);
	}	
	menu.style.display = "block";
    posizionaMenu(menu, x, y);
	menu.style.zIndex = 20;
	menu.style.position = "absolute";
	//fadeInBottoni(menu);
}

function posizionaMenu(menu, x, y){
	const wTot = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const hTot = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	//alert ("wTot " +wTot + ",hTot " + hTot);
	const menuW = menu.offsetWidth;
	const menuH = menu.offsetHeight;
	//alert ("menuW " +menuW + ",menuH " + menuH);
	const leftMax = wTot - menuW;
	const topMax = hTot - menuH;
	//alert ("leftMax " +leftMax + ",topMax " + topMax);
	const lefft = Math.min(x+window.scrollX, leftMax);
	const topp = Math.min(y+window.scrollY, topMax);
	//alert ("lefft " +lefft + ",topp " + topp);
	menu.style.top = topp+"px";
    menu.style.left = lefft+"px";
}

function popuppa(risultato){
	mostraOverlay();
	const popup = document.getElementById('risultato');
	popup.style.display = "none";
	popup.style.position = "absolute";	
	popup.innerHTML = "";
    popup.style.top = "30vh";
    popup.style.left = "15vw";
	popup.style.zIndex = 30;
	fadeInPopup(popup, risultato);
}

function chiudiPoppuppi() {
	nascondiOverlay();
	chiudiBottoni();
	const popup = document.getElementById("risultato");
	fadeOutPopup(popup);
}

function chiudiBottoni() {
	const menu = document.getElementById("popupMenu");
	if (menu && menu.style.display == "block"){
		menu.style.display = "none";
	}
	fadeOutBottoni(menu);
}

function mostraOverlay () {
	var overlay = document.getElementById("overlay");
	if (overlay.style.display == "none"){
		overlay.style.display = "inline";
	}
}

function nascondiOverlay () {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
}
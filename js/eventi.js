//EVENTI VARI

function trovaAzione(evento, tipo){
	var azione = {
		"tipo": tipo,
		"label": labelStandard[tipo],
		"testo": testiStandard[tipo]
	};
	if (evento){
		const azioni = evento.azioni;
		for (var i=0; i<azioni.length; i++){
			var currAzione = azioni[i];
			if (currAzione.tipo == tipo){
				if (currAzione.label){
					azione.label = currAzione.label;
				}
				if (currAzione.testo){
					azione.testo = currAzione.testo;
				}
				if (currAzione.azione){
					azione.azione = currAzione.azione;
				}
				break;
			}
		}
	}
	return azione;
}

function apriPorta(porta, automatico){
	if (caselleViste.indexOf(getDa(porta.caselle)) < 0 || caselleViste.indexOf(getA(porta.caselle)) < 0) {
		if (automatico || !porta.blocco){
			apriEffettivamentePorta(porta, automatico);
		} else {
			apriConfirm(porta);
		}
	}
}

function apriConfirm(porta){
	document.getElementById("confirmTesto").innerHTML = porta.blocco.testo;
	const contenuto = document.getElementById("confirmDialog").innerHTML;
	popuppa (contenuto);
	var contenuti = document.getElementById("risultato").childNodes;
	for (i = 0; i < contenuti.length; i++) {
		if (contenuti[i].id){
			if (contenuti[i].id == "confirmSiButton"){
				contenuti[i].onclick = function() {
					apriEffettivamentePorta(porta, false);
					chiudiPoppuppi();
				}
			}
			contenuti[i].removeAttribute("id");
		}
	}
}

function apriEffettivamentePorta(porta, automatico){
	var casPorta = getCaselle(getDa(porta.caselle), getA(porta.caselle));
	if (getDa(porta.vis1)){
		rendiVisibileSpread (casPorta, getDa(porta.vis1), getA(porta.vis1));
	} else {
		rendiVisibileSpread (casPorta, porta.vis1);
	}
	if (getDa(porta.vis2)){
		rendiVisibileSpread (casPorta, getDa(porta.vis2), getA(porta.vis2));
	} else {
		rendiVisibileSpread (casPorta, porta.vis2);
	}
	if (!automatico){
		if (porta.testo){
			popuppa(porta.testo);
		}
		if (porta.azione){
			eval(porta.azione);
		}
	}
}

function apriVisibilita(visib, automatico){
	if (getDa(visib.vis1)){
		rendiVisibileSpread (visib.casella, getDa(visib.vis1), getA(visib.vis1));
	} else {
		rendiVisibileSpread (visib.casella, visib.vis1);
	}
	if (getDa(visib.vis2)){
		rendiVisibileSpread (visib.casella, getDa(visib.vis2), getA(visib.vis2));
	} else {
		rendiVisibileSpread (visib.casella, visib.vis2);
	}
	if (!automatico){
		if (visib.testo){
			popuppa(visib.testo);
		}
		if (visib.azione){
			eval(visib.azione);
		}
	}
}

function mostraMenuStanza(stanza, x, y){
	var evento = trovaEventoInStanza(stanza);
	var azioneInfo = trovaAzione(evento, "Info");
	var azioneRicerca = trovaAzione(evento, "Ricerca");
	var azioneRicercaPS = getAzionePS(stanza);
	var elemento = {
		"azioni": [azioneInfo,azioneRicerca,azioneRicercaPS]
	}
	mostraBottoni (elemento, x, y);
}

function getAzionePS(stanza){
	var azione = {
		"label": labelStandard['RicercaPS'],
		"azione": "ricercaPS(\""+stanza+"\")"
	};
	return azione;
}

function mostraMenuMostro (mostro, id, x, y){
	var azioneRimuovi = {
		"tipo": "RimuoviMostro",
		"label": "Mostro ucciso",
		"azione": "rimuoviMostro(\"" + id + "\")"
	};
	var azioneInfo = {
		"tipo": "Info",
		"label": "Informazioni",
		"azione": "mostraInfoMostro(\"" + mostro.tipo + "\")"
	};
	var elemento = {
		"azioni": [azioneRimuovi,azioneInfo]
	}
	mostraBottoni (elemento, x, y);
}

function rimuoviMostro (id){
	var mostroImg = document.getElementById(id);
	const mostro = trovaMostroInCasella(id.substring("mostro".length));
	if (mostro.testoUcciso) {
		popuppa(mostro.testoUcciso);
	}
	mostroImg.parentNode.removeChild(mostroImg);
}

function mostraInfoMostro (mostroTipo){
	const info = mostri[mostroTipo];
	document.getElementById("mostroImg").src = "img/mostri/" + info.tipo + ".png";
	document.getElementById("mostroNome").innerHTML = info.nome;
	document.getElementById("mostroMov").innerHTML = info.movimento;
	document.getElementById("mostroAtt").innerHTML = info.attacco;
	document.getElementById("mostroDif").innerHTML = info.difesa;
	document.getElementById("mostroCor").innerHTML = info.corpo;
	document.getElementById("mostroMen").innerHTML = info.mente;
	document.getElementById("mostroCom").innerHTML = info.comportamento;
	const contenuto = document.getElementById("mostroInfoArea").innerHTML;
	popuppa (contenuto);
	// var figli = document.getElementById("risultato").childNodes;
	// var divContainer = figli[1];
	// for (var i = 0; i < figli.length; i++) {
		// if (figli[i].className && figli[i].className == "mostroContainer"){
			// divContainer = figli[i];
			// break;
		// }
	// }
	// var contenuti = divContainer.childNodes;
	// for (i = 0; i < contenuti.length; i++) {
		// if (contenuti[i].id){
			// contenuti[i].removeAttribute("id");
		// }
	// }
	togliIdInPopup();
}

function ricercaMain(){
	azioneMain("ricercaTesoro");
}

function ricercaPSMain(){
	azioneMain("ricercaPorteSegrete");
}

function azioneMain(azione) {
	//azione può essere "ricercaTesoro" o "ricercaPorteSegrete"
	rendiVisibileMap(azione);
	var azioneText = "";
	if (azione == "ricercaTesoro"){
		azioneText = "Ricerca tesoro";
	} else if (azione == "ricercaPorteSegrete"){
		azioneText = "Ricerca porte segrete";
	}
	var testoTotal = "<b>"+azioneText+"</b>:<br>Indica sulla mappa la posizione dell'eroe";
	popuppa (testoTotal);
}

function togliIdInPopup() {
	var figli = document.getElementById("risultato").childNodes;
	for (var i = 0; i < figli.length; i++) {
		togliIdRec (figli[i]);
	}
}

function togliIdRec (node){
	if (node.id){
		node.removeAttribute("id");
	}
	var contenuti = node.childNodes;
	if (contenuti && contenuti.length > 0){
		for (var i = 0; i < contenuti.length; i++) {
			togliIdRec (contenuti[i]);
		}
	}
}

function copiaOnclickInPopup() {
	var figli = document.getElementById("risultato").childNodes;
	for (var i = 0; i < figli.length; i++) {
		copiaOnclickRec (figli[i]);
	}
}

function copiaOnclickRec (node){
	if (node.id){
		const realId = node.id;
		node.id = "temp"+realId;
		node.onclick = document.getElementById(realId).onclick;
		node.id = realId;
	}
	var contenuti = node.childNodes;
	if (contenuti && contenuti.length > 0){
		for (var i = 0; i < contenuti.length; i++) {
			copiaOnclickRec (contenuti[i]);
		}
	}
}

function ricercaPSZona(caselle){
	var casPorte = trovaCasellePorteSegrete();
	var trovata = false;
	for (var i=0; i<caselle.length; i++){
		var casella = caselle[i];
		if (casPorte.indexOf(casella) >= 0){
			visualizzaPortaSegreta (trovaPortaSegretaInCasella(casella));
			trovata = true;
		}
	}
	if (trovata){
		popuppa(testiStandard['RicercaPSOK']);
	} else {
		popuppa(testiStandard['RicercaPS']);
	}	
}

function ricercaTesoroZona(stanzaOcaselle){
	var evento;
	if (typeof stanzaOcaselle === 'string'){
		//Ricerca in stanza
		evento = trovaRicercaInStanza(stanzaOcaselle);		
	} else {
		//Ricerca in corridoio
		evento = trovaRicercaInStanza(stanzaOcaselle);	
	}
	if (evento){
		if (evento.testo){
			popuppa(evento.testo);
		}
		if (evento.azione){
			eval(evento.azione);
		}
	} else {
		popuppa(testiStandard['Ricerca']);
	}
}

function ricercaPorteSegrete(casella){
	const zona = getZona(casella);
	const isStanza = !zona.startsWith("c") || zona.length == 1;
	const caselleZona = zone[zona];		
	const caselleFiltrate = isStanza ? caselleZona : getCaselleValide(casella, caselleZona);
	ricercaPSZona(caselleFiltrate);
}

function ricercaTesoro(casella){
	const zona = getZona(casella);
	const isStanza = !zona.startsWith("c") || zona.length == 1;
	if (isStanza) {
		ricercaTesoroZona(zona);
	} else {
		const caselleZona = zone[zona];		
		const caselleFiltrate = getCaselleValide(casella, caselleZona);
		ricercaTesoroZona(caselleFiltrate);
	}
}

function getCaselleValide (sorgente, zona) {
	var caselle = zona.slice();
	var filtrate = [];
	filtrate.push(sorgente);
	var ind = caselle.indexOf(sorgente);
	if (ind >= 0){
		caselle.splice(ind,1);
	}
	var oldLength = caselle.length+1;
	while (caselle.length > 0 && oldLength != caselle.length){
		oldLength = caselle.length;
		for (var j=caselle.length-1; j>=0; j--){
			var casella = caselle[j];
			for (var i=0; i<filtrate.length; i++){
				var temp = filtrate[i];
				if (isAdiacente(casella, temp) && !isMuro(casella) && isVisibile(casella)){
					filtrate.push(casella);
					caselle.splice(j,1);
					fattoQualcosa = true;
					break;
				}
			}
		}
	}	
	return filtrate;	
}
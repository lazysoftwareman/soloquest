//EVENTI VARI

function esegui(bottone){
	if (bottone.testo){
		popuppa(bottone.testo);
	}
	if (bottone.azione) {
		eval (bottone.azione);
	}
}

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
	if (automatico || !porta.blocco){
		apriEffettivamentePorta(porta, automatico);
	} else {
		if (confirm(porta.blocco.testo)){
			apriEffettivamentePorta(porta, automatico);
		}
	}
}

function apriEffettivamentePorta(porta, automatico){
	var casPorta = getCaselle(porta.caselle.da, porta.caselle.a);
	if (porta.vis1.da){
		rendiVisibileSpread (casPorta, porta.vis1.da, porta.vis1.a);
	} else {
		rendiVisibileSpread (casPorta, porta.vis1);
	}
	if (porta.vis2.da){
		rendiVisibileSpread (casPorta, porta.vis2.da, porta.vis2.a);
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
	if (visib.vis1.da){
		rendiVisibileSpread (visib.casella, visib.vis1.da, visib.vis1.a);
	} else {
		rendiVisibileSpread (visib.casella, visib.vis1);
	}
	if (visib.vis2.da){
		rendiVisibileSpread (visib.casella, visib.vis2.da, visib.vis2.a);
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

function mostraMenuStanza(evento, x, y){
	var azioneInfo = trovaAzione(evento, "Info");
	var azioneRicerca = trovaAzione(evento, "Ricerca");
	var azioneRicercaPS = trovaAzione(evento, "RicercaPS");
	var elemento = {
		"azioni": [azioneInfo,azioneRicerca,azioneRicercaPS]
	}
	mostraBottoni (elemento, x, y);
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
	var figli = document.getElementById("risultato").childNodes;
	var divContainer = figli[1];
	for (var i = 0; i < figli.length; i++) {
		if (figli[i].className && figli[i].className == "mostroContainer"){
			divContainer = figli[i];
			break;
		}
	}
	var contenuti = divContainer.childNodes;
	for (i = 0; i < contenuti.length; i++) {
		if (contenuti[i].id){
			contenuti[i].removeAttribute("id");
		}
	}
}
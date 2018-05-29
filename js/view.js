//GESTIONE VISIBILITA

function rendiVisibileStart(){
	if (dati.start.caselle){
		rendiVisibile(dati.start.caselle.da, dati.start.caselle.a);
	} else {
		rendiVisibile(dati.start.stanza);
	}
	visualizzaScale(dati.start.scale);
}

function rendiVisibile(daOStanza, a){
	if (!a){
		rendiVisibileStanza(daOStanza);
	} else {
		var caselle = getCaselle(daOStanza, a);
		visualizzaContenuto(caselle, false);
	}
}

function rendiVisibileSpread(origine, daOStanza, a){
	if (!a){
		rendiVisibileStanza(daOStanza, origine);
	} else {
		var caselle = getCaselle(daOStanza, a);
		visualizzaContenuto(caselle, false, origine);
	}
}

function rendiVisibileStanza(stanza, origine){
	var caselle = zone[stanza];
	visualizzaContenuto(caselle, true, origine);
}

function rendiVisibileTutto(){
	var porte = dati.porte;
	for (var i=0; i<porte.length; i++){
		apriPorta(porte[i], true);
	}
	var porteSegrete = dati.porteSegrete;
	if (porteSegrete){
		for (var i=0; i<porteSegrete.length; i++){
			apriPorta(porteSegrete[i], true);
		}
	}
	var visibilita = dati.visibilita;
	if (visibilita){
		for (var i=0; i<visibilita.length; i++){
			apriVisibilita(visibilita[i], true);
		}
	}
}

function visualizzaContenuto (original, isStanza, sorgente){	
	var caselle = original;
	var angolino = caselle[0];
	if (sorgente){
		caselle = riordinaCaselle (sorgente, original);
	}
	dCell = document.getElementById("a1").offsetWidth;
	var casPorte = trovaCasellePorte();
	var casMobili = trovaCaselleMobili();
	var casMostri = trovaCaselleMostri();
	var casMuri = trovaCaselleMuri();
	var casVisibilita = trovaCaselleVisibilita();
	var casEventi = trovaCaselleEventi();
	var stanza = isStanza? trovaStanza(angolino): "corridoio";
	visualizzaCaselleRec (casPorte, casMobili, casMostri, casMuri, casVisibilita, casEventi, stanza, caselle, 0, isStanza);
	if (isStanza && stanzeViste.indexOf(stanza) < 0){
		visualizzaAzioniStanza(angolino, stanza);
		stanzeViste.push(stanza);
	}
}

function visualizzaCaselleRec (casPorte, casMobili, casMostri, casMuri, casVisibilita, casEventi, stanza, caselle, i, isStanza) {
	if (i<caselle.length){
		var casella = caselle[i];
		if (caselleViste.indexOf(casella) < 0){
			viewCell(document.getElementById(casella), colori[stanza]);			
			//document.getElementById(casella).style.backgroundColor = colori[stanza];
			//porte
			if (casPorte.indexOf(casella) >= 0){
				visualizzaPorta (trovaPortaInCasella(casella));
			}
			//mobili
			if (casMobili.indexOf(casella) >= 0){
				visualizzaMobile (trovaMobileInCasella(casella));
			}
			//mostri
			if (casMostri.indexOf(casella) >= 0){
				visualizzaMostro (trovaMostroInCasella(casella), casella);
			}
			//muri
			if (casMuri.indexOf(casella) >= 0){
				visualizzaMuro (trovaMuroInCasella(casella), casella);
			}
			//visibilita
			if (casVisibilita.indexOf(casella) >= 0){
				visualizzaVisibilita (trovaVisibilitaInCasella(casella));
			}
			//eventi
			if (!isStanza){
				if (casEventi.indexOf(casella) >= 0){
					visualizzaEvento (trovaEventoInCasella(casella));
				}
			}
			caselleViste.push(casella);
		}
		setTimeout(function() {
			visualizzaCaselleRec (casPorte, casMobili, casMostri, casMuri, casVisibilita, casEventi, stanza, caselle, i+1, isStanza);
		}, 50)
	}
}

function trovaStanza(casella){
	for (key in zone) {
		if (zone[key].indexOf(casella) >= 0) {
			return key;
		}
	}
}

function getZona(casella){
	for (key in zone) {
		if (zone[key].indexOf(casella) >= 0) {
			return key;
		}
	}
}

function trovaCasellePorte() {
	var porte = dati.porte;
	var casPorte = [];
	for (var i=0; i<porte.length; i++){
		casPorte.push(porte[i].caselle.da);
		casPorte.push(porte[i].caselle.a);
	}
	return casPorte;
}

function trovaCasellePorteSegrete() {
	var porte = dati.porteSegrete;
	var casPorte = [];
	for (var i=0; i<porte.length; i++){
		casPorte.push(porte[i].caselle.da);
		casPorte.push(porte[i].caselle.a);
	}
	return casPorte;
}

function trovaCaselleMobili() {
	var mobili = dati.mobili;
	var casMobili = [];
	for (var i=0; i<mobili.length; i++){
		casMobili.push(mobili[i].caselle.da);
		casMobili.push(mobili[i].caselle.a);
	}
	return casMobili;
}

function trovaCaselleMostri() {
	var mostri = dati.mostri;
	var casMostri = [];
	for (var i=0; i<mostri.length; i++){
		casMostri = casMostri.concat(mostri[i].caselle);
	}
	return casMostri;
}

function trovaCaselleMuri() {
	var muri = dati.muri;
	var casMuri = [];
	for (var i=0; i<muri.length; i++){
		casMuri = casMuri.concat(muri[i].caselle);
	}
	return casMuri;
}

function trovaCaselleVisibilita() {
	var vis = dati.visibilita;
	var casVis = [];
	for (var i=0; i<vis.length; i++){
		casVis.push(vis[i].casella);
	}
	return casVis;
}

function trovaCaselleEventi() {
	var eventi = dati.eventi;
	var casEventi = [];
	for (var i=0; i<eventi.length; i++){
		casEventi.push(eventi[i].casella);
	}
	return casEventi;
}

function trovaPortaInCasella(casella){
	var porte = dati.porte;
	for (var i=0; i<porte.length; i++){
		if (casella == porte[i].caselle.da || casella == porte[i].caselle.a) {
			return porte[i];
		}
	}
}

function trovaMobileInCasella(casella){
	var mobili = dati.mobili;	
	for (var i=0; i<mobili.length; i++){
		var casMobili = getCaselle(mobili[i].caselle.da, mobili[i].caselle.a);
		if (casMobili.indexOf(casella) >=0) {
			return mobili[i];
		}
	}
}

function trovaMostroInCasella(casella){
	var mostri = dati.mostri;	
	for (var i=0; i<mostri.length; i++){
		var casMostri = mostri[i].caselle;
		if (casMostri.indexOf(casella) >=0) {
			return mostri[i];
		}
	}
}

function trovaMuroInCasella(casella){
	var muri = dati.muri;	
	for (var i=0; i<muri.length; i++){
		var casMuri = muri[i].caselle;
		if (casMuri.indexOf(casella) >=0) {
			return muri[i];
		}
	}
}

function trovaVisibilitaInCasella(casella){
	var vis = dati.visibilita;	
	for (var i=0; i<vis.length; i++){
		if (vis[i].casella == casella) {
			return vis[i];
		}
	}
}

function trovaEventoInCasella(casella){
	var eventi = dati.eventi;	
	for (var i=0; i<eventi.length; i++){
		if (eventi[i].casella && eventi[i].casella == casella) {
			return eventi[i];
		}
	}
}

function trovaEventoInStanza(stanza){
	var eventi = dati.eventi;	
	for (var i=0; i<eventi.length; i++){
		if (eventi[i].stanza && eventi[i].stanza == stanza) {
			return eventi[i];
		}
	}
}

function trovaPortaSegretaInCasella (casella){
	var porte = dati.porteSegrete;
	for (var i=0; i<porte.length; i++){
		if (casella == porte[i].caselle.da || casella == porte[i].caselle.a) {
			return porte[i];
		}
	}
}

function visualizzaPorta (porta) {
	var cas1 = porta.caselle.da;
	var cas2 = porta.caselle.a;
	var orizzontale = !isOrizzontale(cas1, cas2);
	var offsetPorta = dCel/2;
	const width = dCel;
	const height = dCel;
	const src = orizzontale? "portaO" : "portaV";
	var casella = document.getElementById(cas1);
	if (casella){
	} else {
		casella = document.getElementById(cas2);
		offsetPorta = -dCel/2;
	}
	var img = posizionaImmagine(src, width, height, casella);
	img.title = "Apri la porta";
	img.style.cursor = "pointer";
	if (orizzontale){
		img.style.marginTop = offsetPorta + "px";
	} else {
		img.style.marginLeft = offsetPorta + "px";
	}
	img.onclick = function(){
		apriPorta(porta);
	};
}

function visualizzaPortaSegreta (porta) {
	var cas1 = porta.caselle.da;
	var cas2 = porta.caselle.a;
	var posizione = porta.posizione;
	var orizzontale = isOrizzontale(cas1, cas2);
	var casella = orizzontale && posizione == "O" ? cas1 : orizzontale && posizione == "E" ? cas2 : !orizzontale && posizione == "N" ? cas1 : !orizzontale && posizione == "S" ? cas2 : cas1;
	const width = dCel;
	const height = dCel;
	const src = "portaSegreta" + posizione;
	img = posizionaImmagine(src, width, height, document.getElementById(casella));
	img.title = "Apri la porta";
	img.style.cursor = "pointer";
	img.onclick = function(){
		apriPorta(porta);
	};
}

function visualizzaMobile (mobile) {
	var cas1 = mobile.caselle.da;
	var nCasO = getNumeroCaselleOrizzontali(mobile.caselle.da, mobile.caselle.a);
	var nCasV = getNumeroCaselleVerticali(mobile.caselle.da, mobile.caselle.a);
	const src = mobile.tipo + mobile.posizione;
	const height = nCasV*dCel-4;
	const width = nCasO*dCel-4;
	var immagine = posizionaImmagine(src, width, height, document.getElementById(cas1));	
	immagine.style.marginLeft = "1px";
	immagine.style.marginTop = "1px";
}

function visualizzaMostro (mostro, casella) {
	const width = dCel-4;
	const height = dCel-4;
	const src = mostro.tipo == 'png' ? 'magoCaos' : mostro.tipo;
	if (mostro.tipo == 'png'){
		mostri ["png"] = {
			"tipo" : "png",
			"nome" : mostro.nome,
			"movimento" : mostro.movimento,
			"attacco" : mostro.attacco,
			"difesa" : mostro.difesa,
			"corpo" : mostro.corpo,
			"mente" : mostro.mente,
			"comportamento" : mostro.comportamento
		};
	}
	var immagine = posizionaImmagine(src, width, height, document.getElementById(casella));	
	immagine.style.marginLeft = "1px";
	immagine.style.marginTop = "1px";
	immagine.id = "mostro"+casella;
	immagine.onclick = function(event){
		var x = event.clientX;
		var y = event.clientY;
		mostraMenuMostro(mostro, "mostro"+casella, x, y);
		event.stopPropagation();
	};
}

function visualizzaMuro (muro, casella) {
	const doppio = muro.doppio;
	var immagine = null;
	if (doppio){
		var cas1 = muro.caselle[0];
		var cas2 = muro.caselle[1];
		var orizzontale = isOrizzontale(cas1, cas2);
		const wMuro = dCel*2-2;
		const hMuro = dCel-2;
		const width = orizzontale? wMuro: hMuro;
		const height = orizzontale? hMuro : wMuro;
		const src = orizzontale? "muroO" : "muroV";
		immagine = posizionaImmagine(src, width, height, document.getElementById(cas1));
	} else {
		const width = dCel;
		const height = dCel;
		const src = "muro";
		immagine = posizionaImmagine(src, width, height, document.getElementById(casella));
	}	
}

function visualizzaEvento (evento) {
	const cella = document.getElementById(evento.casella);
	cella.style.backgroundColor = "#d70000";
	cella.style.cursor = "pointer";
	cella.innerHTML = evento.lettera;
	cella.onclick = function(event){
		var x = event.clientX;
		var y = event.clientY;
		mostraBottoni(evento, x, y);
		event.stopPropagation();
	};
}

function visualizzaVisibilita (visibilita) {
	const casella = visibilita.casella;
	const cella = document.getElementById(casella);
	cella.title = "Clicca per mostrare cosa vede l'eroe";
	cella.style.cursor = "pointer";
	cella.style.backgroundColor = "rgba(238, 184, 0, 0.5)";
	cella.onclick = function(){
		apriVisibilita(visibilita);
	};
}

function visualizzaScale (scale) {
	var cas1 = scale.caselle.da;
	const src = "scale" + scale.posizione;
	const height = 2*dCel-2;
	const width = 2*dCel-2;
	posizionaImmagine(src, width, height, document.getElementById(cas1));
	
}

function visualizzaAzioniStanza (casella, stanza){
	const src = "menuStanza";
	const height = dCel*0.6;
	const width = dCel*0.6;
	const immagine = posizionaImmagine (src, width, height, document.getElementById(casella));	
	immagine.style.marginLeft = "-"+dB2+"px";
	immagine.style.marginTop = "-"+dB2+"px";
	immagine.style.zIndex = 10;
	immagine.style.cursor = "pointer";
	immagine.onclick = function(event){
		var x = event.clientX;
		var y = event.clientY;
		mostraMenuStanza(stanza, x, y);
		event.stopPropagation();
	};
}

function posizionaImmagine(fileName, width, height, td){
	var immagine = document.createElement("img");
	immagine.src = "img/" + fileName + ".png";
	immagine.style.height = "" + height + "px";
	immagine.style.width = "" + width + "px";
	immagine.style.position = "absolute";
	if (td.innerHTML == "&nbsp;"){
		td.innerHTML = "";
	}
	td.style.textAlign = "left";
	td.style.verticalAlign = "top";
	td.appendChild(immagine);
	return immagine;
}

function rendiVisibileMinimap(azione) {
	//azione può essere "ricercaTesoro" o "ricercaPorteSegrete"
	for (var i=0; i<caselleViste.length; i++){
		var cas = caselleViste[i];
		if (!isMuro(cas)){
			rendiVisibileMini(cas, azione);
		}
	}
}

function isMuro(casella) {
	return trovaMuroInCasella(casella);
}

function rendiVisibileMini(casella, azione) {
	const stanza = trovaStanza(casella);
	const miniCas = "mini"+casella;
	const miniCell = document.getElementById(miniCas);
	const colore = colori[stanza]? colori[stanza]: "rgba(255,255,255,0.3)";
	miniCell.style.backgroundColor = colore;
	miniCell.style.cursor = "pointer";
	miniCell.onclick = function(){
		eval(azione+"('"+casella+"')");
	};
}

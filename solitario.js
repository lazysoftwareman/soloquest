
//orizz: 26; vert: 19;
//Da a1 a s26

var dCel = 30;
var dB1 = 1;
var dB2 = 3;

const avventure = [];
avventure.push ("LaProva");
avventure.push ("SirRagnar");
avventure.push ("CapoguerraOrco");

const stanze = [];
stanze['c'] = getCaselle('h11', 'l16');
stanze['no1'] = getCaselle('b2', 'd5');
stanze['no2'] = getCaselle('b6', 'd9');
stanze['no3'] = getCaselle('b10', 'f12');
stanze['no4'] = getCaselle('e6', 'i9');
stanze['no5'] = getCaselle('e2', 'i5');
stanze['ne1'] = getCaselle('b15', 'f17');
stanze['ne2'] = getCaselle('b18', 'e21');
stanze['ne3'] = getCaselle('b22', 'e25');
stanze['ne4'] = getCaselle('f22', 'i25');
stanze['ne5'] = getCaselle('f18', 'i21');
stanze['se1'] = getCaselle('k18', 'm21');
stanze['se1'].push('n19');
stanze['se1'].push('n20');
stanze['se1'].push('n21');
stanze['se2'] = getCaselle('k22', 'n25');
stanze['se3'] = getCaselle('o22', 'r25');
stanze['se4'] = getCaselle('o19', 'r21');
stanze['se5'] = getCaselle('n15', 'r18');
stanze['so1'] = getCaselle('k2', 'n5');
stanze['so2'] = getCaselle('k6', 'm7');
stanze['so3'] = getCaselle('k8', 'm9');
stanze['so4'] = getCaselle('n10', 'r12');
stanze['so5'] = getCaselle('n6', 'r9');
stanze['so6'] = getCaselle('o2', 'r5');

var colori = [];
colori['corridoio'] = "rgba(255,255,255,0.5)";
colori['c'] = "rgba(69,54,47,0.5)";
colori['no1'] = "rgba(97,67,43,0.5)";
colori['no2'] = "rgba(125,58,50,0.5)";
colori['no3'] = "rgba(81,107,96,0.5)";
colori['no4'] = "rgba(122,125,67,0.5)";
colori['no5'] = "rgba(74,74,73,0.5)";
colori['ne1'] = "rgba(123,64,49,0.5)";
colori['ne2'] = "rgba(146,144,154,0.5)";
colori['ne3'] = "rgba(144,106,59,0.5)";
colori['ne4'] = "rgba(140,129,68,0.5)";
colori['ne5'] = "rgba(129,93,41,0.5)";
colori['se1'] = "rgba(124,124,127,0.5)";
colori['se2'] = "rgba(147,123,55,0.5)";
colori['se3'] = "rgba(96,117,60,0.5)";
colori['se4'] = "rgba(137,101,64,0.5)";
colori['se5'] = "rgba(120,85,74,0.5)";
colori['so1'] = "rgba(146,126,66,0.5)";
colori['so2'] = "rgba(100,123,122,0.5)";
colori['so3'] = "rgba(100,123,122,0.5)";
colori['so4'] = "rgba(136,111,59,0.5)";
colori['so5'] = "rgba(126,68,48,0.5)";
colori['so6'] = "rgba(100,104,109,0.5)";

const caselleViste = [];
const stanzeViste = [];

var labelStandard = [];
labelStandard['Ricerca'] = "Ricerca tesoro";
labelStandard['RicercaPS'] = "Ricerca porte segrete";
labelStandard['Info'] = "Informazioni";

var testiStandard = [];
testiStandard['Ricerca'] = "Pesca una carta tesoro";
testiStandard['RicercaPS'] = "Nessuna porta segreta nella stanza";
testiStandard['Info'] = "Niente attira particolarmente la vostra attenzione";

function getJsonAvventure() {
	for (var i=0; i<avventure.length; i++){
		if (avventure[i] != "Template"){
			var imported = document.createElement('script');
			imported.src = "avventure/"+avventure[i]+".js";
			document.head.appendChild(imported);
		}
	}
}

function getDatiAvventura() {
    var vars = [], hash;
    avventura = window.location.href.slice(window.location.href.indexOf('#') + 1);
	dati = eval ("dati" + avventura);
}

function popuppa(risultato){
	const popup = document.getElementById('risultato');
	popup.style.display = "none";
	popup.style.position = "absolute";	
	popup.innerHTML = "";
    popup.style.top = "30vh";
    popup.style.left = "15vw";
	//popup.style.display = "block";
	popup.style.zIndex = 30;
	rallentaMostraPopup(popup, risultato);
}

function stampArray(array){
	var stringa = "";
	for (var j=0; j<array.length; j++){
		stringa = stringa + array[j] + " ";
	}
	return stringa;
}

// Close the dropdown if the user clicks outside of it
 /*window.onclick = function(event) {
	if (!event.target.matches('.popupMenu')) {
		const menu = document.getElementById("popupMenu");
		if (menu && menu.style.display == "block"){
			menu.style.display = "none";
		}
	}
	if (!event.target.matches('.risultato')) {
		const popup = document.getElementById("risultato");
		if (popup && popup.style.display == "block"){
			popup.style.display = "none";
		}
	}
}*/
window.addEventListener("click", chiudiPoppuppi);
window.addEventListener("touchend", chiudiPoppuppi);

function chiudiPoppuppi(event) {
	if (!event.target.matches('.popupMenu')) {
		const menu = document.getElementById("popupMenu");
		if (menu && menu.style.display == "block"){
			menu.style.display = "none";
		}
	}
	if (!event.target.matches('.risultato')) {
		const popup = document.getElementById("risultato");
		if (popup && popup.style.display == "block"){
			popup.style.display = "none";
		}
	}
}

function getLettera(casella){
	return casella.substring(0, 1);
}

function getNumero(casella){
	return casella.substring(1, casella.length);
}

function getNumeroNumero(casella) {
	return parseInt(getNumero(casella));
}

function getCaselle(da, a) {
	var result = [];
	for (var j=getLettera(da).charCodeAt(0); j<=getLettera(a).charCodeAt(0); j++){
		for (var i=getNumeroNumero(da); i<=getNumeroNumero(a); i++){
			result.push("" + String.fromCharCode(j) + i);
		}
	}
	return result;
}

function getNumeroCaselleOrizzontali(da, a){	
	var n1 = getNumero(da);
	var n2 = getNumero(a);
	return n2-n1+1;
}

function getNumeroCaselleVerticali(da, a){	
	var n1 = getLettera(da).charCodeAt(0)
	var n2 = getLettera(a).charCodeAt(0)
	return n2-n1+1;
}

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
	var caselle = stanze[stanza];
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
			apriPorta(visibilita[i], true);
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
		visualizzaAzioniStanza(angolino, trovaEventoInStanza(stanza));
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

function trovaStanza(primaCasella){
	for (key in stanze) {
		if (stanze[key][0] == primaCasella) {
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

function visualizzaPorta (porta) {
	var cas1 = porta.caselle.da;
	var cas2 = porta.caselle.a;
	var orizzontale = !isOrizzontale(cas1, cas2);
	const offsetPorta = dCel/2;
	const width = dCel;
	const height = dCel;
	const src = orizzontale? "portaO" : "portaV";
	img = posizionaImmagine(src, width, height, document.getElementById(cas1));
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

function apriPorta(porta, automatico){
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

function trovaPortaSegretaInCasella (casella){
	var porte = dati.porteSegrete;
	for (var i=0; i<porte.length; i++){
		if (casella == porte[i].caselle.da || casella == porte[i].caselle.a) {
			return porte[i];
		}
	}
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

function isOrizzontale(da, a) {
	return getLettera(da) == getLettera(a);
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
	const src = mostro.tipo;
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

function visualizzaAzioniStanza (casella, evento){
	const src = "menuStanza";
	const height = dCel/2;
	const width = dCel/2;
	const immagine = posizionaImmagine (src, width, height, document.getElementById(casella));	
	immagine.style.marginLeft = "-"+dB2+"px";
	immagine.style.marginTop = "-"+dB2+"px";
	immagine.style.zIndex = 10;
	immagine.style.cursor = "pointer";
	immagine.onclick = function(event){
		var x = event.clientX;
		var y = event.clientY;
		mostraMenuStanza(evento, x, y);
		event.stopPropagation();
	};
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
	var contenuti = document.getElementById("risultato").childNodes;
	for (i = 0; i < contenuti.length; i++) {
		if (contenuti[i].id){
			contenuti[i].removeAttribute("id");
		}
	}
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

function mostraBottoni(elemento, x, y) {
	const bottoni = elemento.azioni;
	const menu = document.getElementById("popupMenu");
	menu.innerHTML = "";
	for (var i=0; i<bottoni.length; i++){
		const bottone = bottoni[i];
		var span = document.createElement("span");
		span.onclick = function(){
			esegui(bottone);
		}
		span.innerHTML = bottone.label;
		menu.appendChild (span);
	}
	menu.style.position = "absolute";
	menu.style.display = "block";	
    posizionaMenu(menu, x, y);
	menu.style.zIndex = 20;
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

function esegui(bottone){
	if (bottone.testo){
		popuppa(bottone.testo);
	}
	if (bottone.azione) {
		eval (bottone.azione);
	}
}



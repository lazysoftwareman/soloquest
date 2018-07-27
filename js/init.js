//INIZIALIZZAZIONI E FUNZIONI DI BASE

//orizz: 26; vert: 19;
//Da a1 a s26

var dCel = 30;
var dB1 = 1;
var dB2 = 3;

const avventure = [];
avventure.push ("LibroProfezie");
//avventure.push ("LaProva");
avventure.push ("SirRagnar");
avventure.push ("CapoguerraOrco");

const zone = [];
zone['c'] = getCaselle('h11', 'l16');
zone['no1'] = getCaselle('b2', 'd5');
zone['no2'] = getCaselle('b6', 'd9');
zone['no3'] = getCaselle('b10', 'f12');
zone['no4'] = getCaselle('e6', 'i9');
zone['no5'] = getCaselle('e2', 'i5');
zone['ne1'] = getCaselle('b15', 'f17');
zone['ne2'] = getCaselle('b18', 'e21');
zone['ne3'] = getCaselle('b22', 'e25');
zone['ne4'] = getCaselle('f22', 'i25');
zone['ne5'] = getCaselle('f18', 'i21');
zone['se1'] = getCaselle('k18', 'm21');
zone['se1'].push('n19');
zone['se1'].push('n20');
zone['se1'].push('n21');
zone['se2'] = getCaselle('k22', 'n25');
zone['se3'] = getCaselle('o22', 'r25');
zone['se4'] = getCaselle('o19', 'r21');
zone['se5'] = getCaselle('n15', 'r18');
zone['so1'] = getCaselle('k2', 'n5');
zone['so2'] = getCaselle('k6', 'm7');
zone['so3'] = getCaselle('k8', 'm9');
zone['so4'] = getCaselle('n10', 'r12');
zone['so5'] = getCaselle('n6', 'r9');
zone['so6'] = getCaselle('o2', 'r5');
zone['cin'] = getCaselle('g10', 'g17');
zone['cio'] = getCaselle('g10', 'm10');
zone['cie'] = getCaselle('g17', 'm17');
zone['cis'] = getCaselle('m10', 'm17');
zone['cmn'] = getCaselle('a13', 'g14');
zone['cmo'] = getCaselle('j1', 'j10');
zone['cme'] = getCaselle('j17', 'j26');
zone['cms'] = getCaselle('m13', 's14');
zone['cen'] = getCaselle('a1', 'a26');
zone['ceo'] = getCaselle('a1', 's1');
zone['cee'] = getCaselle('a26', 's26');
zone['ces'] = getCaselle('s1', 's26');

var colori = [];
colori['corridoio'] = "rgba(255,255,255,0.3)";
colori['c'] = "rgba(69,54,47,0.3)";
colori['no1'] = "rgba(97,67,43,0.3)";
colori['no2'] = "rgba(125,58,50,0.3)";
colori['no3'] = "rgba(81,107,96,0.3)";
colori['no4'] = "rgba(122,125,67,0.3)";
colori['no5'] = "rgba(74,74,73,0.3)";
colori['ne1'] = "rgba(123,64,49,0.3)";
colori['ne2'] = "rgba(146,144,154,0.3)";
colori['ne3'] = "rgba(144,106,59,0.3)";
colori['ne4'] = "rgba(140,129,68,0.3)";
colori['ne5'] = "rgba(129,93,41,0.3)";
colori['se1'] = "rgba(124,124,127,0.3)";
colori['se2'] = "rgba(147,123,55,0.3)";
colori['se3'] = "rgba(96,117,60,0.3)";
colori['se4'] = "rgba(137,101,64,0.3)";
colori['se5'] = "rgba(120,85,74,0.3)";
colori['so1'] = "rgba(146,126,66,0.3)";
colori['so2'] = "rgba(100,123,122,0.3)";
colori['so3'] = "rgba(100,123,122,0.3)";
colori['so4'] = "rgba(136,111,59,0.3)";
colori['so5'] = "rgba(126,68,48,0.3)";
colori['so6'] = "rgba(100,104,109,0.3)";

const caselleViste = [];
const stanzeViste = [];

var labelStandard = [];
labelStandard['Ricerca'] = "Ricerca tesoro";
labelStandard['RicercaPS'] = "Ricerca porte segrete";
labelStandard['Info'] = "Informazioni";

var testiStandard = [];
testiStandard['Ricerca'] = "Pesca una carta tesoro";
testiStandard['RicercaPS'] = "Nessuna porta segreta trovata";
testiStandard['RicercaPSOK'] = "Avete trovato una porta segreta!";
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

function isOrizzontale(da, a) {
	return getLettera(da) == getLettera(a);
}

function getDa(caselle) {
	if (typeof a_string === 'string') {    
		if (caselle.indexOf('-') > 0) {
			const sep = caselle.indexOf('-');
			return caselle.substring(0, sep);
		} else {
			return caselle;
		}
	} else {
		return caselle.da;
	}
}

function getA(caselle) {
	if (typeof a_string === 'string') {    
		if (caselle.indexOf('-') > 0) {
			const sep = caselle.indexOf('-');
			return caselle.substring(sep+1, caselle.length);
		} else {
			return caselle;
		}
	} else {
		return caselle.a;
	}
}
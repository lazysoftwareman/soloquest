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
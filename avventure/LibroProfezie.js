var datiLibroProfezie = {
	"nome": "Il libro delle profezie",
	"mostroErrante": "goblin",
	"testo": "Benvenuti miei eroi. Dopo quasi trent'anni di silenzio dal mondo del caos, ho ancora bisogno di voi. " +
	"Da qualche tempo oscure presenze accrescono il loro potere con eventi nefasti sempre più frequenti. Fino a colpire " +
	"anche me, portandomi via il Libro delle Profezie. Dopo qualche indagine è stato trovato in una roccaforte, ben protetta " +
	"da tre luogotenenti di Morcar. Riportatemelo, miei eroi, e avrete 300 MO di ricompensa.",
	"start": {
		"stanza": "no3",
		"scale": { //dove sono posizionate e come sono orientale le scale, se ci sono, quindi non obbligatorio
			"posizione": "S", //obbligatorio
			"caselle": {"da": "b11", "a": "c12"} //obbligatorio
			}
	},
	"mobili" : [
	{
		"tipo": "tavolo",
		"posizione": "V",
		"caselle": {"da": "c23", "a": "e24"}
	},
	{
		"tipo": "tavolo",
		"posizione": "V",
		"caselle": {"da": "o23", "a": "q24"}
	},
	{
		"tipo": "libreria",
		"posizione": "O",
		"caselle": {"da": "b15", "a": "b17"}
	},
	{
		"tipo": "scrigno",
		"posizione": "O",
		"caselle": {"da": "b5", "a": "b5"}
	},
	{
		"tipo": "scrigno",
		"posizione": "V",
		"caselle": {"da": "p6", "a": "p6"}
	},
	{
		"tipo": "libreria",
		"posizione": "V",
		"caselle": {"da": "k6", "a": "m6"}
	},
	{
		"tipo": "armadio",
		"posizione": "O",
		"caselle": {"da": "n10", "a": "n12"}
	},
	{
		"tipo": "rastrelliera",
		"posizione": "N",
		"caselle": {"da": "r2", "a": "r4"}
	},
	{
		"tipo": "tortura",
		"posizione": "N",
		"caselle": {"da": "f3", "a": "h4"}
	},
	{
		"tipo": "alchimista",
		"posizione": "E",
		"caselle": {"da": "n15", "a": "p17"}
	},
	{
		"tipo": "camino",
		"posizione": "N",
		"caselle": {"da": "r16", "a": "r18"}
	}
	],
	"porte" : [
	{
		"caselle": {"da": "d17", "a": "d18"},
		"vis1": "ne1",
		"vis2": "ne2",
		"blocco": {"testo":"La porta è bloccata. Per entrare avete bisogno della chiave Rossa. Ce l'avete?"}
	},
	{
		"caselle": {"da": "e9", "a": "e10"},
		"vis1": "no3",
		"vis2": "no4"
	},
	{
		"caselle": {"da": "e22", "a": "f22"},
		"vis1": "ne3",
		"vis2": "ne4"
	},
	{
		"caselle": {"da": "g5", "a": "g6"},
		"vis1": "no4",
		"vis2": "no5"
	},
	{
		"caselle": {"da": "g9", "a": "g10"},
		"vis1": "no4",
		"vis2": {"da": "g10", "a": "g15"}
	},
	{
		"caselle": {"da": "g21", "a": "g22"},
		"vis1": "ne4",
		"vis2": "ne5"
	},
	{
		"caselle": {"da": "j3", "a": "k3"},
		"vis1": "so1",
		"vis2": {"da": "j1", "a": "j10"}
	},
	{
		"caselle": {"da": "j7", "a": "k7"},
		"vis1": "so2",
		"vis2": {"da": "j1", "a": "j10"}
	},
	{
		"caselle": {"da": "l25", "a": "l26"},
		"vis1": "se2",
		"vis2": {"da": "a26", "a": "r26"}
	},
	{
		"caselle": {"da": "m7", "a": "m8"},
		"vis1": "so2",
		"vis2": "so3"
	},
	{
		"caselle": {"da": "m9", "a": "n9"},
		"vis1": "so3",
		"vis2": "so5",
		"blocco": {"testo":"La porta è bloccata. Per entrare avete bisogno della chiave Gialla. Ce l'avete?"}
	},
	{
		"caselle": {"da": "m18", "a": "n18"},
		"vis1": "se1",
		"vis2": "se5",
		"blocco": {"testo":"La porta è bloccata. Per entrare avete bisogno della chiave Blu. Ce l'avete?"}
	},
	{
		"caselle": {"da": "n4", "a": "o4"},
		"vis1": "so1",
		"vis2": "so6"
	},
	{
		"caselle": {"da": "p21", "a": "p22"},
		"vis1": "se3",
		"vis2": "se4"
	},
	{
		"caselle": {"da": "p25", "a": "p26"},
		"vis1": "se3",
		"vis2": {"da": "a26", "a": "r26"}
	},
	{
		"caselle": {"da": "a22", "a": "b22"},
		"vis1": "ne3",
		"vis2": {"da": "a21", "a": "a26"}
	},
	{
		"caselle": {"da": "r12", "a": "s12"},
		"vis1": "so4",
		"vis2": {"da": "s1", "a": "s26"}
	}
	],
	"porteSegrete" : [
	{
		"caselle": {"da": "d4", "a": "e4"},
		"posizione": "N",
		"vis1": "no1",
		"vis2": "no5"
	},
	{
		"caselle": {"da": "e20", "a": "f20"},
		"posizione": "S",
		"vis1": "ne2",
		"vis2": "ne5"
	},
	{
		"caselle": {"da": "n19", "a": "o19"},
		"posizione": "N",
		"vis1": "se1",
		"vis2": "se4"
	}
	],
	"mostri" : [
	{
		"tipo": "fimir",
		"testoUcciso": "Il mostro lascia cadere una chiave Gialla",
		"caselle": ["b22"] 
	},
	//{
	//	"tipo": "fimir",
	//	"caselle": ["f6"] 
	//},
	{
		"tipo": "goblin",
		"caselle": ["m20", "n21", "d18", "e19"]
	},
	{
		"tipo": "orco",
		"caselle": ["l9", "o18", "e4"]
	},
	{
		"tipo": "scheletro",
		"caselle": ["o6", "g8", "g20", "r24"]
	},
	{
		"tipo": "zombie",
		"caselle": ["p7", "g23"]
	},
	{
		"tipo": "mummia",
		"caselle": ["e17", "p4"]
	},
	{
		"tipo": "guerrieroCaos",
		"testoUcciso": "Il mostro lascia cadere una chiave Blu",
		"caselle": ["m7"]
	}	,
	{
		"tipo": "gargoyle",
		"testoUcciso": "Il mostro lascia cadere una chiave Rossa",
		"caselle": ["b2"]
	}
	],
	"muri" : [
	{
		"doppio": true, //obbligatorio
		"caselle": ["p13", "p14"] //se doppio le caselle indicano la posizione del muro, obbligatorio
	},
	{
		"doppio": false,
		"caselle": ["a21", "r26", "g15", "i10"] //se non doppio le caselle indicano le posizioni, obbligatorio
	}	
	],
	"visibilita" : [
	{
		"casella": "a1",
		"vis1": {"da": "a1", "a": "a21"},
		"vis2": {"da": "a1", "a": "s1"}
	},
	{
		"casella": "a13",
		"vis1": {"da": "a1", "a": "a21"},
		"vis2": {"da": "b13", "a": "g14"}
	},
	{
		"casella": "a14",
		"vis1": {"da": "a1", "a": "a21"},
		"vis2": {"da": "b13", "a": "g14"}
	},
	{
		"casella": "g13",
		"vis1": {"da": "a13", "a": "g14"},
		"vis2": {"da": "g10", "a": "g15"}
	},
	{
		"casella": "g14",
		"vis1": {"da": "a13", "a": "g14"},
		"vis2": {"da": "g10", "a": "g15"}
	},
	{
		"casella": "g10",
		"vis1": {"da": "g10", "a": "g15"},
		"vis2": {"da": "g10", "a": "i10"}
	},
	{
		"casella": "j1",
		"vis1": {"da": "a1", "a": "s1"},
		"vis2": {"da": "j1", "a": "j10"}
	},
	{
		"casella": "j10",
		"vis1": {"da": "j1", "a": "j10"},
		"vis2": {"da": "i10", "a": "m10"}
	},
	{
		"casella": "g17",
		"vis1": {"da": "g15", "a": "g17"},
		"vis2": {"da": "g17", "a": "m17"}
	},
	{
		"casella": "j17",
		"vis1": {"da": "g17", "a": "m17"},
		"vis2": {"da": "j17", "a": "j26"}
	},
	{
		"casella": "j26",
		"vis1": {"da": "j17", "a": "j26"},
		"vis2": {"da": "a26", "a": "r26"}
	},
	{
		"casella": "m10",
		"vis1": {"da": "i10", "a": "m10"},
		"vis2": {"da": "m10", "a": "m17"}
	},
	{
		"casella": "m17",
		"vis1": {"da": "m10", "a": "m17"},
		"vis2": {"da": "g17", "a": "m17"}
	},
	{
		"casella": "m13",
		"vis1": {"da": "m10", "a": "m17"},
		"vis2": {"da": "m13", "a": "p14"}
	},
	{
		"casella": "m14",
		"vis1": {"da": "m10", "a": "m17"},
		"vis2": {"da": "m13", "a": "p14"}
	},
	{
		"casella": "s13",
		"vis1": {"da": "p13", "a": "s14"},
		"vis2": {"da": "s1", "a": "s26"}
	},
	{
		"casella": "s14",
		"vis1": {"da": "p13", "a": "s14"},
		"vis2": {"da": "s1", "a": "s26"}
	},
	{
		"casella": "s1",
		"vis1": {"da": "a1", "a": "s1"},
		"vis2": {"da": "s1", "a": "s26"}
	},
	{
		"casella": "s26",
		"vis1": {"da": "r26", "a": "s26"},
		"vis2": {"da": "s1", "a": "s26"}
	},
	{
		"casella": "a26",
		"vis1": {"da": "a26", "a": "r26"},
		"vis2": {"da": "a21", "a": "a26"}
	}						
	],
	"eventi" : [
	{
		"stanza": "so6",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà uno spadone. " +
			"Tutti gli altri peschino una carta tesoro"
		},
		{
			"tipo": "Info",
			"testo": "Le armi in questa stanza sono quasi tutte danneggiate"
		}
		]
	},
	{
		"stanza": "so4",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà la Corazza di Borin. " +
			"Tutti gli altri peschino una carta tesoro"
		},
		{
			"tipo": "Info",
			"testo": "Nella stanza troneggia un armadio finemente lavorato"
		}
		]
	},
	{
		"stanza": "se5",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà una gemma del valore di 100 mo dentro un cassetto " +
			"del tavolo dell'alchimista. Tutti gli altri peschino una carta tesoro"
		},
		{
			"tipo": "Info",
			"testo": "La stanza in passato doveva essere appartenuta a un sapiente alchimista. Ormai è abbandonata da tempo"
		}
		]
	},
	{
		"stanza": "so5",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà 100 mo dentro un vecchio scrigno malridotto. " +
			"Tutti gli altri peschino una carta tesoro"
		},
		{
			"tipo": "Info",
			"testo": "Niente attira particolarmente la vostra attenzione, tranne un vecchio scrigno malridotto"
		}
		]
	},
	{
		"stanza": "no1",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà 150 mo nello scrigno protetto dal Gargoyle. " +
			"Tutti gli altri peschino una carta tesoro"
		},
		{
			"tipo": "Info",
			"testo": "Uno splendido scrigno finemente lavorato si trova su un lato della stanza"
		}
		]
	},
	{
		"stanza": "no1",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà dentro alla libreria il Libro delle Profezie. " +
			"Tutti gli altri peschino una carta tesoro"
		},
		{
			"tipo": "Info",
			"testo": "Questa un tempo doveva essere la biblioteca della roccaforte. " +
			"Ora è solo una stanza con qualche libro rovinato e polveroso sparso qua e là"
		}
		]
	}
	]
};
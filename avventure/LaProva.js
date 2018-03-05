var datiLaProva = {
	"nome": "La Prova",
	"mostroErrante": "orco", 
	"testo": "Avete imparato bene, amici miei. Ora è giunto il momento della vostra prima prova. Dovrete " +
	"prima entrare nelle catacombe che custodiscono la Tomba di Fellmarg e quindi trovare e " +
	"distruggere Verag, un malvagio Gargoyle che si nasconde nelle catacombe. Questa Impresa non sarà " +
	"facile e dovrete lavorare insieme se volete sopravvivere. Questo è il primo passo sulla strada per " +
	"diventare veri Eroi. Fate attenzione amici miei.",
	"start": {
		"stanza": "so6",
		/*"caselle": {"da": "o2", "a": "r5"},*/
		"scale": {
			"posizione": "E",
			"caselle": {"da": "o2", "a": "p3"}
			}
	},
	"mobili" : [
	{
		"tipo": "tomba",
		"posizione": "N",
		"caselle": {"da": "b11", "a": "d12"}
	},
	{
		"tipo": "tavoloMago",
		"posizione": "V",
		"caselle": {"da": "f2", "a": "h3"}
	},
	{
		"tipo": "tavolo",
		"posizione": "O",
		"caselle": {"da": "f7", "a": "g9"}
	},
	{
		"tipo": "tavolo",
		"posizione": "O",
		"caselle": {"da": "j12", "a": "k14"}
	},
	{
		"tipo": "camino",
		"posizione": "S",
		"caselle": {"da": "h13", "a": "h15"}
	},
	{
		"tipo": "alchimista",
		"posizione": "E",
		"caselle": {"da": "p6", "a": "r7"}
	},
	{
		"tipo": "libreria",
		"posizione": "O",
		"caselle": {"da": "n6", "a": "n8"}
	},
	{
		"tipo": "scrigno",
		"posizione": "O",
		"caselle": {"da": "f11", "a": "f11"}
	},
	{
		"tipo": "scrigno",
		"posizione": "O",
		"caselle": {"da": "h12", "a": "h12"}
	},
	{
		"tipo": "trono",
		"posizione": "E",
		"caselle": {"da": "i11", "a": "i11"}
	},
	{
		"tipo": "tortura",
		"posizione": "N",
		"caselle": {"da": "k4", "a": "m5"}
	},
	{
		"tipo": "rastrelliera",
		"posizione": "O",
		"caselle": {"da": "p12", "a": "r12"}
	},
	{
		"tipo": "armadio",
		"posizione": "O",
		"caselle": {"da": "n16", "a": "n18"}
	},
	{
		"tipo": "scrigno",
		"posizione": "V",
		"caselle": {"da": "q18", "a": "q18"}
	},
	{
		"tipo": "libreria",
		"posizione": "O",
		"caselle": {"da": "r16", "a": "r18"}
	}
	],
	"porte" : [
	{
		"caselle": {"da": "m11", "a": "n11"},
		"vis1": "so4",
		"vis2": {"da": "m10", "a": "m17"}
	},
	{
		"caselle": {"da": "p9", "a": "p10"},
		"vis1": "so4",
		"vis2": "so5"
	},
	{
		"caselle": {"da": "r8", "a": "s8"},
		"vis1": "so5",
		"vis2": {"da": "s1", "a": "s15"}
		
	},
	{
		"caselle": {"da": "r4", "a": "s4"},
		"vis1": "so6",
		"vis2": {"da": "s1", "a": "s15"}
	},
	{
		"caselle": {"da": "p14", "a": "p15"},
		"vis1": "se5",
		"vis2": {"da": "m13", "a": "s14"}
	},
	{
		"caselle": {"da": "j16", "a": "j17"},
		"vis1": "c",
		"vis2": {"da": "g17", "a": "m17"}
	},
	{
		"caselle": {"da": "l1", "a": "l2"},
		"vis1": "so1",
		"vis2": {"da": "b1", "a": "s1"}
	},
	{
		"caselle": {"da": "l1", "a": "l2"},
		"vis1": "so1",
		"vis2": {"da": "b1", "a": "s1"}
	},
	{
		"caselle": {"da": "i4", "a": "j4"},
		"vis1": "no5",
		"vis2": {"da": "j1", "a": "j10"}
	},
	{
		"caselle": {"da": "i8", "a": "j8"},
		"vis1": "no4",
		"vis2": {"da": "j1", "a": "j10"}
	},
	{
		"caselle": {"da": "d4", "a": "e4"},
		"vis1": "no1",
		"vis2": "no5"
	},
	{
		"caselle": {"da": "c5", "a": "c6"},
		"vis1": "no1",
		"vis2": "no2"
	},
	{
		"caselle": {"da": "c9", "a": "c10"},
		"vis1": "no3",
		"vis2": "no2"
	}
	],
	"porteSegrete" : [
	{
		"caselle": {"da": "o18", "a": "o19"},
		"posizione": "O",
		"vis1": "se4",
		"vis2": "se5"
	}
	],
	"mostri" : [
	{
		"tipo": "fimir",
		"caselle": ["q11"]
	},
	{
		"tipo": "goblin",
		"caselle": ["o11", "l3", "g4", "h7", "h8"]
	},
	{
		"tipo": "orco",
		"caselle": ["f5", "i15", "l12", "m3", "o8", "p9"]
	},
	{
		"tipo": "scheletro",
		"caselle": ["c3", "c4", "b10", "d10"]
	},
	{
		"tipo": "zombie",
		"caselle": ["b7", "d7"]
	},
	{
		"tipo": "mummia",
		"caselle": ["c7", "e10"]
	},
	{
		"tipo": "guerrieroCaos",
		"caselle": ["l15", "p17", "q16"]
	}	,
	{
		"tipo": "gargoyle",
		"caselle": ["i13"]
	}
	],
	"muri" : [
	//{
	//	"doppio": true,
	//	"caselle": ["f13", "f14"]
	//},
	{
		"doppio": true,
		"caselle": ["f13", "f14"]
	},
	{
		"doppio": false,
		"caselle": ["b1", "j18", "s15"]
	}	
	],
	"visibilita" : [
	{
		"casella": "s13",
		"vis1": {"da": "m13", "a": "r14"},
		"vis2": {"da": "s1", "a": "s15"}
	},
	{
		"casella": "s1",
		"vis1": {"da": "b1", "a": "s1"},
		"vis2": {"da": "s1", "a": "s15"}
	},
	{
		"casella": "m10",
		"vis1": {"da": "m10", "a": "m17"},
		"vis2": {"da": "g10", "a": "m10"}
	},
	{
		"casella": "s14",
		"vis1": {"da": "m13", "a": "r14"},
		"vis2": {"da": "s1", "a": "s15"}
	},
	{
		"casella": "m13",
		"vis1": {"da": "m13", "a": "r14"},
		"vis2": {"da": "m10", "a": "m17"}
	},
	{
		"casella": "m14",
		"vis1": {"da": "m13", "a": "r14"},
		"vis2": {"da": "m10", "a": "m17"}
	},
	{
		"casella": "m17",
		"vis1": {"da": "g17", "a": "m17"},
		"vis2": {"da": "m10", "a": "m17"}
	},
	{
		"casella": "g17",
		"vis1": {"da": "g17", "a": "m17"},
		"vis2": {"da": "g10", "a": "g17"}
	},
	{
		"casella": "g10",
		"vis1": {"da": "g10", "a": "m10"},
		"vis2": {"da": "g10", "a": "g17"}
	},
	{
		"casella": "g13",
		"vis1": {"da": "f13", "a": "f14"},
		"vis2": {"da": "g10", "a": "g17"}
	},
	{
		"casella": "g14",
		"vis1": {"da": "f13", "a": "f14"},
		"vis2": {"da": "g10", "a": "g17"}
	},
	{
		"casella": "j17",
		"vis1": {"da": "g17", "a": "m17"},
		"vis2": {"da": "j18", "a": "j18"}
	},
	{
		"casella": "j10",
		"vis1": {"da": "g10", "a": "m10"},
		"vis2": {"da": "j1", "a": "j10"}
	},
	{
		"casella": "j1",
		"vis1": {"da": "b1", "a": "s1"},
		"vis2": {"da": "j1", "a": "j10"}
	}				
	],
	"eventi" : [
	{
		"stanza": "so4",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Non c'è nulla che gli eroi possano volere. Pesca una carta tesoro"
		},
		{
			"tipo": "Info",
			"testo": "Le armi in questa stanza sono scheggiate"
		}
		]
	},
	{
		"stanza": "se5",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Questo scrigno è vuoto. Pesca una carta tesoro"
		},
		{
			"tipo": "RicercaPS",
			"testo": "Trovate una porta segreta",
			"azione": "visualizzaPortaSegreta(trovaPortaSegretaInCasella (\"o18\"))"
		}
		]
	},
	{
		"stanza": "no2",
		"azioni": [
		{
			"tipo": "Info",
			"testo": "Questa mummia è la guardia della tomba di Fellmarg, " +
			"ed era un tempo un possente guerriero. In attacco lancia 4 dadi da combattimento, anziché 3"
		}
		]
	},
	{
		"stanza": "no3",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà 84 monete d’oro nello scrigno. " +
			"Tutti gli altri peschino una carta tesoro"
		}
		]
	},
	{
		"stanza": "c",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà 120 monete d’oro nello scrigno. " +
			"Tutti gli altri peschino una carta tesoro"
		}
		]
	},
	{
		"stanza": "so6",
		"azioni": [
		{
			"tipo": "Info",
			"testo": "Questa è la stanza da cui parte la vostra avventura. Buona fortuna!"
		}
		]
	}
	]
};
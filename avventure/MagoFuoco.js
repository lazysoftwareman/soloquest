var datiMagoFuoco = {
	"nome": "Il mago del fuoco",
	"mostroErrante": "fimir",
	"testo": "Gli orchi dei monti neri hanno fatto uso di fuoco magico durante le loro scorrerie. " +
	"Balur, il Mago del Fuoco, è ritenuto responsabile di averli aiutati. Il fuoco magico non può ferire " +
	"Balur e i maghi dell'imperatore non possono nulla contro i suoi incantesimi. Siete stati quindi scelti " +
	"per entrare nel suo nascondiglio, nelle profondità sotto la Rupe del Fuoco Nero. L'imperatore ricompenserà " +
	"ogni Eroe per la distruzione di Balur con 100 monete d'oro.", //le informazioni dell'avventura, obbligatorio
	"start": {
		"stanza": "ne4",//la stanza da cui si parte, se è una stanza
		"scale": { //dove sono posizionate e come sono orientale le scale, se ci sono, quindi non obbligatorio
			"posizione": "N", //obbligatorio
			"caselle": {"da": "h22", "a": "i23"} //obbligatorio
			}
	},
	"mobili" : [
	{
		"tipo": "tavoloMago",
		"posizione": "V",
		"caselle": {"da": "i11", "a": "k12"}
	},
	{
		"tipo": "tavolo",
		"posizione": "O",
		"caselle": {"da": "o15", "a": "p17"}
	},
	{
		"tipo": "libreria",
		"posizione": "O",
		"caselle": {"da": "h14", "a": "h16"}
	},
	{
		"tipo": "scrigno",
		"posizione": "V",
		"caselle": {"da": "l22", "a": "l22"}
	},
	{
		"tipo": "libreria",
		"posizione": "O",
		"caselle": {"da": "l14", "a": "l16"}
	}
	],
	"porte" : [//l'elenco delle porte, obbligatorio
	{
		"caselle": {"da": "m11", "a": "n11"},//indica le caselle dentro le quali si trova la porta, obbligatorio
		"vis1": "so4",//indica una delle due zone visibili all'apertura della porta. Può essere una stanza o una sequenza di caselle, obbligatorio
		"vis2": {"da": "m10", "a": "m17"},//indica una delle due zone visibili all'apertura della porta. Può essere una stanza o una sequenza di caselle, obbligatorio
		"testo": "L'apertura della cella ha fatto scattare un allarme",//indica il testo da mostrare all'apertura della porta. Non obbligatorio
		"azione": "rendiVisibileTutto();"// indica l'azione da eseguire all'apertura della porta. Non obbligatorio
	},
	{
		"caselle": {"da": "j0", "a": "j1"},
		"vis1": {"da": "b1", "a": "s1"},
		"vis2": {"da": "b1", "a": "s1"}
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
	"porteSegrete" : [//Indica l'elenco delle porte segrete. Può essere vuoto
	{
		"caselle": {"da": "o18", "a": "o19"},
		"posizione": "O", // indica com'è posizionata la porta segreta, obbligatorio
		"vis1": "se4", //come per le porte
		"vis2": "se5"
	}
	],
	"mostri" : [// indica l'elenco dei mostri. Obbligatorio ma può essere vuoto
	{
		"tipo": "fimir", //il tipo indica anche il file per l'immagine, e le caratteristiche
		"caselle": ["q11"] //l'elenco delle caselle in cui si trova il mostro. obbligatorio
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
	"muri" : [ //l'elenco dei muri. Può essere vuoto
	{
		"doppio": true, //obbligatorio
		"caselle": ["f13", "f14"] //se doppio le caselle indicano la posizione del muro, obbligatorio
	},
	{
		"doppio": false,
		"caselle": ["b1", "j18", "s15"] //se non doppio le caselle indicano le posizioni, obbligatorio
	}	
	],
	"visibilita" : [ //l'elenco dei punti in cui si devono fermare gli eroi per vedere altre zone inesplorate
	{
		"casella": "s13", //la casella, obbligatorio
		"vis1": {"da": "m13", "a": "r14"}, //come per le porte
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
	"eventi" : [ //l'elenco degli eventi. Può essere vuoto
	{
		"lettera": "A", //se si vuole mostrare una lettera, non obbligatorio
		"casella": "l16", //se l'evento non è in una stanza, obbligatorio uno dei due
		"stanza": "c", //se l'evento è in una stanza, obbligatorio uno dei due
		"azioni": [ //le azioni da mostrare nel menu a tendina
		{
			"tipo": "Ricerca", //Se Ricerca, RicercaPS o Info, non serve la label, obbligatorio
			"label": "Ricerca tesoro", //Se di tipo diverso da questi 3 standard, non obbligatorio
			"testo": "Zumpappero", //Se si vuole mostrare un testo, non obbligatorio
			"azione": "visualizzaMostro(dati.mostri.gargoyle,''a1')" //l'eventuale azione da eseguire, non obbligatorio
		},
		{
			"tipo": "Info",
			"azione": "La stanza è tutta vuota tranne un cesso nel centro"
		}
		]
	},
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
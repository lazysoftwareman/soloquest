var datiSirRagnar = {
	"nome": "La Liberazione di Sir Ragnar",
	"mostroErrante": "orco", 
	"testo": "Sir Ragnar, uno dei più potenti cavalieri dell’Imperatore, è stato catturato. C’è ragione di " +
	"credere che sia tenuto prigioniero da Ulag, il Capoguerra Orco. Dovete trovare Sir Ragnar e riportarlo " +
	"alle scale. Il Principe Magnus pagherà 240 monete d’oro da dividere tra gli Eroi se salveranno Sir " +
	"Ragnar, mentre non ci sarà nessun premio se egli dovesse venire ucciso durante la fuga.",
	"start": {
		"stanza": "c",
		"scale": {
			"posizione": "O",
			"caselle": {"da": "h15", "a": "i16"}
			}
	},
	"mobili" : [
	{
		"tipo": "tavolo",
		"posizione": "O",
		"caselle": {"da": "b19", "a": "c21"}
	},
	{
		"tipo": "tavolo",
		"posizione": "V",
		"caselle": {"da": "p6", "a": "r7"}
	},
	{
		"tipo": "scrigno",
		"posizione": "O",
		"caselle": {"da": "i20", "a": "i20"}
	},
	{
		"tipo": "scrigno",
		"posizione": "O",
		"caselle": {"da": "n3", "a": "n3"}
	},
	{
		"tipo": "tortura",
		"posizione": "S",
		"caselle": {"da": "j15", "a": "l16"}
	},
	{
		"tipo": "armadio",
		"posizione": "V",
		"caselle": {"da": "g18", "a": "i18"}
	}
	],
	"porte" : [
	{
		"caselle": {"da": "d17", "a": "d18"},
		"vis1": "ne1",
		"vis2": "ne2"
	},
	{
		"caselle": {"da": "e20", "a": "f20"},
		"vis1": "ne2",
		"vis2": "ne5"
	},
	{
		"caselle": {"da": "f16", "a": "g16"},
		"vis1": "ne1",
		"vis2": {"da": "g10", "a": "g17"}
		
	},
	{
		"caselle": {"da": "g21", "a": "g22"},
		"vis1": "ne4",
		"vis2": "ne5"
	},
	{
		"caselle": {"da": "i24", "a": "j24"},
		"vis1": "ne4",
		"vis2": {"da": "j17", "a": "j25"}
	},
	{
		"caselle": {"da": "l11", "a": "m11"},
		"vis1": "c",
		"vis2": {"da": "m10", "a": "m17"}
	},
	{
		"caselle": {"da": "j3", "a": "k3"},
		"vis1": "so1",
		"vis2": {"da": "j2", "a": "j10"}
	},
	{
		"caselle": {"da": "l7", "a": "l8"},
		"vis1": "so2",
		"vis2": "so3",
		"testo": "L'apertura della cella ha fatto scattare un allarme. Tutte le porte si aprono e tutti i mostri vi inseguiranno!",
		"azione": "rendiVisibileTutto();"
	},
	{
		"caselle": {"da": "p9", "a": "p10"},
		"vis1": "so5",
		"vis2": "so4"
	},
	{
		"caselle": {"da": "r12", "a": "s12"},
		"vis1": "so4",
		"vis2": {"da": "s9", "a": "s15"}
	}
	],
	"porteSegrete" : [
	{
		"caselle": {"da": "m9", "a": "n9"},
		"posizione": "N",
		"vis1": "so3",
		"vis2": "so5"
	}
	],
	"mostri" : [
	{
		"tipo": "fimir",
		"caselle": ["l9"]
	},
	{
		"tipo": "goblin",
		"caselle": ["e19", "g15", "g19", "h19", "h21", "j24", "m17", "h19", "j4", "m3", "m8", "s10"]
	},
	{
		"tipo": "orco",
		"caselle": ["d16", "e17", "d20", "h20", "g24", "h25", "o9", "p8", "p10"]
	},
	{
		"tipo": "png",
		"nome" : "Sir Ragnar",
		"movimento" : "1d",
		"attacco" : 0,
		"difesa" : 2,
		"corpo" : 2,
		"mente" : 3,
		"comportamento" : "Si muove subito dopo l'eroe che l'ha scoperto",
		"caselle": ["l6"]
	}
	],
	"muri" : [
	{
		"doppio": true,
		"caselle": ["f13", "f14"]
	},
	{
		"doppio": false,
		"caselle": ["j2", "j25", "s9", "s15"]
	}	
	],
	"visibilita" : [
	{
		"casella": "j17",
		"vis1": {"da": "g17", "a": "m17"},
		"vis2": {"da": "j17", "a": "j25"}
	},
	{
		"casella": "m10",
		"vis1": {"da": "m10", "a": "m17"},
		"vis2": {"da": "g10", "a": "m10"}
	},
	{
		"casella": "m13",
		"vis1": {"da": "m13", "a": "s14"},
		"vis2": {"da": "m10", "a": "m17"}
	},
	{
		"casella": "m14",
		"vis1": {"da": "m13", "a": "s14"},
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
		"casella": "j10",
		"vis1": {"da": "g10", "a": "m10"},
		"vis2": {"da": "j2", "a": "j10"}
	},
	{
		"casella": "s13",
		"vis1": {"da": "s9", "a": "s15"},
		"vis2": {"da": "m13", "a": "s14"}
	},
	{
		"casella": "s14",
		"vis1": {"da": "s9", "a": "s15"},
		"vis2": {"da": "m13", "a": "s14"}
	}				
	],
	"eventi" : [
	{
		"stanza": "so1",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Lo scrigno del tesoro è protetto da una trappola con un ago avvelenato. L'eroe che ha ricercato " +
			"deve effettuare una prova di mente, se fallirà, perderà un punto-corpo. Lo scrigno è vuoto."
		}
		]
	},
	{
		"stanza": "ne5",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori nella stanza troverà 60 monete d’oro nello scrigno. Troverà inoltre una" +
			"Pozione Risanante, che permetterà di recuperare fino a 4 punti-corpo perduti quando bevuta. "+
			"Gli altri eroi peschino una carta tesoro"
		}
		]
	},
	{
		"stanza": "so5",
		"azioni": [
		{
			"tipo": "RicercaPS",
			"testo": "Trovate una porta segreta",
			"azione": "visualizzaPortaSegreta(trovaPortaSegretaInCasella (\"n9\"))"
		}
		]
	},
	{
		"stanza": "so2",
		"azioni": [
		{
			"tipo": "Info",
			"testo": "In questa stanza si trova Sir Ragnar, contrassegnato dal simbolo del mago del caos. " +
			"Mettete sul tabellone TUTTI i mostri, le porte e i mobili rimasti. D’ora in avanti tutte le porte sono aperte. " +
			"Per rappresentare Sir Ragnar sul tabellone usate la miniatura del Mago del Caos. Sir Ragnar " +
			"dovrà essere spostato solo dall’Eroe che ha aperto la porta della sua cella. (Gli Eroi non possono " +
			"cercare tesori nella cella.) L’Eroe compirà prima il suo turno regolarmente, poi lancerà un dado rosso " +
			"per muovere il cavaliere ferito. Sir Ragnar deve essere riportato vivo alle scale perché possiate ricevere la " +
			"vostra ricompensa (vedi il testo dell'avventura). Sir Ragnar non può attaccare, ma può lanciare " +
			"2 dadi per difendersi. Gli sono rimasti 2 punti-corpo."
		},
		{
			"tipo": "Ricerca",
			"testo": "Non si può ricercare tesori nella cella di Sir Ragnar"
		}
		]
	}
	]
};
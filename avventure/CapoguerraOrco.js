//la variabile deve chiamarsi dati+NomeAvventura
var datiCapoguerraOrco = {
	"nome": "Il Covo del Capoguerra Orco",
	"mostroErrante": "orco", 
	"testo": "Il Principe Magnus ha ordinato che il Capoguerra Orco Ulag, responsabile del rapimento di Sir " +
		"Manfred, venga trovato e ucciso. Quando Ulag sarà morto, gli Eroi riceveranno una ricompensa di 180 " +
		"monete d’oro da dividere tra loro. Qualsiasi tesoro rinvenuto nella fortezza di Ulag può essere tenuto da " +
		"colui che l’ha trovato.",
	"start": {
		"stanza": "no3",
		"scale": {
			"posizione": "E",
			"caselle": {"da": "b10", "a": "c11"}
			}
	},
	"mobili" : [
	{
		"tipo": "tavolo",
		"posizione": "V",
		"caselle": {"da": "f7", "a": "h8"}
	},
	{
		"tipo": "tavolo",
		"posizione": "V",
		"caselle": {"da": "p8", "a": "r9"}
	},
	{
		"tipo": "camino",
		"posizione": "S",
		"caselle": {"da": "e2", "a": "e4"}
	},
	{
		"tipo": "scrigno",
		"posizione": "V",
		"caselle": {"da": "k9", "a": "k9"}
	},
	{
		"tipo": "rastrelliera",
		"posizione": "O",
		"caselle": {"da": "b5", "a": "d5"}
	},
	{
		"tipo": "armadio",
		"posizione": "V",
		"caselle": {"da": "k2", "a": "m2"}
	}
	],
	"porte" : [
	{
		"caselle": {"da": "c1", "a": "c2"},
		"vis1": "no1",
		"vis2": {"da": "b1", "a": "k1"}
		//"testo": "L'apertura della cella ha fatto scattare un allarme",//indica il testo da mostrare all'apertura della porta. Non obbligatorio
		//"azione": "rendiVisibileTutto();"// indica l'azione da eseguire all'apertura della porta. Non obbligatorio
	},
	{
		"caselle": {"da": "e9", "a": "e10"},
		"vis1": "no4",
		"vis2": "no3"
	},
	{
		"caselle": {"da": "i5", "a": "i6"},
		"vis1": "no4",
		"vis2": "no5"		
	},
	{
		"caselle": {"da": "i3", "a": "j3"},
		"vis1": "no5",
		"vis2": {"da": "j1", "a": "j8"}
	},
	{
		"caselle": {"da": "j6", "a": "k6"},
		"vis1": "so2",
		"vis2": {"da": "j1", "a": "j8"}
	},
	{
		"caselle": {"da": "m5", "a": "m6"},
		"vis1": "so1",
		"vis2": "so2"
	},
	{
		"caselle": {"da": "m9", "a": "n9"},
		"vis1": "so3",
		"vis2": "so5"
	},
	{
		"caselle": {"da": "n3", "a": "o3"},
		"vis1": "so1",
		"vis2": "so6"
	},
	{
		"caselle": {"da": "q5", "a": "q6"},
		"vis1": "so5",
		"vis2": "so6",
		"testo": "L'orco in questa stanza è Ulag. Usate la miniatura dell’Orco munito di spadone per " +
			"rappresentare Ulag. Ulag ha i seguenti valori:<br>" +
			"Movimento 10, Attacco 4, Difesa 5, Corpo 2, Mente 3."
	}
	],
	"mostri" : [
	{
		"tipo": "fimir",
		"caselle": ["b4", "i5", "q3"]
	},
	{
		"tipo": "goblin",
		"caselle": ["e8", "f9", "g6", "i8", "m3", "n4", "p6", "r6"]
	},
	{
		"tipo": "orco",
		"caselle": ["c3", "l6", "k7", "p2", "p5", "q4", "o7"]
	},
	{
		"tipo": "guerrieroCaos",
		"caselle": ["p7"]
	}
	],
	"muri" : [
	{
		"doppio": false,
		"caselle": ["b1", "j8", "k1"]
	}	
	],
	"visibilita" : [ 
	{
		"casella": "j1",
		"vis1": {"da": "b1", "a": "k1"}, //come per le porte
		"vis2": {"da": "j1", "a": "j8"}
	}				
	],
	"eventi" : [	
	{
		"stanza": "no1",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà un Bastone che può annotare " +
				"sul suo foglio segnapunti o che può dare a un altro Eroe. Questo Bastone è esattamente come " +
				"quello descritto nell’Armeria. Tutte le altre ricerche peschino una carta tesoro."
		},
		{
			"tipo": "Info",
			"testo": "Questa è l’Armeria degli Orchi"
		}
		]
	},
	{
		"stanza": "so1",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori troverà 24 monete d’oro e una Pozione Risanante nell’armadio. La " +
				"Pozione permetterà di recuperare fino a 4 punticorpo quando bevuta. " +
				"Tutte le altre ricerche peschino una carta tesoro."
		}
		]
	},
	{
		"stanza": "so5",
		"azioni": [
		{
			"tipo": "Info",
			"testo": "L'orco in questa stanza è Ulag. Usate la miniatura dell’Orco munito di spadone per " +
			"rappresentare Ulag. Ulag ha i seguenti valori:<br>" +
			"Movimento 10, Attacco 4, Difesa 5, Corpo 2, Mente 3."
		}
		]
	},
	{
		"stanza": "so3",
		"azioni": [
		{
			"tipo": "Ricerca",
			"testo": "Il primo Eroe che cerca tesori apre lo scrigno, che contiene una trappola! " +
				"Tira un dado, se ottieni un numero inferiore o uguale ai punti mente, hai evitato la trappola, " +
				"altrimenti la trappola ti ha colpito: perdi un punto corpo.<br>" +
				"Tutte le altre ricerche peschino una carta tesoro."
		}
		]
	}
	]
};
//TEST VARI

function stampArray(array){
	var stringa = "";
	for (var j=0; j<array.length; j++){
		stringa = stringa + array[j] + " ";
	}
	return stringa;
}

function testViewMinimap() {
	// document.getElementById("tabelloneContainer").style.display = "none";
	// document.getElementById("miniContainer").style.display = "inline";
	caselleViste.push.apply(caselleViste,zone['ne1']);
	caselleViste.push.apply(caselleViste,zone['cis']);
	caselleViste.push.apply(caselleViste,zone['cmn']);
	ricercaMain();
}
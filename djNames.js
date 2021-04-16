var br = "";

function nameGen(type){
	var tp = type;
	var nm1 = ["Aberrant","Absurd","Acoustics","Acrobat","Adventune","Adventunes","Aftermath","Airtistry","Alcool","Ambit","Aria","Ariaty","Atmos","Azure","Bass-Ball","Bassis","Bassy Bee","Beast","Big Boss","Bigwig","Bit","Blade","Bliss","Brass","Bumble Bass","Cannon","Carnage","Catch 22","Chains","Chance","Chrono","Chronos","Clamor","Clarity","Clover","Creatune","Crit","Critical","Crush","D-Sire","Data","Databass","Daydream","Dexter","Dig","Dimension","Discord","Double Trouble","Dreamer","E-Motion","Encore","Enigma","Escapade","Existence","Face","Fascination","Flight","Fluke","Fortunes","Friction","Fusion","Ghost","Gov'ner","Hannibalistic","Heartbeat","Heartbeats","Image","Imagine","Impulse","Infinity","Init","Ink","Iron","Light","Limitless","Locket","Luck","Lucky","Marble","Maximus","Melodyrama","Mercy","Midnight","Mindfield","Minister","Momentum","Momentune","Motif","Motion","Nemo","Nerve","Ocean","Omen","Overtune","Pandemonium","Particle","Phantom","Phase","Poison","Primal","Prime","Prism","Promise","Psych","Pyro","Quake","Question Mark","Questune","Quicksand","Quiver","Refresh","Requiem","Riddle","Rise","Robin","Ruckus","Rumor","Rush","Sanitune","Satisfriction","Silver","Sliver","Smile","Snow","Spider","Status","Stitches","Stranger","Strum","Switch","Temper","Tempest","Thrill","Thriller","Thunder","Treble Trouble","Tremor","Trickshot","Triple","Tumultimate","Twister","Venom","Victory","Virus","Voyage","Whistle","Wicked","Wish","Witness","Wobble","Zephyr"];
	var nm2 = ["Énigme","Étranger","Aberrant","Absurde","Acoustiques","Acrobate","Airtiste","Ambition","Animal","Araignée","Arcane","Argent","Aria","Aspect","Astuce","Atmos","Aube","Audace","Avance","Aventure","Azur","Bête","Basse","Basse Force","Basse-Ball","Basse-Culade","Bis","Bit","Blanche","Bonne Chance","Bousculade","Canon","Carnage","Chaînes","Chahut","Chance","Chanceux","Charme","Chouette","Chrono","Clameur","Clarté","Contrecoup","Couple Double","Courage","Critique","Crucial","Dé-Sire","Destin","Dextre","Dimension","Discorde","E-Motion","Encre","Envievant","Escapade","Esprit","Existence","Félicité","Fantôme","Fascination","Fer","Feu","Flamme","Force","Fortune","Frasque","Friction","Frisson","Fusion","Grâce","Héros","Hannibalistique","Hasard","Humeur","Illimité","Image","Impulsion","Indulgence","Infini","Infinité","Initié","Instant","Irréaliste","Laiton","Lame","Lancement","Lumière","Méchant","Médaillon","Mélodie","Mélodierame","Méthode","Métronome","Marbre","Maximus","Ministre","Minuit","Mystère","Naissance","Neige","Nemo","Nerf","Océan","Ombre","Orage","Pandémonium","Particule","Phase","Poison","Présage","Prestige","Prime","Prisme","Promesse","Psychédélique","Pulsation","Pulsion","Pyro","Question","Rêverie","Rêverire","Rêveur","Requiem","Revenant","Ridicule","Robin","Rumeur","Ruse","Rush","Satisfriction","Sensation","Sifflet","Sonore","Souhait","Sourire","Spectateur","Spectre","Témoin","Tempête","Thriller","Tonnerre","Tornade","Trèfle","Tranche","Tremblement","Triomphe","Triple","Venin","Vibration","Victoire","Virus","Visage","Voyage","Zéphyr","Zéro"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nTp = Math.random() * 2 | 0;
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			if(nTp === 0){
				nMs = nm2[rnd];
			}else{
				nMs = "DJ " + nm2[rnd];
			}
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			if(nTp === 0){
				nMs = nm1[rnd];
			}else{
				nMs = "DJ " + nm1[rnd];
			}
			nm1.splice(rnd, 1);
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}
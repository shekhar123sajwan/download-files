
	
function nameGen(type){
	var tp = type;
	var nm1 = ["Armageddon","Bane of Mankind","The Catastrophic Experiment","The Cleansing Rains","Corruption of Mankind","Dawn of Destruction","Dawn of the Others","Dawn of the Walkers","Day of the Dead","Death of the Moon","Death of the Sun","Decimation of Mankind","Dusk of Mankind","End of the Living","Eternal Darkness","Fatal Impact","Final Hour","Final Impact","Frozen Hell","Garbage Day","Global Freezing","Global Warming","Judgement Day","Last Steps","Man's Greed","Mankind's Arrogance","Mankind's Betrayal","Mankind's Disgrace","Mankind's Expiration","Mankind's Ignorance","Nature's Vengeance","Our Expiration Date","Our Mutual Destruction","Our Wrong Choice","Rains of Death","Self-Assisted Damnation","Technological Destruction","Technological Expiration","Terminal Velocity","Terminus","The Annihilation","The Backfire","The Beginning","The Burning Rain","The Burning Skies","The Burning Winds","The Cataclysm","The Cleansing","The Collapse","The Collapse of Mankind","The Collision","The Combustion","The Conclusion","The Decimation","The Decimation of Mankind","The Departure","The Desolation of Mankind","The Detonation","The Disaster","The Drought","The Dry Rains","The End of Resources","The Erupting Earth","The Eternal Day","The Eternal Night","The Eternal Rains","The Eternal Storm","The Experiment","The Final Encounter","The First Encounter","The Flood","The Food Chain Collapse","The Immolation","The Invasion","The Killing Days","The Manifestation","The Meteor","The Nuclear Event","The Ozone Event","The Permafrost","The Phenomenon","The Purge","The Purification","The Putrefaction","The Rapture","The Revelation","The Rupture","The Sacrifice","The Severance","The Showdown","The Sterilization","The Sundering","The Tipping Point","The Visitors","The Wipe Out","Total Annihilation","Toxic Rain","Winds of Death","World War Final","Our Execution","Nature's Judgement","The Omega Event","The Cosmic Annihilation"];
	var nm2 = ["Armageddon","Fléau de l'Humanité","L'Expérience Catastrophique","Les Pluies Nettoyantes","Corruption de l'Humanité","L'Aube de la Destruction","L'Aube des Autres","L'Aube des Zombies","Le Jour des Morts","La Mort de la Lune","La Mort du Soleil","Décimation de l'Humanité","Crépuscule de l'Humanité","Fin des Vivants","L'Obscurité Éternelle","Impact Fatal","Dernière Heure","Impact Final","Enfer Congelé","Jour des Ordures","Congélation Globable","Réchauffement Climatique","Jour du Jugement","Dernières Étapes","La Cupidité de l'Humanité","L'Arrogance de l'Humanité","Trahison de l'Humanité","Disgrâce de l'Humanité","Expiration de l'Humanite","Ignorance de l'Humanité","La Vengeance de la Nature","Notre Date d'Expiration","Notre Destruction Mutuelle","Notre Mauvais Choix","Pluies de la Mort","Damnation Auto-Assistée","Destruction Technologique","Expiration Technologique","Vitesse Terminale","Terminus","L'Annihilation","","Le Début","La Pluie Brûlante","Le Ciel Brûlant","Les Vents Brûlantss","Le Cataclysme","Le Nettoyage","L'Effondrement","L'Effondrement de l'Humanité","La Collision","La Combustion","La Conclusion","La Décimation","La Décimation de l'Humanité","Le Départ","La Désolation de l'Humanité","La Détonation","Le Fléau","La Sécheresse","Les Pluies Sèches","La Fin des Ressources","La Terre en Éruption","Le Jour Éternel","La Nuit Éternelle","Les Pluies Éternelles","L'Éternelle Tempête","L'Expérience","La Rencontre Finale","La Première Rencontre","L'Inondation","L'Effondrement de la Nature","L'Immolation","L'Invasion","Les Jours de Tuerie","The Météore","L'Événement Nucléaire","L'Evénement d'Ozone","Le Pergélisol","Le Phénomène","La Purge","La Purification","La Putréfaction","Le Ravissement","La Révélation","La Rupture","Le Sacrifice","L'Interruption","La Confrontation","La Stérilisation","Le Fractionnement","Le Point de Bascule","Les Visiteurs","L'Effacement","Annihilation totale","Les Pluies Toxiques","Les Vent de la Mort","Dernière Guerre Mondiale","Notre Exécution","Le Jugement de la Nature","L'Événement Oméga","L'Annihilation Cosmique"];
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			names = nm2[rnd];
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd];
			nm1.splice(rnd, 1);
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}
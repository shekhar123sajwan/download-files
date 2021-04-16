var br = "";

function nameGen(type){
	var tp = type;
	var nm1 = ["Aegis","Aello","Aethon","Albatross","Alicanto","Alicorn","Ambrosia","Amrita","Angel","Aphrodite","Apollo","Apostle","Ara","Argo","Aria","Arondight","Artemis","Arthur","Ascalon","Ash","Astra","Aura","Aurora","Avalanche","Avalerion","Avalon","Azoth","Bandit","Barbarian","Beast","Behemoth","Big Bird","Blaze","Blizzard","Boomer","Brawl","Broxa","Bumblebee","Bustard","Cinder","Cockatrice","Condor","Cormorant","Cosmos","Crane","Creature","Critter","Cryobird","Cupid","Cyclone","Cyclops","Demon","Devil Bird","Diablo","Dustdevil","Dynamite","Eagle","Echo","Effigy","Ellida","Enigma","Ether","Ethereal","Excalibur","Exile","Falcon","Feather","Fiend","Firebird","Flamingo","Flash","Fluke","Fray","Frenzy","Frigatebird","Fury","Gale","Gargoyle","Ghost","Glory","Glutton","Goliath","Gram","Griffin","Growler","Guerrilla","Gungnir","Gust","Hades","Harpy","Hawk","Hawker","Helix","Herald","Heretic","Hippogriff","Hornet","Hover Dove","Hoverbird","Howler","Hummingbird","Hunter","Huntress","Hurricane","Husk","Hussle","Hydra","Illume","Inferno","Javelin","Juvenile","Kindle","Kingfisher","Kookaburra","Lark","Leviathan","Lightning Bird","Loki","Lumina","Lyrebird","Mammoth","Medusa","Miracle","Mithril","Mjolnir","Monsoon","Mother Hen","Naglfar","Nebula","Nightingale","Nova","Nurse","Omen","Oracle","Orb","Ozone","Pamola","Pandora","Paradox","Parakeet","Pelican","Phantom","Phoenix","Poseidon","Pterodactyl","Pterosaur","Pyre","Pyrobird","Quail","Quarrel","Queen Bee","Rebel","Rebound","Renegade","Riot","Roc","Rumbler","Sanddevil","Seahawk","Silver","Siren","Sliver","Snake","Spot","Spotlight","Squall","Stalker","Stallion","Stark","Stork","Storm","Strife","Striker","Swan","Swift","Swiftstrike","Talaria","Tempest","Teratorn","Terrorbird","Thor","Thunder Bird","Thunderbolt","Tigress","Tinder","Trumpet","Tucan","Typhoon","Varmint","Veil","Vermilion","Vimana","Void","Volley","Vulture","Warbler","Wasp","Zephyr","Zeus","Zion"];
	var nm2 = ["Écho","Éclair","Éclat","Égide","Émeute","Énigme","Étalon","Éthéré","Éther","Abeille","Aello","Aethon","Aigle","Albatros","Alicanto","Alicorn","Alouette","Ambroisie","Amrita","Ange","Apôtre","Aphrodite","Apollon","Ara","Argent","Argo","Aria","Artemis","Arthur","Ascalon","Assaut","Astral","Augure","Aura","Aurore","Austère","Avalanche","Avalerion","Avalon","Bête","Bagarre","Bandit","Barbare","Basilic","Bestiole","Blizzard","Boomerang","Bourdon","Brute","Buse","Caille","Camelot","Cendre","Chance","Chanteur","Chasseur","Chasseuse","Cigogne","Colibri","Colombe","Condor","Coquin","Cormoran","Cosmos","Coup","Créature","Cupidon","Cyclone","Cyclope","Cygne","Démon","Diable","Dynamite","Effigie","Enfer","Excalibur","Exil","Fantôme","Faucon","Fauvette","Flamant","Flamme","Flash","Foudre","Frénésie","Frêne","Frelon","Fripon","Fureur","Furie","Gargouille","Gloire","Glouton","Goliath","Gramme","Griffon","Grondeur","Grue","Guérilla","Guêpe","Hélix","Hérétique","Héraut","Harpie","Hippogriffe","Hydre","Illume","Incendie","Infernal","Infirmière","Javeline","Javelot","Juvénile","Kookaburra","Léviathan","Loki","Lumière","Lumina","Lyre","Mère Poule","Méduse","Mammouth","Martin-Pêcheur","Martinet","Merveille","Miracle","Mithril","Mjolnir","Monstre","Mouette","Mousson","Nébuleuse","Naglfar","Nova","Oiseau","Oiseau Diable","Oracle","Orage","Orbe","Ouragan","Outarde","Ozone","Pélican","Pamola","Pandora","Paradoxe","Perruche","Phénix","Plume","Poseidon","Présage","Ptérodactyle","Ptérosaure","Querelle","Rafale","Rebelle","Rebond","Reine","Renégat","Revenant","Rock","Rossignol","Salve","Satin","Scorie","Serpent","Sion","Sirène","Spectre","Talaria","Tempête","Teratorn","Terreur","Thor","Thunderbird","Tigresse","Tonnerre","Tourbillon","Trompette","Tucan","Typhon","Vampire","Vaurien","Vautour","Vermillion","Vide","Vimana","Voile","Volée","Zéphyr","Zeus"];
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
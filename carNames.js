function nameGen(type){
	var tp = type;
	var nm1 = ["Blast","Halo","Wolf","Fang","Eagle","Blade","Adventure","Aeon","Alabaster","Albatross","Apex","Astral","Augury","Aura","Aurora","Avalanche","Baron","Barrage","Basilisk","Behemoth","Blaze","Blend","Bliss","Blitz","Blizzard","Bolt","Buffalo","Bullet","Capital","Catalyst","Celestial","Centaur","Centurion","Charm","Chase","Climax","Cobra","Conqueror","Corsair","Cosmos","Crest","Crown","Crusader","Crux","Curiosity","Dawn","Daydream","Deputy","Desire","Dominion","Dragon","Dusk","Dynamics","Dynamo","Elysium","Eminence","Empire","Empyrean","Encounter","Enigma","Eon","Eos","Epiphany","Epitome","Escape","Essence","Eternity","Ethereal","Evolution","Excursion","Expedition","Falcon","Ferocity","Fire","Flow","Flux","Formula","Fragment","Freedom","Gallop","Grit","Guardian","Guerilla","Harmony","Heirloom","Hero","Hydra","Icon","Inception","Inferno","Inquiry","Instinct","Intro","Ivory","Jazz","Legacy","Legend","Liberty","Lightning","Lioness","Magic","Majesty","Mammoth","Marvel","Mastery","Meridian","Method","Might","Millenium","Mirage","Momentum","Moonlight","Morale","Motion","Motive","Mystery","Mythic","Nebula","Nimbus","Obsidian","Olympian","Onyx","Oracle","Orbit","Origin","Paladin","Paradox","Paragon","Parallel","Passion","Patron","Phantom","Phenomenom","Pinnacle","Portrait","Presence","Prestige","Prime","Prodigy","Prophecy","Prospect","Pulse","Purity","Pyre","Quest","Quicksilver","Radiance","Ranger","Raven","Reach","Realm","Reflect","Renegade","Resolve","Revelation","Roamer","Rune","Sanctuary","Scorpion","Scout","Serpent","Shadow","Silver","Sliver","Specter","Spire","Spirit","Spotlight","Sprite","Stardust","Starlight","Storm","Striker","Supremacy","Surge","Symbol","Tarragon","Temper","Temperament","Tempest","Thriller","Thunder","Tigress","Titan","Tracer","Tradition","Trailblazer","Treasure","Triumph","Twister","Umbra","Union","Universe","Utopia","Vagabond","Vanish","Vertex","Vigor","Vindicator","Viper","Virtue","Vision","Vortex","Voyage","Vulture","Warrior","Whim","Whirlpool","Wish","Zeal"];
	var nm2 = ["??clat","??lan","??lys??e","??minence","??nergie","??nigme","??on","??piphanie","??ternit??","??th??r??","??toile","??vasion","??volution","Accord","Aeon","Aigle","Alb??tre","Albatros","Amour","Apex","Apog??e","Argent","Astral","Aube","Augure","Aura","Aurore","Avalanche","Aventure","Baron","Barrage","Basilic","Beaut??","Bison","Blitz","Blizzard","Buffle","C??leste","Capital","Catalyseur","Centaure","Centurion","Champion","Chance","Charme","Chasse","Chasseur","Cime","Clair de Lune","Climax","Cobra","Concorde","Conqu??rant","Corbeau","Corsaire","Cosmos","Couronne","Cr??puscule","Cr??te","Croc","Crois??","Curiosit??","D??but","D??put??","D??sir","Diligence","Domaine","Domination","Dragon","Dynamique","Dynamo","Empire","Empyr??e","Enchantement","Envie","Esprit","Essence","Excursion","Exp??dition","F??licit??","F??rocit??","Fa??on","Fanfare","Fant??me","Fantaisie","Faucon","Feu","Fl??che","Flamme","Flux","Force","Formule","Foudre","Fougue","Fusion","G??ant","G??nie","Galop","Gardien","Grandeur","Gravier","Gu??rilla","Guerrier","H??ritage","H??ros","Halo","Harmonie","Hydre","Ic??ne","Impulsion","Incendie","Ind??pendance","Inferno","Insigne","Instinct","Intro","Ivoire","Jazz","L??gende","L??viathan","LAme","Lib??ration","Libert??","Lionne","Loup","Lumi??re","Luminosit??","Lune","Lutin","M??ridien","M??rite","M??thode","Ma??trise","Magie","Magnat","Majest??","Mammouth","Mercure","Merveille","Mill??naire","Mill??nium","Miracle","Mirage","Moment","Monstre","Moral","Motif","Myst??re","Mythique","N??buleuse","N??ud","Nature","Nimbe","Nimbus","Obsidienne","Olympien","Ombre","Onyx","Oracle","Orage","Orbite","Origine","Paladin","Paradoxe","Parall??le","Parangon","Passion","Patron","Perspective","Ph??nom??ne","Pionnier","Portrait","Poursuite","Pouss??e","Pr??sage","Pr??sence","Prestige","Prime","Prodige","Proph??tie","Protecteur","Provenance","Puissance","Puret??","Qu??te","R??solution","R??v??lation","R??verie","Ranger","Ren??gat","Renaissance","Rencontre","Royaume","Rune","S??duction","Sanctuaire","Scorpion","Scout","Serpent","Sommet","Sonnerie","Sorcellerie","Souhait","Spectre","Splendeur","Supr??matie","Symbole","Tendance","Tesson","Thriller","Tigresse","Titan","Tonnerre","Tourbillon","Tr??sor","Traceur","Tradition","Triomphe","Univers","Utopie","Vagabond","Vague","Vainqueur","Vautour","Vertu","Victoire","Vigueur","Vindicateur","Vip??re","Vision","Vitalit??","Volont??","Vortex","Voyage","Voyageur","Vue","Z??le","Z??nith"];
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
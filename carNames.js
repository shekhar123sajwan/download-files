function nameGen(type){
	var tp = type;
	var nm1 = ["Blast","Halo","Wolf","Fang","Eagle","Blade","Adventure","Aeon","Alabaster","Albatross","Apex","Astral","Augury","Aura","Aurora","Avalanche","Baron","Barrage","Basilisk","Behemoth","Blaze","Blend","Bliss","Blitz","Blizzard","Bolt","Buffalo","Bullet","Capital","Catalyst","Celestial","Centaur","Centurion","Charm","Chase","Climax","Cobra","Conqueror","Corsair","Cosmos","Crest","Crown","Crusader","Crux","Curiosity","Dawn","Daydream","Deputy","Desire","Dominion","Dragon","Dusk","Dynamics","Dynamo","Elysium","Eminence","Empire","Empyrean","Encounter","Enigma","Eon","Eos","Epiphany","Epitome","Escape","Essence","Eternity","Ethereal","Evolution","Excursion","Expedition","Falcon","Ferocity","Fire","Flow","Flux","Formula","Fragment","Freedom","Gallop","Grit","Guardian","Guerilla","Harmony","Heirloom","Hero","Hydra","Icon","Inception","Inferno","Inquiry","Instinct","Intro","Ivory","Jazz","Legacy","Legend","Liberty","Lightning","Lioness","Magic","Majesty","Mammoth","Marvel","Mastery","Meridian","Method","Might","Millenium","Mirage","Momentum","Moonlight","Morale","Motion","Motive","Mystery","Mythic","Nebula","Nimbus","Obsidian","Olympian","Onyx","Oracle","Orbit","Origin","Paladin","Paradox","Paragon","Parallel","Passion","Patron","Phantom","Phenomenom","Pinnacle","Portrait","Presence","Prestige","Prime","Prodigy","Prophecy","Prospect","Pulse","Purity","Pyre","Quest","Quicksilver","Radiance","Ranger","Raven","Reach","Realm","Reflect","Renegade","Resolve","Revelation","Roamer","Rune","Sanctuary","Scorpion","Scout","Serpent","Shadow","Silver","Sliver","Specter","Spire","Spirit","Spotlight","Sprite","Stardust","Starlight","Storm","Striker","Supremacy","Surge","Symbol","Tarragon","Temper","Temperament","Tempest","Thriller","Thunder","Tigress","Titan","Tracer","Tradition","Trailblazer","Treasure","Triumph","Twister","Umbra","Union","Universe","Utopia","Vagabond","Vanish","Vertex","Vigor","Vindicator","Viper","Virtue","Vision","Vortex","Voyage","Vulture","Warrior","Whim","Whirlpool","Wish","Zeal"];
	var nm2 = ["Éclat","Élan","Élysée","Éminence","Énergie","Énigme","Éon","Épiphanie","Éternité","Éthéré","Étoile","Évasion","Évolution","Accord","Aeon","Aigle","Albâtre","Albatros","Amour","Apex","Apogée","Argent","Astral","Aube","Augure","Aura","Aurore","Avalanche","Aventure","Baron","Barrage","Basilic","Beauté","Bison","Blitz","Blizzard","Buffle","Céleste","Capital","Catalyseur","Centaure","Centurion","Champion","Chance","Charme","Chasse","Chasseur","Cime","Clair de Lune","Climax","Cobra","Concorde","Conquérant","Corbeau","Corsaire","Cosmos","Couronne","Crépuscule","Crête","Croc","Croisé","Curiosité","Début","Député","Désir","Diligence","Domaine","Domination","Dragon","Dynamique","Dynamo","Empire","Empyrée","Enchantement","Envie","Esprit","Essence","Excursion","Expédition","Félicité","Férocité","Façon","Fanfare","Fantôme","Fantaisie","Faucon","Feu","Flèche","Flamme","Flux","Force","Formule","Foudre","Fougue","Fusion","Géant","Génie","Galop","Gardien","Grandeur","Gravier","Guérilla","Guerrier","Héritage","Héros","Halo","Harmonie","Hydre","Icône","Impulsion","Incendie","Indépendance","Inferno","Insigne","Instinct","Intro","Ivoire","Jazz","Légende","Léviathan","LAme","Libération","Liberté","Lionne","Loup","Lumière","Luminosité","Lune","Lutin","Méridien","Mérite","Méthode","Maîtrise","Magie","Magnat","Majesté","Mammouth","Mercure","Merveille","Millénaire","Millénium","Miracle","Mirage","Moment","Monstre","Moral","Motif","Mystère","Mythique","Nébuleuse","Nœud","Nature","Nimbe","Nimbus","Obsidienne","Olympien","Ombre","Onyx","Oracle","Orage","Orbite","Origine","Paladin","Paradoxe","Parallèle","Parangon","Passion","Patron","Perspective","Phénomène","Pionnier","Portrait","Poursuite","Poussée","Présage","Présence","Prestige","Prime","Prodige","Prophétie","Protecteur","Provenance","Puissance","Pureté","Quête","Résolution","Révélation","Rêverie","Ranger","Renégat","Renaissance","Rencontre","Royaume","Rune","Séduction","Sanctuaire","Scorpion","Scout","Serpent","Sommet","Sonnerie","Sorcellerie","Souhait","Spectre","Splendeur","Suprématie","Symbole","Tendance","Tesson","Thriller","Tigresse","Titan","Tonnerre","Tourbillon","Trésor","Traceur","Tradition","Triomphe","Univers","Utopie","Vagabond","Vague","Vainqueur","Vautour","Vertu","Victoire","Vigueur","Vindicateur","Vipère","Vision","Vitalité","Volonté","Vortex","Voyage","Voyageur","Vue","Zèle","Zénith"];
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
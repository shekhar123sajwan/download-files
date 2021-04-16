
var br = "";

function nameGen(type){
	var tp = type;
	var nm1 = ["Abduction","Adrift","Agency","Alarm","Ambush","Analyze","Anarchy","Anticipation","Ashes to Ashes","Assassins","Assemble","At Sea","Avant-Garde","Ax to Grind","Backbone","Bad Manners","Bankroll","Bankrupt","Beat the System","Bed of Roses","Beef Up","Best Guess","Big Hit","Biohazard","Black Arts","Black Market","Blessings","Blitzkreig","Blizzard","Bloodborn","Bolster","Bombardment","Bonedust","Boundaries","Brawl","Break Down","Breakdown","Brother Bother","Buccaneers","Bull's Eye","Burrow","Buzz","Carnage","Cast Down","Cat Burglar","Cat and Mouse","Champions","Charge","Chime In","Cipher","Clamor","Clandestine","Clash","Classified","Clear As Day","Cloak and Dagger","Cloud Nine","Cloudburst","Coffee Break","Coincidence","Collapse","Collision","Compass","Complot","Confinement","Conquest","Contrast","Cookie Crumbles","Counterplot","Countersign","Cross Swords","Crusade","Cryptic Crypts","Crystals","Cunning","Cured","Custody","Cut Loose","Daydream","Delight","Delusion","Deserted","Destiny","Devolution","Disclosed","Disguise","Dismantle","Dissaray","Dodge","Dominion","Double Trouble","Down the Drain","Dragon Slayer","Dreamland","Dynamite","Eclipse","Effigy","Eggs in One Basket","Embezzler","Emergency","Empower","Enchantments","Endurance","Enigma","Entangled","Entity","Envision","Escape","Espionage","Evolution","Exorcism","Expedition","Extermination","Extinction","False Pretense","Fame","Fame and Fortune","Fata Morgana","Fifty Fifty","Fighting Chance","Figments","Flabbergasted","Flourish","Fluke","Flush Out","Flying Colors","Focal Point","Foiled","Fool's Paradise","Forfeit","Forsaken","Foundations","Fracas","Gambol","Gem Jam","Generations","Getaway","Ghost Whisperer","Go For Broke","Go Under","Good Times","Gophers","Grand Slam","Grapple","Groundwork","Guerrilla","Guesstimation","Haphazard","Harmonize","Have a Look","Havoc","Hazard","Heat","Heave Ho","Heckler","Heirlooms","Held Captive","Hijacked","Hone In","Honesty","Horse Around","Hot Potato","Hunting Grounds","Hush Hush","Ignorance is Bliss","Illusions","Immunity","Impersonate","Impulse","In the Cards","Incognito","Inferno","Ingenuity","Inquire","Inside Out","Interference","Interruption","Intrusion","Invasion","Isolation","Jabber","Jackpot","Jaw Dropper","Jingle Jangle","Karma","Keep in Sight","Key Word","Kiss Goodbye","Knock Off","Knuckle Down","Lap of Luxury","Let Loose","Life Spark","Lightspeed","Lightyear","Limbo","Limelight","Loan Shark","Long Con","Long Shot","Loophole","Loyalty","Magic Number","Mania","Manipulation","Massacre","Mastery","Medium","Memento","Menace","Metamorphose","Miracles","Mismatch","Mithril","Mix It Up","Monarchy","Monkey Business","Morale","Morality","Mortal Beings","Moxie","Multiply","Mutation","Mystical Myths","Negotiations","Neutralize","Nightowl","No Prisoners","Nonsense","Nourish","Obliterate","Oblivion","Obscurity","Obsidian","Obsolete","Occult","Offhand","On The Rocks","On the Line","On the Prowl","One-Track Mind","Oomph","Open Sesame","Operator","Opposition","Oracle","Orbit","Order","Out of View","Out the Window","Overpower","Overthrow","Paradise","Password","Patterns","Peasants","Penumbra","Peons","Peril","Perish","Persistence","Phantom","Phobia","Pickpocket","Pilgrimage","Pitfall","Platform","Play With Fire","Plunge","Poppycock","Probe","Prodigy","Promotion","Prospects","Prosperity","Puppet Master","Pursuit","Quads","Quarrel","Quest","Rack and Ruin","Raise Dough","Rapture","Redemption","Reign","Reinforcements","Rejuvenate","Relics","Resources","Revelations","Rifts","Risky Business","Road to Ruin","Roll Back","Rope In","Safeguard","Savvy","Scot-Free","Scraps","Scrapyard","Scrimmage","Seasons","Secure","Sensations","Sentinels","Sequence","Serendipity","Set Sail","Set Up","Setback","Shackled","Shift Gears","Shipwreck","Shock Phase","Shore Up","Shortstop","Shot in the Dark","Show Off","Sidestep","Signal","Skirmish","Sleight of Hand","Sorcery","Speculation","Spotlight","Squires","Staged","Stay the Course","Steamroll","Stocks","Stones Unturned","Storm","Straitjacket","Streak of Luck","Strife","Stroke of Luck","Stupefy","Stupidity","Submerged","Subtlety","Surrender","Suspense","Suspension of Disbelief","Sustenance","Swamps","Swindle","Swindled","Switched","Tact","Take Away","Tempt Fate","Termination","Terra Form","The Shattering","The Skids","The Void","Thin Ice","Time Out","Top Secret","Torpedo","Tragedy","Train of Thought","Treachery","Tread the Boards","Treason","Trespasser","Trials and Tribulations","Trigger Finger","Trigger Happy","Trio","Triumph","Tug of War","Turn of the Cards","Twilight","Tycoons","Umbrage","Undead","Under Wraps","Under the Table","Undercover","Underground","Unforeseen","Utopia","Vanish","Venture","Voodoo","Wager","Wait Out","Way of Life","Wayward","Wildcat","Wipe Out","Wisdom","Wit","Without a Trace","Wrecking Ball","Wriggle Room","Yakkety Yak","Yields","Zoom In"];
	var nm2 = ["À Emporter","À Sang","À l'Enfer","À l'Envers","À la Dérive","Échappatoire","Échappe","Échec","Éclipse","Écuyers","Énigme","Épée de Dragons","Épées Croisées","Époustouflé","Évasion","Évolution","Abandonné","Absurdité","Accouchement","Accusé","Accusation","Affaire Risquée","Agence","Alarmé","Alarme!","Altercation","Anéantissement","Analysé","Anarchie","Année-Lumière","Anticipation","Ardeur","Arrogance","Arts Noirs","Assassins","Assemblé","Attendez","Au Contraire","Au Hasard","Avant-Garde","Avec Plaisir","Bénédictions","Bagarre","Bain de Sang","Balivernes","Bar Bagarre","Batte les Chances","Battre le Système","Bavardage","Biohazard","Bisou d'Adieu","Blitzkrieg","Bombardement","Bon Sens","Bon Temps","Booste","Boucaniers","Boulet de Démolition","Bouleversant","Boussole","Brouhaha","Brouillage","Célébrité","Cagnotte","Camisole de Force","Carillon","Carnage","Cendres à Cendres","Châtelains","Chaleur","Champions","Chance","Charge","Chat Cambrioleur","Chat et Cheval","Chat et Chien","Chat et Souris","Chiffre","Choc","Clair Comme de la Boue","Clair Comme une Cloche","Clameur","Clandestin","Classifié","Coïncidence","Coïncidence? Je crois que non!","Code Secret","Collapsus","Collision","Commande","Complot","Confusion","Conquête","Constraste","Contreplan","Contrsigné","Coupé","Coup de Chance","Coup de Fil","Coup de Veine","Créatures Mortelles","Crépuscule","Crevasses","Cristaux","Croisade","Cryptes Cryptiques","Débris","Décalage","Déguisement","Déjoué","Délaissé","Délice","Démolition","Désarroi","Déserté","Désinvolte","Désordre","Détention","Détourné","Dévolution","Destin","Devine","Diligence","Divin Devinant","Divulgué","Domination","Dommage","Double Trouble","Droit Divin","Dynamique","Dynamite","Effigie","Effondrement","Embuscade","Empire","En Garde","En Mer","En Route","En Suite","Enchaîné","Enchanté","Enchantements","Enchevêtré","Endurance","Enlèvement","Ensemble","Entité","Entreprise","Envisage","Escapades","Escarmouche","Espionnage","Esprit","Esprit Combatif","Esquive","Esroqué","Estimation","Exorcisme","Expédition","Extermination","Extinction","Façon de Penser","Failles","Faillite","Fantôme","Fantômes","Fantassins","Fariboles","Fausse Alarme","Faux Fantôme","Faux Phobie","Faux Positif","Faux Prétexte","Fidélité","Figments","Financer","Fissures","Florissant","Fond","Fondations","Forgait","Fourberie","Fraternité","Frontières","Fuite","Générations","Gambade","Garde","Gaufres","Gloire","Gloire et Fortune","Grand Chelem","Grand Plaisir","Grand Succès","Grappin","Grosse Affaire","Guéri","Guérilla","Guerre Éclair","Guet-Apens","Héritage","Habilité","Harmonise","Homologue","Honnêteté","Hors Service","Horse de Vue","Houle Ho","Illusion","Illusions","Imitateur","Imite","Immunité","Imprévu","Impulsion","Incognito","Incompatible","Infiltré","Ingéniosité","Ingérence","Interférence","Interruption","Intervention Divine","Intrus","Intrusion","Invasion","Invention","Irrésistible","Isolation","Isolement","Jardin des Fous","Jeter le Doute","Jouer Avec le Feu","Jugeote","Karma","Lacune","Le Refuge","Le Tout Pour le Tout","Le Tout Pour les Fous","Le Vide","Les Fonds","Limbo","Limite","Lit de Clous","Lit de Roses","Mémento","Métamorphose","Mêlée","Maître de la Marionnette","Maîtrise","Madame Énigme","Magie Noire","Magnats","Malfaiteur","Maniaque","Manipulation","Manteau et Poignard","Marais","Marché Noir","Masque","Massacre","Mauvaises Manières","Meilleur Ami","Menace","Mettre les Voiles","Miracles","Mithril","Modèles","Modèles de Comportement","Mode de Vie","Moitié-Moitié","Monarchie","Monte-En-l'Air","Moral","Moralité","Morgana","Mort-Vivant","Morts-Vivants","Mot de Passe","Mot-Clé","Mutation","Mythes Mystiques","Négociations","Naïveté","Naufragé","Naufrage","Neutralise","Nombre Magique","Nuage","Oblitéré","Obscurité","Obsidienne","Obsolète","Occulte","Oisseaux de Nuit","Ombrage","Onde de Choc","Oomph","Opérateur","Opposition","Oracle","Orage","Orbite","Ordre","Otage","Oubli","Pèlerinage","Pénombre","Péril","Panne","Panne Panique","Paradis","Paradis de Fou","Parasites","Pari","Pause Café","Pays de Rêves","Paysans","Peons","Persistance","Perspectives","Petit Café","Phobie","Piège","Pivot","Plate-Forme","Plonge","Point Focal","Poursuite","Prisonnière","Prix","Prodige","Promotion","Prospérité","Prudence","Quête","Quads","Quel Dommage","Quel Personnage","Quelle Quête","Quelle Surprise","Quelque Chose de Louche","Querelle","Règne","Rédemption","Révélation Divin","Révélations","Rêvasserie","Rêverie","Rachat","Rack et Ruine","Ravage","Ravissement","Rebelle","Recours","Regarde","Reliques","Remède","Remise","Rendements","Renforcement","Renforts","Renverse","Ressources","Restes","Revers","Rince","Rixe","Ruse","Ruse Russe","Séquence","Sérendipité","Sésame Ouvre-Toi","Sagesse","Saisons","Sans Laisser de Trace","Sans Os","Sauvegarde","Savvy","Sensations","Sentinelles","Sidéré","Siffleur","Signal","Silence","Sonde","Sorcellerie","Sororité","Sous la Table","Souterrain","Spéculation","Stupidité","Submergé","Subsistance","Subtilité","Suspense","Tact","Tempête","Tenter le Destin","Terminaison","Terraform","Terrain de Chasse","Terre à Terre","Terrier","Test d'Endurance","Tir à la Corde","Top Secret","Torpille","Touché","Tour de Main","Traîtrise","Tragédie","Trahison","Train de Pensée","Trombe","Tueur de Dragons","Urgence","Usuriers","Utopie","Vaudou","Ville du Dragon","Vitesse","Vitesse de la Lumière","Vol à la Tire","Vrombir","Zéro","d'Autre Part","l'Agence","l'Enfer","l'Ignorance est le bonheur","l'Or des Fous","la Manie"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			names = nm2[rnd];
			nm2.slice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd];
			nm1.slice(rnd, 1);
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
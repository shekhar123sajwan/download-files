var nm1 = ["Bancorp","Bancshares","Bank","Bank Corp.","Bank Group","Bank Inc.","Bank System","Banks","Banks Inc.","Corporation","Credit Union","Financial","Financial Corp.","Financial Group","Financial Holdings","Financial Inc.","Financial Services","Holding Company","Holdings","Holdings Inc.","Trust","Trust Corp."];
var nm4 = ["Banque","Corporation","Financier","Groupe","Société","Crédit","Caisse","Caisse Nationale","Crédit Nationale","Banque","Banque","Banque","Institution Financière"];

function nameGen(type){
	var tp = type;
	var nm2 = ["Absolute","Ace","Aegis","Agnate","Allied","Alpha","Apex","Apogee","Arcadia","Archetype","Armament","Ascension","Aspire","Associated","Assurance","Aurora","Azure","Bastion","Better Life","Big Heart","Bolt","Boon","Bright Horizon","Bulwark","Caliber","Capital","Celestial","Central","Champion","Citadel","Citizen Service","Citizen Union","Citizens First","City Ward","Cloud Nine","Clover","Cognate","Commonwealth","Community","Concorde","Connection","Core","Credence","Credit","Crest","Crown","Dawn","Diamond","Diligence","Domestic","Dominion","Duty","Edge","Elite","Elysium","Emblem","Eminence","Epitome","Essence","Esteem","Evolution","Excellence","Faith","Federal","Felicity","Fidelity","First","First Choice","First Guaranty","Flow","Focus","Foundation","Fountain","Free Citizen","Fundament","Gemstone","General","Generation","Genesis","Global Network","Globe","Gold Alliance","Gold Credit","Goldcorp","Golden Gates","Goldguard","Goldleaf","Goldward","Goodlife","Grade","Grand Credit","Grand Fortune","Grand Market","Grand Mutuel","Grand Spire","Grand Summit","Green Market","Green Valley","Groundwork","Her Majesty","High Rise","His Majesty","Joint","Jones","Kindred","Life Essence","Life Tree","Lifespark","Lightning","Marshall","Meridian","Midland","Miracle","Monolith","Nation","National","New Alliance","New Blossom","New Civil","New Connection","New Corporate","New Edge","New Generation","New Heights","New Horizon","New Leaf","New Life","New National","New Sense","New Wave","New Wealth","Obelisk","Obsidian","Ocean","Oculus","Omega","One Capital","One Duty","One Nation","Origin","Padlock","Paradise","Paragon","Paramount","Phoenix","Pillar","Pinnacle","Polestar","Premium","Prime","Primo","Principal","Principle","Private","Private Citizen","Prominence","Prosperity","Provenance","Pulse","Purity","Pursuit","Reliance","Repose","Republic Citizens","Resolution","Rose","Royal Crown","Sky High","Skyward","Snowflake","Soar","Solace","Soul","South Trust","Sparkle","Spotlight","Spring","Springwell","Sprout","State","Sublime","Summit","Sunray","Surge","Syndicate","Trust","Trustcorp","United","Value","Velvet","Vertex","Victory","Vigor","Virtue","Vitality","Voyage","Ward","Wellness","Wellspring","Zenith","Zion"];
	var nm3 = ["Âme","Éclat","Égide","Élite","Élysée","Éminence","Énergie","État Clair","Étincelle","Étoile","Évolution","Absolu","Ace","Allié","Alliance d'Or","Alpha","Apex","Apogée","Arbre de Vie","Archétype","Armement","As","Ascension","Aspirer","Associé","Assurance","Aube","Augmentation","Aurore","Avantage","Axial","Azur","Bénédiction","Bastion","Bien-être","Bonne Vie","Bord","Céleste","Cœur","Cadenas","Calibre","Capital","Central","Point Central","Champion","Cime","Citadelle","Citoyen Libre","Citoyen Privé","Citoyens Républicains","Colonne","Communauté","Concorde","Confiance","Connexion","Consolation","Conviction","Courage","Couronne","Couronne Royale","Crête","Croyance","Début","Dépendance","Devoir","Diamant","Diligence","Droit","Emblème","Esprit","Essence","Essence de Vie","Estime","Excellence","Fédéraliste","Félicité","Faîte","Fidélité","Flux","Fond","Fondation","Fondement","Fontaine","Génération","Garantie","Garde","Garde d'Or","Gemme","Genèse","Globe","Grand Cœur","Grand Crédit","Grand Mutuel","Grand sommet","Grande Cime","Grande Fortune","Grande Hauteur","Honneur","Illimité","Importance","Insigne","Jointure","Loyauté","Lumière","Méridien","Mérite","Majesté","Maréchal","Meilleure Vie","Merveille","Miracle","Mission","Monolithe","Nation","Neige","Nouveau Bord","Nouveau Sens","Nouveaux Horizons","Nouvelle Alliance","Nouvelle Civile","Nouvelle Connexion","Nouvelle Entreprise","Nouvelle Fleur","Nouvelle Frontière","Nouvelle Génération","Nouvelle Richesse","Nouvelle Vie","Nouvelles Hauteurs","Obélisque","Obsidienne","Océan","Oculaire","Oméga","Onyx","Origine","Paradis","Parangon","Parenté","Phénix","Poursuite","Poussée","Pousse","Première Garantie","Premier Choix","Prime","Principal","Principe","Privé","Proéminence","Prodige","Projecteur","Prospérité","Provenance","Pureté","Qualité","Réconfort","Réseau Mondial","Résident","Résolution","Rayon","Relation","Rempart","Ressort","Rive","Rose","Service Citoyen","Sion","Solution","Sommet","Source","Souverein","Statue","Sublime","Suprême","Syndicat","Total","Trèfle","Triomphe","Un Capital","Une Nation","Uni","Unifié","Union Citoyenne","Unité","Valeur","Vallée Verte","Vedette","Velours","Verrou","Vertu","Victoire","Vigueur","Vivacité","Voyage","Zénith"];
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm3.length | 0;
			rnd2 = Math.random() * nm4.length | 0;
			names = nm4[rnd2] + " " + nm3[rnd];
			nm3.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			names = nm2[rnd2] + " " + nm1[rnd];
			nm2.splice(rnd2, 1);
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
var names1 = ["","","","","","","","","","","","","","","","","","","","","","b","c","d","f","g","h","k","l","m","n","p","r","s","t","v","y","ch","sh","ph","br","cr","dr","gr","kr","pr","str","vr","wr","bh","rh","kh"];
var names2 = ["a","e","i","o","u"];
var names3 = ["sh","ch","ph","cr","dr","gr","str","cl","gl","kl","b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","bb","cc","dd","gg","kk","ll","mm","nn","pp","rr","ss","tt"];
var names4 = ["a","e","i","o","u","a","e","i","o","u","ea","eo","ia","io"];
var names5 = [" Bud"," Grain"," Grass"," Husk"," Kernel"," Leaf"," Nut"," Petal"," Root"," Shoot"," Spore"," Stalk","bacca","bi","ce","cely","cory","cress","damom","damon","der","fras","frass","fron","gane","gano","ge","gella","ger","gon","grass","jora","joram","ka","kam","kawa","lantro","lary","lery","ley","li","lic","lica","lla","lt","ltro","me","meg","meric","min","mine","misa","mom","mon","mric","namon","nder","nel","nip","nis","nise","ntro","nut","para","per","rage","ram","ran","raway","rel","rian","ric","rica","rice","rika","rise","rlic","ron","rrel","rry","rway","ry","sabi","sbi","seed","shell","shil","sia","sil","sley","so","sop","ssop","th","tro","ve","ves","vil","way","yenne"];

var names6 = ["Abyss","Angel","Arctic","Ash","Assassin","Autumn","Bitter","Black","Blister","Blood","Blue","Brown","Bruise","Candy","Cave","Cavern","Cinder","Cliff","Demon","Devil","Dragon","Drake","Dream","Earth","Elephant","Ember","Emerald","Fade","Fire","Flux","Forest","Golden","Hate","Hazel","Heart","Hibernation","Ice","Ivory","Jade","King's","Nettle","Knot","Lake","Love","Mage","Mammoth","Mellow","Mercy","Monk's","Moon","Mountain","Mud","Ocean","Orange","Peace","Pearl","Pygmy","Queen's","Rain","Red","River","Ruby","Sanguine","Sapphire","Sea","Shimmer","Silk","Snowy","Sorrow","Sour","Spark","Spring","Star","Stinky","Storm","Summer","Sun","Swamp","Sweet","Thorn","Thunder","Tiger","Tundra","Venom","Viper","Void","Water","White","Wild","Winter","Witch's","Wolf","Worm","Yellow"];
var names7 = ["Angelica","Anise","Aniseed","Avens","Barberry","Bark","Basil","Bay Leaf","Blossom","Borage","Caraway","Cardamom","Cassia","Catnip","Celery","Chervil","Chicory","Chives","Cilantro","Cinnamon","Clary","Clove","Coriander","Cress","Cudweed","Cumin","Curry Leaf","Dill","Dill Seed","Fennel","Fenugreek","Flower","Galangal","Garlic","Ginger","Grains","Grass","Herb","Hyssop","Lavender","Leaf","Leaves","Licorice","Lovage","Mace","Mallow","Marjoram","Mint","Moss","Mustard","Nigella","Nutmeg","Oregano","Paprika","Parsley","Pepper","Peppermint","Petal","Quassia","Root","Rosemary","Rue","Safflower","Saffron","Sage","Salt","Sassafras","Savory","Seed","Shiso","Sorrel","Spearmint","Spice","Sumac","Tarragon","Thyme","Turmeric","Vanilla","Bloom","Tea Leaf","Ivy","Weed","Creeper","Vine"];

var nm1 = ["Échalote","Absinthe","Ache","Achillée","Amande","Arachide","Badiane","Balsamine","Bergamote","Bourrache","Câpre","Camomille","Cannelle","Cardamome","Casse","Ciboulette","Citronnelle","Coriandre","Coumarine","Feuille","Lavande","Lime","Livèche","Mélisse","Maniguette","Marjolaine","Menthe","Monarde","Moutarde","Nigelle","Noix","Oseille","Pimprenelle","Réglisse","Rue","Sarriette","Sauge","Vanille","Verveine","Zédoaire","Ail","Ajowan","Aneth","Anis","Basilic","Céleri","Cacao","Carmin","Carvi","Cerfeuil","Chili","Citron","Clou","Combava","Cubèbe","Cumin","Curcuma","Curry","Estragon","Fenouil","Fenugrec","Galanga","Gingembre","Grain","Hysope","Laurier","Madère","Mahaleb","Millepertuis","Mouron","Myrte","Oignon","Origan","Paprika","Pavot","Persil","Pignon","Piment","Poivre","Raifort","Rocou","Romarin","Sésame","Safran","Sel","Serpolet","Souci","Soumbala","Sumac","Sureau","Tamarin","Thé","Thym","Wasabi"];
var nm2a = ["Émeraude","Acide","Aigre","Amer","Angélique","Blanc","Bleu","Brun","Géant","Glacial","Jaune","Moelleux","Noir","Orange","Puant","Pygmée","Rouge","Sanguin","Sauvage","Sombre","Velouté","d'Éléphant","d'Émeraude","d'Épine","d'Été","d'Étincelle","d'Étoile","d'Abîme","d'Abysse","d'Amour","d'Ange","d'Assassin","d'Automne","d'Eau","d'Hibernation","d'Hiver","d'Incendie","d'Inondation","d'Ivoire","d'Océan","d'Or","d'Orage","de Bonbon","de Boue","de Braise","de Bulle","de Cœur","de Canard","de Caverne","de Cendre","de Chagrin","de Charbon","de Chatoiement","de Cloque","de Démon","de Diable","de Diamant","de Douleur","de Dragon","de Falaise","de Feu","de Flamme","de Flux","de Forêt","de Froideur","de Glace","de Grâce","de Grotte","de Haine","de Jade","de Lac","de Loup","de Lueur","de Lune","de Magie","de Mammouth","de Marais","de Mer","de Moine","de Montagne","de Nœud","de Neige","de Paix","de Perle","de Pluie","de Printemps","de Rêve","de Rêverie","de Rivière","de Rubis","de Sang","de Saphir","de Satin","de Soie","de Soleil","de Sorcières","de Tempête","de Tigre","de Tonnerre","de Toundra","de Venin","de Ver","de Vide","de Vipère","de la Reine","du Roi"];
var nm2b = ["Émeraude","Acide","Aigre","Amère","Angélique","Blanche","Bleue","Brune","Géante","Glaciale","Jaune","Moelleuse","Noire","Orange","Puante","Pygmée","Rouge","Sanguine","Sauvage","Sombre","Veloutée"];
var nm3 = ["bala","cao","che","chide","dère","de","feuil","fort","fran","gan","gelle","gnon","gon","guette","lée","laine","leri","let","lette","li","lic","lisse","llée","lle","lote","marin","me","ment","mille","min","mine","mome","mote","nde","ndre","ne","nelle","neth","nga","nnelle","nthe","rache","ran","rde","reau","ri","rier","rine","ron","rtuis","sil","sse","the","tuis","veine"];
var br = "";

function nameGen(type){
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(i < 5){
				rnd = Math.random() * names1.length | 0;
				rnd2 = Math.random() * names2.length | 0;
				rnd3 = Math.random() * names3.length | 0;
				if(rnd > 41){
					while(rnd3 < 11){
						rnd3 = Math.random() * names3.length | 0;
					}
				}
				rnd4 = Math.random() * names4.length | 0;
		}
		if(tp === 1){
			if(i < 5){
				rnd5 = Math.random() * nm3.length | 0;
				if(names1[rnd] === ""){
					names = names2[rnd2].toUpperCase() + names3[rnd3] + names4[rnd4] + nm3[rnd5];
				}else{
					names = names1[rnd].charAt(0).toUpperCase() + names2[rnd2] + names3[rnd3] + names4[rnd4] + nm3[rnd5];
				}
			}else{
				rnd = Math.random() * nm1.length | 0;
				rnd2 = Math.random() * nm2a.length | 0;
				if(rnd < 40 && rnd2 < 21){
					names = nm1[rnd] + " " + nm2b[rnd2];
				}else{
					names = nm1[rnd] + " " + nm2a[rnd2];
				}
			}
		}else{
			if(i < 5){
				rnd5 = Math.random() * names5.length | 0;
				if(names1[rnd] === ""){
					names = names2[rnd2].toUpperCase() + names3[rnd3] + names4[rnd4] + names5[rnd5];
				}else{
					names = names1[rnd].charAt(0).toUpperCase() + names2[rnd2] + names3[rnd3] + names4[rnd4] + names5[rnd5];
				}
			}else{
				rnd = Math.random() * names6.length | 0;
				rnd2 = Math.random() * names7.length | 0;
				names = names6[rnd] + " " + names7[rnd2];
			}
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
var names1=["a","e","i","o","u","","","","","","","","","","","","","","","","","","","","","","","","",""];var names2=["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","z","br","cr","dr","fr","gr","kr","pr","str","tr","bl","cl","fl","gl","kl","pl","sl","ch","ph","sh"];var names3=["a","e","i","o","u","a","e","i","o","u","ea","ao","ee","oo","io","eo","ou"];var names4=["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","z","br","cr","dr","fr","gr","kr","pr","str","tr","bl","cl","fl","gl","kl","pl","sl","ch","ph","sh","bb","cc","dd","gg","kk","ll","mm","nn","pp","rr","ss","tt"];var names5=[" Berry"," Root"," Fruit"," Grass"," Wheat"," Seed"," Pea"," Nut"," Pepper"," Flower"," Bean","bage","bber","ber","ble","ca","can","cane","cao","ce","ch","chin","chio","cra","der","dis","drin","ds","flower","gar","ger","go","gus","kin","la","lar","le","ley","lic","lion","live","lla","llar","llion","lon","lone","mat","mber","me","meg","mel","melo","men","min","mon","mond","mp","na","nach","nder","ne","nel","nell","nelo","nger","ngin","ngo","ni","nip","nna","nnel","nola","nt","ntin","nto","nut","pe","per","phe","pper","ra","rab","rey","rgus","riak","rin","rine","rli","rlin","rn","rom","rot","rry","ry","sam","same","save","seed","sh","sil","sley","ss","star","ster","tarin","te","terd","tine","to","tro","ts","tus","va","ve","ver","x","ya","yoca","yot","ze"];var nm5=["blon","ca","cao","che","cine","coli","combre","cot","cre","dis","fle","flour","gle","gnon","gue","huète","ja","la","li","lic","llard","lle","lo","lon","lote","mélo","mbo","mbre","me","ment","min","mme","mome","nais","nane","nard","nde","ndre","ne","neau","neth","ngue","nioc","nné","nne","nola","non","nthe","ntine","nvre","rave","rbe","rde","re","reau","rge","rges","ri","rine","rise","rme","ron","rsil","same","sin","smin","sse","sson","tarde","te","thame","tine","tron","tte","tue","ve","vet","vre","vron","yote"];var names6=["Abyss","Angel","Arctic","Arrow","Ash","Autumn","Bitter","Black","Blister","Blood","Blue","Broad","Brown","Bruise","Candy","Cave","Cavern","Cinder","Cliff","Demon","Devil","Dragon","Drake","Dream","Earth","Ember","Emerald","Fade","Fire","Flux","Forest","Golden","Ground","Guinea","Hate","Hazel","Heart","Hybernation","Hybrid","Ice","Ivory","Jade","King's","Knot","Lake","Love","Mage","Mammoth","Mellow","Mercy","Moon","Mountain","Mud","Ocean","Peace","Pygmy","Rain","Red","River","Ruby","Sanguine","Sapphire","Sea","Shimmer","Silk","Snowy","Sorrow","Sour","Spring","Star","Stinky","Storm","Summer","Sun","Swamp","Sweet","Thorn","Thunder","Tiger","Tundra","Venom","Viper","Void","Water","White","Wild","Winter","Wolf","Worm","Yellow"];var names7=["Almond","Apple","Asparagus","Banana","Barley","Basil","Beans","Beets","Broccoli","Cabbage","Cacao","Cane","Canola","Cardamom","Carrot","Cassava","Cauliflower","Celeriac","Celery","Chayote","Cherry","Chili","Cilantro","Clementine","Clover","Coconut","Coffee","Collard","Corn","Cotton","Cress","Cucumber","Date","Dill","Fennel","Fig","Flax","Garlic","Ginger","Grape","Grass","Guava","Hemp","Henna","Hop","Jasmine","Jute","Kale","Kohlrabi","Lavender","Leek","Lemon","Lettuce","Lime","Mace","Maize","Mandarin","Mango","Melon","Mint","Mushroom","Mustard","Nectarine","Nutmeg","Nuts","Oats","Okra","Olive","Onion","Papaya","Parsley","Parsnip","Pea","Peach","Peanut","Pear","Pecan","Pepper","Pistachio","Plum","Pomelo","Potato","Prune","Pumpkin","Radish","Rice","Root","Rubber","Rye","Safflower","Scallion","Seeds","Sesame","Soy","Spinach","Sprouts","Squash","Sugar","Tangerine","Tapioca","Tea","Tomato","Turnip","Vanilla","Wheat","Yam","Zucchini"];var nm7=["Amande","Asperges","Banane","Betterave","Cacahuète","Canne","Cardamome","Carotte","Cerise","Chayote","Citrouille","Clémentine","Coriandre","Courge","Courgette","Datte","Figue","Goyave","Graine","Herbe","Igname","Laitue","Lavande","Mandarine","Mangue","Menthe","Moutarde","Nectarine","Noix","Olive","Orge","Pêche","Papaye","Pistache","Poire","Pomme","Pousse","Prune","Racine","Tomate","Vanille","Échalote","Épinard","Ail","Aneth","Avoine","Basilic","Blé","Brocoli","Céleri","Céleri-Rave","Cacao","Café","Canola","Carthame","Champignon","Chanvre","Chili","Chou","Chou-Rave","Choufleur","Citron","Collard","Concombre","Coton","Cresson","Fenouil","Germe","Gingembre","Gombo","Haricot","Henné","Houblon","Jasmin","Jute","Lin","Maïs","Manioc","Melon","Navet","Oignon","Panais","Persil","Piment","Poireau","Pois","Poivre","Poivron","Pomélo","Pruneau","Radis","Raisin","Riz","Sésame","Seigle","Soja","Sucre","Tapioca","Thé","Trèfle"];var nm8a=["Émeraude","Aigre","Amer","Arctique","Blanc","Bleu","Brun","Glacial","Jaune","Marron","Moelleux","Noir","Noisette","Polaire","Puant","Pygmée","Rouge","Sanguin","Sauvage","Sombre","Sucré","d'Épine","d'Été","d'Étoiles","d'Amour","d'Ange","d'Automne","d'Eau","d'Hibernation","d'Hiver","d'Hybride","d'Incendie","d'Ivoire","d'Or","d'Orage","de Bonbon","de Boue","de Braise","de Cœur","de Canard","de Cendre","de Chagrin","de Charité","de Chatoiement","de Contusion","de Démon","de Diable","de Diamant","de Douleur","de Dragon","de Feu","de Flèche","de Flamme","de Flux","de Fond","de Glace","de Grâce","de Haine","de Jade","de Loup","de Magie","de Mammouth","de Neige","de Paix","de Pitié","de Pluie","de Printemps","de Rêverie","de Rêves","de Rubis","de Sang","de Saphir","de Soie","de Sucre","de Tempête","de Terre","de Tigre","de Tonnerre","de Tranquillité","de Venin","de Ver","de Vipère","de l'Abîme","de l'Abysse","de l'Arctique","de l'Océan","de la Caverne","de la Falaise","de la Forêt","de la Grotte","de la Lune","de la Mer","de la Montagne","de la Reine","de la Rivière","de la Terre","de la Toundra","du Fleuve","du Lac","du Marais","du Roi","du Sol","du Soleil"];var nm8b=["Émeraude","Aigre","Amère","Arctique","Blanche","Bleue","Brune","Glaciale","Jaune","Marrone","Moelleuse","Noire","Noisette","Polaire","Puante","Pygmée","Rouge","Sanguine","Sauvage","Sombre","Sucrée"];function nameGen(type){var tp=type;var br="";var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){if(i<5){rnd=Math.random()*names1.length|0;rnd2=Math.random()*names2.length|0;rnd3=Math.random()*names3.length|0;if(i<2){if(tp===1){rnd4=Math.random()*nm5.length|0;names=names1[rnd]+names2[rnd2]+names3[rnd3]+nm5[rnd4];}else{rnd4=Math.random()*names5.length|0;names=names1[rnd]+names2[rnd2]+names3[rnd3]+names5[rnd4];}
names=names.charAt(0).toUpperCase()+names.slice(1);}else{rnd6=Math.random()*names4.length|0;rnd5=Math.random()*names3.length|0;if(rnd3>9){while(rnd5>9){rnd5=Math.random()*names3.length|0;}}
if(tp===1){rnd4=Math.random()*nm5.length|0;names=names1[rnd]+names2[rnd2]+names3[rnd3]+names4[rnd6]+names3[rnd5]+nm5[rnd4];}else{rnd4=Math.random()*names5.length|0;names=names1[rnd]+names2[rnd2]+names3[rnd3]+names4[rnd6]+names3[rnd5]+names5[rnd4];}
names=names.charAt(0).toUpperCase()+names.slice(1);}}else{if(tp===1){rnd=Math.random()*nm7.length|0;rnd2=Math.random()*nm8a.length|0;if(rnd<41&&rnd2<21){names=nm7[rnd]+" "+nm8b[rnd2];}else{names=nm7[rnd]+" "+nm8a[rnd2];}}else{rnd=Math.random()*names6.length|0;rnd2=Math.random()*names7.length|0;names=names6[rnd]+" "+names7[rnd2];}}
br=document.createElement('br');element.appendChild(document.createTextNode(names));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
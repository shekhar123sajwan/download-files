var nm2=["Affliction","Contagion","Death","Epidemic","Infestation","Outbreak","Pandemic","Plague","Scourge"];var nm3=["l'Éclosion","l'Épidémie","l'Affliction","la Contagion","la Effection","la Infestation","la Mort","la Pandémie","la Peste","le Décès","le Fléau"];function nameGen(type){var nm1=["Aberration","Abnormality","Alpha","Ancient","Annihilation","Anomaly","Apex","Aquatic","Austere","Bare","Barren","Berserker","Bitter","Black","Bleak","Blind","Blinding","Burning","Chaos","Chronic","Crazed","Creeping","Crippling","Crusty","Curtains","Dawn","Deadline","Dehydration","Delirium","Deluge","Delusion","Demise","Desperate","Desperation","Deviation","Dire","Doom","Dread","Dusk","Ebon","End","Ending","Extinction","Extreme","Extremist","Feral","Fierce","Finale","Forlorn","Fragment","Frenzy","Frozen","Fuming","Funereal","Fury","Futile","Global","Gloom","God","Grave","Great","Grievous","Grim","Grisly","Horrid","Howling","Hysteria","Illusion","Immortal","Inferior","Inhuman","Insanity","Invincible","Ire","Iron","Ivory","K.O.","Last","Laughing","Limbo","Lingering","Lost","Lunacy","Lunar","Lurking","Mad","Malevolent","Mania","Maniac","Massacre","Merciless","Molten","Morose","Mortal","Necrosis","Necrotic","Neglect","Neglected","Neurosis","Nightmare","Oblivion","Obsidian","Omega","Onyx","Original","Paragon","Particle","Phantom","Pinnacle","Prime","Primeval","Primitive","Primordial","Rabid","Radical","Reaper","Recurring","Relentless","Repose","Returning","Ruthless","Sadistic","Savage","Scalding","Second","Shadow","Silence","Silent","Singularity","Sleeper","Sleeping","Smothering","Solar","Spasm","Stark","Storm","Stubborn","Superior","Tearing","Terminal","Terminus","Terror","Third","Titan","Tomb","Torture","Turbulent","Twilight","Uncontrollable","Underestimated","Unseen","Veiled","Vertex","Violent","Void","Vortex","White","Wild","Wildlife","World","Wretched","Zombie"];var nm4a=["Âpre","Ébène","Étouffant","Abandonné","Acharné","Affreux","Agité","Amer","Ancien","Aquatique","Ardent","Aride","Atroce","Austère","Aveuglant","Aveugle","Barbare","Blanc","Bouillant","Brûlant","Brutal","Caché","Chaotique","Chronique","Croustillant","Cruel","Crustacé","Cuisant","Délirant","Désespéré","Dernière","Endormi","Enflammé","Enragé","Extrémiste","Extrême","Féroce","Fanatique","Fantôme","Farouche","Fatal","Fondu","Fou","Fragmenté","Fumant","Funèbre","Furieux","Futile","Gelé","Glacé","Global","Grave","Grimpant","Hurlant","Immortel","Impitoyable","Implacable","Incontrôlable","Incurable","Inférieur","Inhumain","Initial","Invincible","Invisible","Lugubre","Lunaire","Macabre","Malveillant","Maniaque","Misérable","Mondial","Morne","Morose","Mortel","Muet","Nécrotique","Négligé","Nautique","Noir","Original","Pénible","Paralysant","Pelé","Perdu","Persistant","Primitif","Primordial","Récurrent","Radical","Rampant","Ridicule","Rigide","Sévère","Sadique","Sans Pitié","Sauvage","Silencieux","Solaire","Sous-Estimé","Stérile","Supérieur","Têtu","Tenace","Terminal","Terrible","Titanesque","Turbulent","Violent","Voilé","d'Aberrations","d'Alpha","d'Annihilation","d'Anomalie","d'Anormalité","d'Apex","d'Aube","d'Aurore","d'Extinction","d'Hystérie","d'Illusion","d'Inondation","d'Insanité","d'Ivoire","d'Obscurité","d'Obsidienne","d'Oméga","d'Ombre","d'Onyx","d'Orage","d'Oubli","d'Ouragan","de Berserker","de Cauchemar","de Cessation","de Chaos","de Colère","de Coup de Grâce","de Courroux","de Crépuscule","de Crainte","de Délire","de Déluge","de Démence","de Désespoir","de Déshydration","de Désinence","de Déviation","de Date Limite","de Dernière Date","de Dieu","de Disparation","de Dormeurs","de Faucheur","de Faune","de Fer","de Fin","de Final","de Folie","de Frénésie","de Fureur","de Limbo","de Maniaques","de Manie","de Massacre","de Monde","de Mort","de Nécrose","de Négligence","de Névrose","de Pénombre","de Parangon","de Particules","de Perte","de Rigolade","de Ruine","de Silence","de Singularité","de Sommeil","de Sommet","de Spasme","de Tempête","de Terminaison","de Terminus","de Terreur","de Titan","de Tombe","de Tombeau","de Torture","de Vide","de Voile","de Vortex","de Zombi","de la Singularité","des Dormeurs","des Zombis","du Faucheur","du Siècle","du Tombe","du Vide"];var nm4b=["Âpre","Ébène","Étouffante","Abandonnée","Acharnée","Affreuse","Agitée","Amère","Ancienne","Aquatique","Ardente","Aride","Atroce","Austère","Aveuglante","Aveugle","Barbare","Blanche","Bouillante","Brûlante","Brutale","Cachée","Chaotique","Chronique","Croustillante","Cruelle","Crustacée","Cuisante","Délirante","Désespérée","Dernière","Endormie","Enflammée","Enragée","Extrémiste","Extrême","Féroce","Fanatique","Fantôme","Farouche","Fatale","Fondue","Folle","Fragmentée","Fumante","Funèbre","Furieuse","Futile","Gelée","Glacée","Globale","Grave","Grimpante","Hurlante","Immortelle","Impitoyable","Implacable","Incontrôlable","Incurable","Inférieure","Inhumaine","Initiale","Invincible","Invisible","Lugubre","Lunaire","Macabre","Malveillante","Maniaque","Misérable","Mondiale","Morne","Morose","Mortelle","Muette","Nécrotique","Négligée","Nautique","Noire","Originale","Pénible","Paralysante","Pelée","Perdue","Persistante","Primitive","Primordiale","Récurrente","Radicale","Rampante","Ridicule","Rigide","Sévère","Sadique","Sans Pitié","Sauvage","Silencieuse","Solaire","Sous-Estimée","Stérile","Supérieure","Têtue","Tenace","Terminale","Terrible","Titanesque","Turbulente","Violente","Voilée","d'Aberrations","d'Alpha","d'Annihilation","d'Anomalie","d'Anormalité","d'Apex","d'Aube","d'Aurore","d'Extinction","d'Hystérie","d'Illusion","d'Inondation","d'Insanité","d'Ivoire","d'Obscurité","d'Obsidienne","d'Oméga","d'Ombre","d'Onyx","d'Orage","d'Oubli","d'Ouragan","de Berserker","de Cauchemar","de Cessation","de Chaos","de Colère","de Coup de Grâce","de Courroux","de Crépuscule","de Crainte","de Délire","de Déluge","de Démence","de Désespoir","de Déshydration","de Désinence","de Déviation","de Date Limite","de Dernière Date","de Dieu","de Disparation","de Dormeurs","de Faucheur","de Faune","de Fer","de Fin","de Final","de Folie","de Frénésie","de Fureur","de Limbo","de Maniaques","de Manie","de Massacre","de Monde","de Mort","de Nécrose","de Négligence","de Névrose","de Pénombre","de Parangon","de Particules","de Perte","de Rigolade","de Ruine","de Silence","de Singularité","de Sommeil","de Sommet","de Spasme","de Tempête","de Terminaison","de Terminus","de Terreur","de Titan","de Tombe","de Tombeau","de Torture","de Vide","de Voile","de Vortex","de Zombi","de la Singularité","des Dormeurs","des Zombis","du Faucheur","du Siècle","du Tombe","du Vide"];var br="";var tp=type;var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){if(tp===1){rnd=Math.random()*nm3.length|0;rnd2=Math.random()*nm4a.length|0;if(3<10){names=nm3[rnd]+" "+nm4b[rnd2];}else{names=nm3[rnd]+" "+nm4a[rnd2];}
nm4a.splice(rnd2,1);nm4b.splice(rnd2,1);}else{rnd=Math.random()*nm1.length|0;rnd2=Math.random()*nm2.length|0;names="The "+nm1[rnd]+" "+nm2[rnd2];nm1.splice(rnd,1);}
br=document.createElement('br');element.appendChild(document.createTextNode(names));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
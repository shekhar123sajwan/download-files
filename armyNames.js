var nm2 = ["a","e","i","o","u","ae","ai","ao","au","aa","ee","ea","ei","eo","eu","ia","ie","io","iu","oa","oe","oi","oo","ou","ua","ue","ui","uo","uu","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var nm3 = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","br","cr","dr","fr","gr","kr","pr","qr","sr","tr","vr","wr","yr","zr","str","bl","cl","fl","gl","kl","pl","sl","vl","yl","zl","ch","kh","ph","sh","yh","zh"];
var nm4 = ["uphis","uex","ortex","ourax","ophrax","obax","iris","irkus","itox","iphis","iprax","ilius","ephix","ercis","erix","ax","axis","arix","apex","echos","aell","aen","aerion","ahir","ahr","akir","alim","aral","ard","argon","arid","aron","arun","ate","atir","avi","efral","earal","elin","elior","elnach","elno","elun","emir","enmir","enron","eod","eodar","erum","examp","exor","ezran","iad","iann","ichor","icor","ikra","ilam","imbar","imm","inba","iqor","iwarn","ixior","ixor","izar","och","odor","odum","oirik","oldar","olim","olm","oluwa","om","oqir","ored","orion","outor","ouzran","oxir","ozran","uard","uern","uhr","ul","ulim","ulkahr","uln","ulrik","umanir","uqiat","urad","utir","utron","uweth","uxir","uxron","uyar","uzrak"];
var nm4b = ["ikra","inba","oluwa","elior","exor","ichor","icor","iqor","ixior","ixor","odor","outor","uxron","utron","orion","enron","aron","argon","aerion","elin","uex","ortex","ourax","ophrax","obax","itox","iprax","ephix","erix","ax","arix","apex","aell","aen","ahir","ahr","akir","alim","aral","ard","arid","arun","ate","atir","avi","efral","earal","elnach","elno","elun","emir","enmir","eod","eodar","erum","examp","ezran","iad","iann","ilam","imbar","imm","iwarn","izar","och","odum","oirik","oldar","olim","olm","om","oqir","ored","ouzran","oxir","ozran","uard","uern","uhr","ul","ulim","ulkahr","uln","ulrik","umanir","uqiat","urad","utir","uweth","uxir","uyar","uzrak","echos","axis","ercis","ilius","iphis","uphis","iris","irkus"];


function nameGen(type){
	var tp = type;
	var nm1 = ["Angels","Black Brigade","Black Devils","Black Saints","Black Sheep","Black Wings","Blessed Battalion","Blood Bandits","Blood Battalion","Blood Brigade","Broken Brigade","Cardinal Command","Cardinal Company","Cardinal Corps","Cataclysm Corps","Challengers","Chosen","Clan","Cloud","Cluster","Congregate","Contract","Covert Battalion","Covert Company","Covert Corps","Crimsom Cloud","Crimson Clan","Crimson Commander","Crimson Company","Crimson Contract","Crimson Corps","Crimson Crew","Crimson Curators","Crimson Keepers","Crimson Wings","Crush","Crushing","Culling Cavalry","Curators","Dark Division","Death Corps","Death's Angels","Death Division","Death Formation","Death Pack","Death Patrol","Death Platoon","Death Squad","Demons","Destiny Division","Dogs","Doom Corps","Doom Squad","Doomed Ones","Ebon Enders","Ebon Eyes","Ebon Wings","Eclipse","Extinction","Extras","Final Division","Final Flight","Final Flock","Final Regiment","Fire Battalion","Fire Flight","Fire Troops","Flaming Army","Flaming Battalion","Flaming Flock","Flock","Forgotten Army","Forgotten Battalion","Forgotten Soldiers","Forsaken","Forsaken Army","Forsaken Battalion","Forsaken Flock","Forsaken Soldiers","Great Army","Great Company","Great Guard","Great Guardians","Guard","Guardians","Hallowed Herd","Hallowed Horde","Hallowed Host","Hell Hosts","Hell Squad","Hellfire Horde","Hellfire Legion","Hellfire Squad","Hellhounds","Herd","Hidden","Hollow Herd","Hollow Horde","Hollow Host","Hopeless","Horde","Host","Hounds","Illustrious","Immortals","Invincibles","Keepers","Last Division","Last Hope","Last Legion","Last Regiment","Legion","Marauders","Maroon Marauders","Maroon Martyrs","Maroon Mob","Maroon Myriad","Martyrs","Mob","Myriad","New Leadership","New Order","Night","Opposition","Order","Pacifists","Peace Bringers","Peace Corps","Phalanx","Pillagers","Preservers","Prime Battalion","Prime Platoon","Prime Preservers","Punishment","Pure","Pure Battalion","Pure Platoon","Rangers","Ravagers","Rebels","Red Rangers","Red Regiment","Red Riders","Reserve","Reserve Regiment","Retired","Robed Riders","Rose Regiment","Rose Riders","Ruby Regiment","Ruby Riders","Ruthless","Ruthless Ravagers","Ruthless Regiment","Saints","Sanguine Sentinels","Sanguine Shepherds","Sanguine Shroud","Sanguine Soldiers","Sanguine Squad","Sanguine Sundry","Sanguine Swarm","Sentinels","Serpent Soldiers","Serpent Squad","Shadow","Shepherds","Shroud","Siege Battalion","Silver Lining","Silver Soldiers","Silver Squad","Silver Swarm","Sundry","Super Soldiers","Supervisors","Supreme Army","Supreme Battalion","Supreme Command","Supreme Regiment","Swarm","Terror Troops","Thunder Troops","Titans","True Order","Trust Troops","Undefeated","Unforgiven","Union","Unstoppables","Vanquishers","Velvet Vanquishers","Velvet Veil","Velvet Victors","Venom Troops","Victors","Vortex","Void","Wardens","Watchdogs","White Wardens","White Wings"];
	var nm5 = ["l'??clipse","l'??crasement","l'??quipe Infernale","l'Accord","l'Arm??e Abandonn??e","l'Arm??e Infernale","l'Arm??e Oubli??e","l'Arm??e Sacr??e","l'Arm??e d'Enfer","l'Arm??e de Feu","l'Escadron","l'Escadron de la Mort","l'Essaim","l'Essaim d'Enfer","l'Extinction","l'H??te","l'Opposition","l'Ordre","la Bousculade","la Brigade Bris??e","la Brigade Noire","la Brigade de Mort","la Brigade du Sang","la Cavalerie Cardinale","la Cavalerie Cramoisie","la Commande Cardinale","la Commande Cramoisie","la Commande Pure","la Commande Secr??te","la Commande Supr??me","la Commande de Destin","la Commande de Si??ge","la Commande du Cataclysme","la Compagnie Cardinale","la Compagnie Cramoisi","la Compagnie Secr??te","la Compagnie de Feu","la Compagnie des Flammes","la Compagnie du Cataclysme","la Congr??gation","la Derni??re Arm??e","la Derni??re Disivion","la Derni??re L??gion","la Division Diabolique","la Division Finale","la Division Sombre","la Division de D??mons","la Division de Destin","la Doublure d'Argent","la Famille","la Foule","la Grande Arm??e","la Grande Division","la Grappe","la L??gion","la Masse","la Myriade Majestueuse","la Myriade d'Enfer","la Myriade de Mort","la Nouvelle Commande","la Nouvelle Direction","la Nuit","la Patrouille de la Mort","la Phalange","la Phalange d'Enfer","la Premi??re Arm??e","la Premi??re Division","la Punition","la R??serve","la R??serve Rouge","la R??sistance","la R??sistance Immortelle","la R??sistance Impitoyable","la R??sistance Rouge","la Tache","la Tribu","le Bataillon Abandonn??","le Bataillon B??ni","le Bataillon Blanc","le Bataillon Bris??","le Bataillon Impitoyable","le Bataillon Infernal","le Bataillon Oubli??","le Bataillon Pur","le Bataillon Secret","le Bataillon de Feu","le Bataillon de Mort","le Bataillon de Paix","le Bataillon de Si??ge","le Bataillon des Flammes","le Bataillon du Sang","le Ch??timent","le Clan","le Clan Cramoisi","le Contract","le Contract Cramoisi","le Dernier Bataillon","le Dernier Espoir","le Dernier R??giment","le Feu de l'Enfer","le Garde","le Grand Bataillon","le Mouton Noir","le Nuage","le Nuage Cramoisi","le Premier Bataillon","le Premier Espoir","le R??giment Final","le R??giment Rouge","le R??giment Supr??me","le Troupeau","le Vide","le Vol Final","le Vortex","les Abandonn??s","les Adversaires","les Ailes Blanches","les Ailes Cramoisies","les Ailes Noires","les Ailes d'??b??nes","les Anges","les Anges Gardiens","les Anges de Mort","les Bandits de Sang","les Bassets","les Bergers","les Braises d'??b??nes","les Cavaliers","les Challengeurs","les Chiens","les Chiens d'Enfer","les Chiens de Garde","les Choisis","les Condamn??s","les Conservateurs","les Conservatueurs","les Curateurs","les Curateurs Cramoisis","les D??laiss??s","les D??mons","les D??sesp??r??s","les Diables Noirs","les Extras","les Forestiers","les Gardiens","les Gardiens Abandonn??s","les Gardiens Cramoisis","les Gardiens Sacr??s","les Immortels","les Immortels Incarnats","les Impitoyables","les Impossibles","les Inarr??tables","les Invaincus","les Invincibles","les Maraudeurs","les Maraudeurs Majestueux","les Maraudeurs Maniaques","les Martyrs","les Martyrs Maniaques","les Obscurs","les Ombres","les Ombres d'Enfer","les Pacifistes","les Pacifistes d'Enfer","les Pillards","les Porteurs de Mort","les Porteurs de Paix","les Provocateurs","les Purs","les Rangers","les Rangers Rouges","les Rangers de Rubis","les Rangers de la Rose","les Ravageurs","les Rebelles","les Rebelles Rouges","les Rebelles de Rubis","les Rebelles de la Rose","les Rempla??ants","les Retrait??s","les Saints","les Saints Noirs","les Sentinelles","les Sentinelles Sacr??es","les Sentinelles Sanguines","les Sentinelles Serpentines","les Sentinelles Supr??mes","les Sentinelles d'Enfer","les Soldats Abandonn??s","les Soldats Infernaux","les Soldats Oubli??s","les Soldats Sacr??s","les Soldats Sanguins","les Soldats Serpentins","les Soldats Supr??mes","les Soldats d'Argent","les Titans","les Vainqueurs","les Vainqueurs Vides","les Yeux d'??b??nes"];
	nm6 = [];
	var nm7 = ["el Anfitri??n","el Anfitri??n del Infierno","el Batall??n Bendito","el Batall??n Blanco","el Batall??n Encubierto","el Batall??n Principal","el Batall??n Puro","el Batall??n de Paz","el Batall??n de Plata","el Batall??n de Sangre","el Castigo","el Clan Carmes??","el Congregar","el Contrato","el Contrato Carmes??","el Cuerpo ??ltimo","el Cuerpo Abandonado","el Cuerpo Cardinal","el Cuerpo Carmes??","el Cuerpo Encubierto","el Cuerpo Final","el Cuerpo Hueco","el Cuerpo Nuevo","el Cuerpo Ocioso","el Cuerpo Oculto","el Cuerpo Santificado","el Cuerpo de ??bano","el Cuerpo de Fatalidad","el Cuerpo de Fuego","el Cuerpo de Muerte","el Cuerpo de Paz","el Cuerpo del Cataclismo","el Eclipse","el Ej??rcito Encubierto","el Ej??rcito Final","el Ej??rcito Mudo","el Ej??rcito Oculto","el Enjambre","el Enjambre del Infierno","el Escarmiento","el Gran Ej??rcito","el Guardia","el Hueco","el L??gion","el Liderazgo Nuevo","el Mando ??ltimo","el Mando Cardinal","el Mando Carmes??","el Nubarr??n","el Orden Mudo","el Orden Nuevo","el Pelet??n de Muerte","el Pelot??n Principal","el Pelot??n Puro","el Pelot??n de Plata","el Racimo","el Reba??o","el Regimiento Encubierto","el Regimiento Rojo","el Regimiento de Reserva","el Regimiento de Rosa","el Regimiento de Rub??es","el Regimiento del Infierno","el Sudario","el Sudario de Sombra","el V??rtice","el Vac??o","el Vuelo de Fuego","la Aglomeraci??n","la Bandada Cardinal","la Brigada Negra","la Brigada Rota","la Brigada de Sangre","la Caballer??a","la Caballer??a de Sacrificio","la Camarilla","la Compa??ia ??ltima","la Compa??ia Abandonada","la Compa??ia Cardinal","la Compa??ia Encubierta","la Compa??ia Hueca","la Compa??ia Nueva","la Compa??ia de Destino","la Compa??ia de Fatalidad","la Compa??ia de Muerte","la Compa??ia de Paz","la Compa??io Santificada","la Declaraci??n","la Divisi??n Final","la Divisi??n Oscura","la Divisi??n de ??bano","la Divisi??n de Destino","la Divisi??n de Muerte","la Escuadra de Fatalidad","la Escuadra de Fuego","la Escuadra de Muerte","la Escuadra del Infierno","la Extinci??n","la Falange","la Falange de Muerte","la Formaci??n de Muerte","la Gran Compa??ia","la Gran Manada","la Horda","la Manada","la Manada Oculta","la Manada de Muerte","la Muchedumbre","la Multitud de Muerte","la Noche","la Nube","la Nube Carmes??","la Nube de la Noche","la Oposici??n","la Orden","la Paliza","la Pandilla Carmes??","la Patrulla de Muerte","la Reserva","la Reserva Roja","la Sombra","la Uni??n","las Alas Negras","las Alas de ??bano","las Ovejas Negras","las Tropas","las Tropas de Terror","las Tropas de Trueno","lo Oculto","los Abandonados","los Angeles","los Angeles de Muerte","los Bandidos de Sangre","los Caballeros","los Centinelas","los Centinelas Serpentinos","los Condenados","los Conservadores","los Controladores","los Curadores","los Curadores de Crismon","los Demonios","los Demonios Negros","los Desafiadors","los Desesperados","los Despiadados","los Devastadores","los Devastadores Despiadados","los Diablos","los Diablos Negros","los Escogidos","los Extras","los Guardabosques","los Guardi??ns de Crismon","los Guardianes","los Guardias","los Ilustres","los Imparables","los Imperdonables","los Inmortales","los Invencibles","los Invictos","los Jubilados","los M??rtires","los Merodeadores","los Merodeadores de Muerte","los Pacifistas","los Pastores","los Pastores Puros","los Pastores de Paz","los Pastores de Sombra","los Perros","los Perros Guardianes","los Perros Negros","los Perros de ??bano","los Perros de Fuego","los Perros de Muerte","los Perros del Infierno","los Portadores de Muerte","los Portadores de Paz","los Portadores de Plata","los Puros","los Rebeldes","los Rebeldes Rojos","los Santos","los Santos Negros","los Santos Ocultos","los Santos Serpentinos","los Saqueadores","los Saqueadores Ocultos","los Segadores","los Soldados Serpentinos","los Soldados Supremos","los Soldados de Sombra","los Supervisores","los Vagabundos","los Vencedores","los Vencedores de Veneno","los Muertos Eternos","los Muertos Mudos"];
	nm8 = [];
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			$('#placeholder').css('textTransform', 'inherit');
			if(i < 6){
				rnd0 = Math.random() * nm5.length | 0;
				names = nm5[rnd0];
				nm5.splice(rnd0, 1);
			}else{
				rnd0 = Math.random() * nm2.length | 0;
				rnd1 = Math.random() * nm3.length | 0;
				rnd2 = Math.random() * nm4.length | 0;
				if(nm2[rnd0] === ""){
					if(rnd2 < 20){
						nm6 = ["le ","la ","les "];
					}else{
						nm6 = ["le ","la "];
					}
				}else{
					if(rnd2 < 20){
						nm6 = ["l'","les "];
					}else{
						nm6 = ["l'"];
					}
				}
				rnd3 = Math.random() * nm6.length | 0;
				if(nm6[rnd3] === "l'"){
					names = nm6[rnd3] + nm2[rnd0].charAt(0).toUpperCase() + nm2[rnd0].slice(1) + nm3[rnd1] + nm4[rnd2];
				}else{
					names = nm6[rnd3] + nm3[rnd1].charAt(0).toUpperCase() + nm3[rnd1].slice(1) + nm4[rnd2];
				}
			}
		}else if(tp === 2){
			$('#placeholder').css('textTransform', 'inherit');
			if(i < 6){
				rnd0 = Math.random() * nm7.length | 0;
				names = nm7[rnd0];
				nm7.splice(rnd0, 1);
			}else{
				rnd0 = Math.random() * nm2.length | 0;
				rnd1 = Math.random() * nm3.length | 0;
				rnd2 = Math.random() * nm4.length | 0;
				if(rnd2 < 3){
					nm8 = ["el"];
				}else{
					nm8 = ["el ","la "];
				}
				rnd3 = Math.random() * nm6.length | 0;
				if(nm6[rnd3] === "l'"){
					names = nm8[rnd3] + nm2[rnd0].charAt(0).toUpperCase() + nm2[rnd0].slice(1) + nm3[rnd1] + nm4[rnd2];
				}else{
					names = nm8[rnd3] + nm3[rnd1].charAt(0).toUpperCase() + nm3[rnd1].slice(1) + nm4[rnd2];
				}
			}
		}else{
			$('#placeholder').css('textTransform', 'capitalize');
			if(i < 6){
				rnd0 = Math.random() * nm1.length | 0;
				names = "The " + nm1[rnd0];
				nm1.splice(rnd0, 1);
			}else{
				rnd0 = Math.random() * nm2.length | 0;
				rnd1 = Math.random() * nm3.length | 0;
				rnd2 = Math.random() * nm4.length | 0;
				names = "The " + nm2[rnd0] + nm3[rnd1] + nm4[rnd2];
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
var nm1 = ["Algal","Bare","Barren","Dense","Dwarf","Hard","Pygmy","Scorched","Scorch","Scrub","Tender","Wild","Nettle","Shadow","Splint","Splinter","Mad","Gentle","Spring","Summer","Winter","Autumn","Fall","Snow","Iron","Wise","Clever","Cunning","Sharp","Bland","Taint","Tainted","Mellow","Weeping","Tender","Kind","Soft","Quiet","Silent","Mild","Bitter","Cruel","Mean","Vine","Black","Gray","Charred","Burn","Burned"];
var nm2 = ["acorn","alder","ash","beech","birch","cedar","cherry","cypress","elm","fir","juniper","larch","locust","maple","oak","peach","pine","poplar","spruce","walnut","willow","yew","tree","hazel","twig","trunk","root","nut","trunk","herb","limb","beard","leaf","husk","spur","sprout","wood","stump","thorn","talon","blossom","leg","legs","limbs","tendril"];
var nm3 = ["Acorn","Alder","Ash","Beech","Birch","Cedar","Cherry","Cypress","Elm","Fir","Juniper","Larch","Locust","Maple","Oak","Oaken","Peach","Pine","Poplar","Spruce","Walnut","Willow","Yew","Tree","Hazel","Thistle"];
var nm4 = ["bark","beard","blade","bramble","nettle","spray","bush","shell","husk","claw","fang","talon","paw","crown","fern","copse","scrub","flesh","fury","grove","covert","stand","herb","leaf","growl","howl","trunk","root","bellow","roar","snarl","shade","shadow","flower","blossom","limb","lock","spine","pad","needle","stalk","splint","splinter","spur","twig","stub","stump","shrub","skin","thorn","tip","tooth","twig","wood","burn","scar","eye","brow","sprout","tendril"];

var nm5 = ["Abies","Acacia","Acca","Acer","Adansonia","Aesculus","Agathis","Agonis","Albizia","Aleurites","Alianthus","Alnus","Amalanchier","Amborella","Amentotaxus","Anacardium","Annona","Anogeissus","Antiaris","Aralia","Araucaria","Arbutus","Ardisia","Areca","Arenga","Argania","Artocarpus","Asimina","Athrotaxis","Azadirachta","Baccharis","Bactris","Bauhinia","Betula","Bombax","Borassus","Bourreria","Brachylaena","Brahea","Brosimum","Broussonetia","Bucida","Bursera","Busus","Butia","Byrsonima","Caesalpinia","Callistemon","Callitris","Calocedrus","Calophyllum","Calyptranthes","Canella","Capparis","Caragana","Carica","Carpinus","Carya","Caryota","Cassia","Castanea","Castanopsis","Castilla","Casuarina","Catalpa","Cecropia","Cedrela","Cedrus","Ceiba","Celtis","Ceratonia","Cercis","Chamaecyparis","Chilopsis","Cinnamomum","Citrus","Cladrastis","Clethra","Clusia","Cocos","Coffea","Combretum","Copernicia","Cordia","Cordyline","Cornus","Corylus","Corymbia","Corypha","Crataehus","Cupressus","Cussonia","Cycas","Cyrilla","Dacrycarpus","Dacrydium","Delonix","Diospyros","Dracaena","Drypetes","Durio","Elaeagnus","Elaeis","Elliottia","Erica","Eriobotrya","Erythrina","Eucommia","Eugenia","Euonymus","Euphorbia","Fagus","Ficu","Firmiana","Fraxinus","Garcinia","Ginkgo","Gleditsia","Gonystylus","Gordonia","Grevillea","Guibourtia","Gymnanthes","Halesia","Hamamelis","Harpullia","Hevea","Hibiscus","Hippomane","Howea","Hymenaea","Hyophorbe","Ilex","Illicium","Inga","Jacaranda","Jubaea","Juglans","Juniperus","Kalopanax","Khaya","Kigelia","Kokia","Laburnum","Lagunaria","Laurus","Lecythis","Leucaena","Licaria","Liquidambar","Liriodendron","Litchi","Lithocarpus","Livistona","Lodoicea","Lysiloma","Machaerium","Maclura","Magnolia","Malpighia","Malus","Mangifera","Maranthes","Maytenus","Medusagyne","Melia","Meryta","Metopium","Michelia","Millettia","Mimosa","Moringa","Morus","Musa","Myoporum","Myrica","Myristica","Myrsine","Myrtus","Nectandra","Nerium","Nyssa","Olea","Ostrya","Palaquium","Parrotia","Paulownia","Peltogyne","Pentaclethra","Persea","Phellodendron","Phytelephas","Picea","Pinus","Piscidia","Pistacia","Platanus","Plumeria","Populus","Prosopis","Prunus","Psidium","Pyrus","Quercus","Radermachera","Raphia","Rhapis","Rhizophora","Rhododendron","Rhus","Robinia","Sabal","Salix","Salvadora","Sambucus","Sapium","Sassafras","Schaefferia","Schefflera","Senegalia","Sequioa","Serenoa","Shorea","Sideroxylon","Sondias","Sophora","Sorbus","Stewartia","Syagrus","Syringa","Tabebuia","Taiwania","Talipariti","Tamarix","Taxandria","Taxus","Tectona","Tetradium","Theobroma","Thevetia","Thuja","Tilia","Tipuana","Toona","Torreya","Trema","Triadica","Tristaniopsis","Ulmus","Vachellia","Vernicia","Vitex","Wodyetia","Wollemia","Xylosma","Yucca","Zelkova"];
var nm6 = ["ael","aema","aern","aiol","al","allee","an","anis","ar","ara","arian","arrel","at","aurel","aya","ede","el","ellan","endar","endil","endor","enth","er","erae","erel","ern","eros","es","eth","etor","ewyn","ian","iel","ien","ies","il","ild","ill","ille","in","ion","ira","is","ise","ith","iun","ius","on","or","oris","os","oss","oth","uin","us","yl","yll","yn","ynn","yr","yra"];
var nm7 = ["d","h","l","n","s","t"];
var nm8 = ["a","e","i","o","u","y"];

function nameGen(){
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(i < 5){
			nTp = Math.random() * 2 | 0;
			if(nTp === 0){
				rnd = Math.random() * nm1.length | 0;
				rnd2 = Math.random() * nm2.length | 0;
				names = nm1[rnd] + nm2[rnd2];
			}else{
			rnd = Math.random() * nm3.length | 0;
			rnd2 = Math.random() * nm4.length | 0;
			names = nm3[rnd] + nm4[rnd2];
			}
		}else{
			rnd = Math.random() * nm5.length | 0;
			rnd2 = Math.random() * nm5[rnd].length | 0;
			rnd3 = Math.random() * nm6.length | 0;
			if(rnd2 < 3){
				rnd2 = 3;
			}
			nMs = nm5[rnd].slice(0, rnd2);
			lsChar = nMs.slice(-1);
			if(nm8.includes(lsChar)){
				rnd4 = Math.random() * nm7.length | 0;
				names = nMs + nm7[rnd4] + nm6[rnd3];
			}else{
				names = nMs + nm6[rnd3];
			}
			names = names + " (" + nm5[rnd] + ")";
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
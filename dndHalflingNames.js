var nm1 = ["An","Ar","Bar","Bel","Con","Cor","Dan","Dav","El","Er","Fal","Fin","Flyn","Gar","Go","Hal","Hor","Ido","Ira","Jan","Jo","Kas","Kor","La","Lin","Mar","Mer","Ne","Nor","Ori","Os","Pan","Per","Pim","Quin","Quo","Ri","Ric","San","Shar","Tar","Te","Ul","Uri","Val","Vin","Wen","Wil","Xan","Xo","Yar","Yen","Zal","Zen"];
var nm2 = ["ace","amin","bin","bul","dak","dal","der","don","emin","eon","fer","fire","gin","hace","horn","kas","kin","lan","los","min","mo","nad","nan","ner","orin","os","pher","pos","ras","ret","ric","rich","rin","ry","ser","sire","ster","ton","tran","umo","ver","vias","von","wan","wrick","yas","yver","zin","zor","zu"];
var nm3 = ["An","Ari","Bel","Bre","Cal","Chen","Dar","Dia","Ei","Eo","Eli","Era","Fay","Fen","Fro","Gel","Gra","Ha","Hil","Ida","Isa","Jay","Jil","Kel","Kith","Le","Lid","Mae","Mal","Mar","Ne","Ned","Odi","Ora","Pae","Pru","Qi","Qu","Ri","Ros","Sa","Shae","Syl","Tham","Ther","Tryn","Una","Uvi","Va","Ver","Wel","Wi","Xan","Xi","Yes","Yo","Zef","Zen"];
var nm4 = ["alyn","ara","brix","byn","caryn","cey","da","dove","drey","elle","eni","fice","fira","grace","gwen","haly","jen","kath","kis","leigh","la","lie","lile","lienne","lyse","mia","mita","ne","na","ni","nys","ola","ora","phina","prys","rana","ree","ri","ris","sica","sira","sys","tina","trix","ula","vira","vyre","wyn","wyse","yola","yra","zana","zira"];

function nameGen(type){
	$('#placeholder').css('textTransform', 'capitalize');
	var nm12 = ["amber","apple","autumn","barley","big","boulder","bramble","bright","bronze","brush","cherry","cinder","clear","cloud","common","copper","deep","dust","earth","elder","ember","fast","fat","fern","flint","fog","fore","free","glen","glow","gold","good","grand","grass","great","green","haven","heart","high","hill","hog","humble","keen","laughing","lea","leaf","light","little","lone","long","lunar","marble","mild","mist","moon","moss","night","nimble","proud","quick","raven","reed","river","rose","rumble","shadow","silent","silver","smooth","soft","spring","still","stone","stout","strong","summer","sun","swift","tall","tea","ten","thistle","thorn","toss","true","twilight","under","warm","whisper","wild","wise"];
	var nm13 = ["ace","barrel","beam","belly","berry","bloom","blossom","bluff","bottle","bough","brace","braid","branch","brand","bridge","brook","brush","cheeks","cloak","cobble","creek","crest","dance","dancer","dew","dream","earth","eye","eyes","feet","fellow","finger","fingers","flow","flower","foot","found","gather","glide","grove","hand","hands","hare","heart","hill","hollow","kettle","lade","leaf","man","mane","mantle","meadow","moon","mouse","pot","rabbit","seeker","shadow","shine","sky","song","spark","spell","spirit","step","stride","sun","surge","top","topple","vale","water","whistle","willow","wind","wood","woods"];
	var tp = type;
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
		}
		rnd = Math.random() * nm12.length | 0;
		rnd2 = Math.random() * nm13.length | 0;
		while(nm12[rnd] === nm13[rnd2]){
			rnd2 = Math.random() * nm13.length | 0;
		}
		nMs = nMs + " " + nm12[rnd] + nm13[rnd2];
		nm12.splice(rnd, 1);
		nm13.splice(rnd2, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}

function nameFem(){
	rnd = Math.floor(Math.random() * nm3.length);
	rnd2 = Math.floor(Math.random() * nm4.length);
	nMs = nm3[rnd] + nm4[rnd2];
}

function nameMas(){
	rnd = Math.floor(Math.random() * nm1.length);
	rnd2 = Math.floor(Math.random() * nm2.length);
	nMs = nm1[rnd] + nm2[rnd2];
	testSwear(nMs);
}
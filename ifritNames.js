var nm1 = ["","","","","","b","bh","d","dh","g","gh","h","j","k","m","n","r","s","sh","y","z"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","aa","ee","ua","ai","oo"];
var nm3 = ["b","bb","br","d","h","k","kh","m","n","nq","q","s","sh","sm","ss","sf","st","t","z","zz"];
var nm4 = ["b","bb","d","h","k","m","n","r","rr","rh","s","sh","ss","z","zz"];
var nm5 = ["","","","","d","f","l","m","n","sh","z"];

var nm6 = ["","","","","","","","","f","g","gh","h","j","k","kh","l","m","n","ph","r","s","sh","t","th","w","y","z"];
var nm7 = ["a","e","i","o","u","a","a","i","a","e","i","o","u","a","a","i","a","e","i","o","u","a","a","i","aa","ee","ai","ia"];
var nm8 = ["b","d","dh","dr","f","ff","l","ll","m","mn","r","s","sh","ss","t","th","w","y","z"];
var nm9 = ["d","f","ff","l","ll","m","n","r","s","ss","t","w","y","z"];
var nm10 = ["","","","","","","","","h","l","n"];

var nm11 = ["","","","","","bh","d","dh","g","gh","h","j","k","kh","m","n","r","s","sh","y","z"];
var nm12 = ["a","e","i","o","u","a","a","i","a","e","i","o","u","a","a","i","a","e","i","o","u","a","a","i","aa","ee","ai"];
var nm13 = ["b","bb","d","h","kh","l","m","n","r","rr","s","sh","ss","t","th","z","zz"];
var nm14 = ["b","d","h","l","ll","m","n","r","rr","s","ss","t","y","z","zz"];
var nm15 = ["","","","h","l","m","n","s","z"];

var nm16 = ["abyss","anger","arch","ardor","arid","ash","beam","bitter","blaze","bleak","boil","broken","burn","burst","chaos","cinder","coal","crimson","crisp","cruel","dark","dead","death","demon","devil","doom","dust","ember","fervor","fiery","fire","flak","flame","flare","fuel","fume","gas","ghost","gloom","gold","grand","grim","half","hate","haze","heat","hell","hollow","hot","idle","infernal","inferno","keen","last","light","livid","mad","nether","pain","pit","power","prime","pyre","quick","rabid","red","rue","ruin","shift","smoke","soot","sore","sorrow","spark","spell","steam","storm","sun","tomb","twist","war","warm","white","wicked","wild","wretched"];
var nm17 = ["bane","beam","beast","bellow","blade","blaze","blight","blood","born","bound","brand","bringer","chest","child","cloak","crest","crown","drifter","edge","eye","eyes","fang","flayer","forge","forged","fury","gaze","gift","grip","heart","heat","hell","hide","host","light","mane","march","mask","might","mind","more","mourn","pest","power","rage","reaper","reaver","rush","shape","shift","shine","side","skin","spark","spell","spine","spite","star","steam","stew","storm","strike","striker","surge","sworn","twist","veil","watch","will"];

var br = "";

function nameGen(type){
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(i < 5){
			nTp = Math.random() * 4 | 0;
			rnd = Math.floor(Math.random() * nm6.length);
			rnd2 = Math.floor(Math.random() * nm7.length);
			rnd3 = Math.floor(Math.random() * nm8.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			rnd5 = Math.floor(Math.random() * nm10.length);
			while(nm8[rnd3] === nm6[rnd]){
				rnd3 = Math.floor(Math.random() * nm8.length);
			}
			if(nTp < 2){
				names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm10[rnd5];
			}else{
				rnd6 = Math.floor(Math.random() * nm9.length);
				rnd7 = Math.floor(Math.random() * nm7.length);
				while(nm9[rnd6] === nm8[rnd3]){
					rnd6 = Math.floor(Math.random() * nm9.length);
				}
				if(nTp === 2){
					names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd6] + nm7[rnd7] + nm10[rnd5];
				}else{
					names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd6] + nm7[rnd7] + nm7[rnd4] + nm10[rnd5];
				}
			}
		}else{
			rnd = Math.floor(Math.random() * nm16.length);
			rnd2 = Math.floor(Math.random() * nm17.length);
			names = nm16[rnd] + nm17[rnd2];
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
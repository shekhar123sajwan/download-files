var nm1 = ["","","","","","d","g","j","k","kh","kj","n","q","s","t","v","x"];
var nm2 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","a","aa"];
var nm3 = ["f","fr","ffr","ff","hg","hk","hn","hr","hvf","hvfr","j","lr","lv","lvf","n","nr","rr","rv","rvf","rf","rg","rs","rsh","s","sh","ss","v","vr","vf","vfr"];
var nm4 = ["","","","","d","g","k","l","n","r","z"];

var nm5 = ["","","","","d","dh","f","h","j","l","m","n","s","y"];
var nm6 = ["a","e","i","o","a","a","o"];
var nm7 = ["f","ff","fr","hr","hn","hv","hf","hfr","hvf","hvr","l","lv","ls","lsh","n","nn","ns","nr","nv","nvf","r","rr","sh","shr","shv","shf","st","v","vf","vfr"];
var nm8 = ["a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","a","e","aa","ae"];
var nm9 = ["h","l","n","r","y","z"];
var nm10 = ["a","e","i","a","e","i","a","e","i","a","e","i","a","a","aa","ae","ia"];
var nm11 = ["","","","","","f","h","l","n"];

var nm12 = ["","","","","","d","g","kj","n","q","qj","r","s","sh","sj","t","v","x"];
var nm13 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","a","a","o","o","e","e","ie","ee","aa"];
var nm14 = ["d","f","g","m","n","r","rsh","s","v","vr","vfr","vf"];
var nm15 = ["a","e","a","e","a","e","a","e","aa","ae","ia"];
var nm16 = ["","","","","d","f","k","l","n","r","v"];

var check = ["anal","anus","arse","ass","balls","bastard","biatch","bigot","bitch","bollock","bollok","boner","boob","bugger","bum","butt","clitoris","cock","coon","crap","cunt","damn","dick","dildo","dyke","fag","feck","felching","fellate","fellatio","flange","fuck","gay","lust","goddamn","homo","jackass","jerk","jizz","knobend","labia","muff","nigga","nigger","niggers","penis","piss","poop","prick","pube","pussy","queer","scrotum","sex","shit","slut","smegma","spunk","tit","tosser","turd","twat","vagina","wank","whore","wtf"];

var br = "";

function nameGen(type){
	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		nTp = Math.random() * 3 | 0;
		if(nTp === 0){
			rnd = Math.random() * nm12.length | 0;
			rnd2 = Math.random() * nm13.length | 0;
			rnd3 = Math.random() * nm14.length | 0;
			rnd4 = Math.random() * nm15.length | 0;
			sNm = nm12[rnd] + nm13[rnd2] + nm14[rnd3] + nm15[rnd4];
		}else if(nTp === 1){
			sNm = "de";
		}else{
			sNm = "";
		}
		nSr = Math.random() * 2 | 0;
		rnd = Math.random() * nm12.length | 0;
		rnd2 = Math.random() * nm13.length | 0;
		rnd5 = Math.random() * nm16.length | 0;
		if(nSr === 1){
			while(nm12[rnd] === nm16[rnd5]){
				rnd5 = Math.random() * nm16.length | 0;
			}
			lNm = sNm + " " + nm12[rnd] + nm13[rnd2] + nm16[rnd5];
		}else{
			rnd3 = Math.random() * nm14.length | 0;
			rnd4 = Math.random() * nm15.length | 0;
			while(nm14[rnd3] === nm12[rnd] || nm14[rnd3] === nm16[rnd5]){
				rnd3 = Math.random() * nm14.length | 0;
			}
			lNm = sNm + " " + nm12[rnd] + nm13[rnd2] + nm14[rnd3] + nm15[rnd4] + nm16[rnd5];
		}
		if(tp === 1){
			rnd = Math.random() * nm5.length | 0;
			rnd2 = Math.random() * nm6.length | 0;
			rnd3 = Math.random() * nm7.length | 0;
			rnd4 = Math.random() * nm8.length | 0;
			rnd5 = Math.random() * nm11.length | 0;
			while(nm7[rnd3] === nm5[rnd] || nm11[rnd5] === nm7[rnd3]){
				rnd3 = Math.random() * nm7.length | 0;
			}
			if(i < 5){
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm8[rnd4] + nm11[rnd5] + " " + lNm;
			}else{
				rnd6 = Math.random() * nm9.length | 0;
				rnd7 = Math.random() * nm10.length | 0;
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm8[rnd4] + nm9[rnd6] + nm10[rnd7] + nm11[rnd5] + " " + lNm;
			}
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			rnd3 = Math.random() * nm5.length | 0;
			if(i < 3){
				while(rnd < 5){
					rnd = Math.random() * nm1.length | 0;
				}
				while(rnd3 < 4 || nm5[rnd3] === nm1[rnd]){
					rnd3 = Math.random() * nm5.length | 0;
				}
				names = nm1[rnd] + nm2[rnd2] + nm5[rnd3] + " " + lNm;
			}else{
				rnd4 = Math.random() * nm3.length | 0;
				rnd5 = Math.random() * nm2.length | 0;
				while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm5[rnd3]){
					rnd4 = Math.random() * nm3.length | 0;
				}
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd5] + nm5[rnd3] + " " + lNm;
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
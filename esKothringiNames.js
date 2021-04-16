var nm1 = ["","","","","b","br","ch","d","dr","g","gr","h","l","ll","m","n","s","sh","sr","z"];
var nm2 = ["ae","uu","aa","au","ua","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u"];
var nm3 = ["b","c","d","dh","dhr","g","gr","ghr","k","kh","kl","l","lk","lkr","ld","ldr","ll","lst","r","rt","rh","rth","s","ss","sc","thr"];
var nm4 = ["aa","ae","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u"];
var nm5 = ["b","d","g","k","l","ll","n","nn","r","rr","s","ss","v","z","zz"];
var nm6 = ["","","b","g","h","k","l","lk","m","r","sh","shk","th"];

var nm7 = ["d","h","k","l","m","n","s","v","z"];
var nm8 = ["ae","ie","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm9 = ["d","d","hn","hm","hl","m","mn","n","nn","r","rh","rr","sh","ss","v","z"];
var nm10 = ["a","e","i","u"];
var nm11 = ["d","g","k","l","m","n","r","t","tl","v"];
var nm12 = ["","","","c","g","k","s","t","th"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
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
		names = nMs;
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}

function nameMas(){
	nTp = Math.random() * 7 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	if(nTp === 0){
		while(rnd2 > 4){
			rnd2 = Math.random() * nm2.length | 0;
		}
		while(nm1[rnd] === nm6[rnd5]){
			rnd5 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd5];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		if(nTp < 4){
			while(nm3[rnd3] === nm6[rnd5] || nm3[rnd3] === nm1[rnd]){
				rnd3 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm2.length | 0;
			while(nm6[rnd5] === nm5[rnd6] || nm5[rnd6] === nm3[rnd3]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			if(nTp < 6){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd7] + nm5[rnd6] + nm4[rnd4] + nm6[rnd5];
			}else{
				rnd8 = Math.random() * nm5.length | 0;
				rnd9 = Math.random() * nm2.length | 0;
				while(nm6[rnd5] === nm5[rnd8] || nm5[rnd8] === nm5[rnd6]){
					rnd8 = Math.random() * nm5.length | 0;
				}
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd7] + nm5[rnd6] + nm2[rnd9] + nm5[rnd8] + nm4[rnd4] + nm6[rnd5];
			}
		}
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	rnd4 = Math.random() * nm10.length | 0;
	rnd5 = Math.random() * nm12.length | 0;
	if(nTp < 4){
		while(nm9[rnd3] === nm12[rnd5] || nm9[rnd3] === nm7[rnd]){
			rnd3 = Math.random() * nm9.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm12[rnd5];
	}else{
		rnd6 = Math.random() * nm11.length | 0;
		rnd7 = Math.random() * nm8.length | 0;
		while(nm12[rnd5] === nm11[rnd6] || nm11[rnd6] === nm9[rnd3]){
			rnd6 = Math.random() * nm11.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm8[rnd7] + nm11[rnd6] + nm10[rnd4] + nm12[rnd5];
		
	}
	testSwear(nMs);
}
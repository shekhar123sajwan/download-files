var nm1 = ["","","","","ch","d","dh","g","k","m","n","r","s","sh","v","xh","z","zh"];
var nm2 = ["a","e","i","a","e","i","y"];
var nm3 = ["d","dd","dr","g","gr","f","l","ll","lr","lv","ln","ld","lr","n","nd","nr","nn","r","rr","rd","rs","rsh","s","ss","sh","v","z","zz"];
var nm4 = ["a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","ie","ue"];
var nm5 = ["d","g","k","l","n","r","rr","s","ss","xh","x"];
var nm6 = ["","","h","j","k","n","s"];

var nm7 = ["c","f","h","k","l","m","n","q","r","rh","v","vh","z"];
var nm8 = ["ai","ei","ee","ae","aa","ea","ia","ie","a","i","a","i","a","i","e","e","y"];
var nm9 = ["f","l","ll","n","nn","r","rh","s","sh","z"];
var nm10 = ["a","e","a","e","i","a"];
var nm11 = ["d","n","l","ll","r","s","sh","th"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(tp === 1){
			nameMis();
			while(nMs === ""){
				nameMis();
			}
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
		}
		names = nMs;
		nTp = Math.random() * 2 | 0;
		if(nTp === 0){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
			names = names + "-" + nMs;
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

function nameMas(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	if(nTp < 3){
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
		if(nTp < 5){
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
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	if(nTp === 0){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm6[rnd5] === nm1[rnd] || nm6[rnd5] === ""){
			rnd5 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd5];
	}else{
		if(nTp < 5){
			rnd3 = Math.random() * nm3.length | 0;
			rnd4 = Math.random() * nm4.length | 0;
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
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd7] + nm5[rnd6] + nm4[rnd4] + nm6[rnd5];
		}
	}
	testSwear(nMs);
}


function nameMis(){
	nTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	if(nTp === 0){
		rnd3 = Math.random() * nm11.length | 0;
		while(rnd2 > 7){
			rnd2 = Math.random() * nm8.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm11[rnd3];
	}else{
		rnd3 = Math.random() * nm9.length | 0;
		rnd4 = Math.random() * nm10.length | 0;
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4];
	}
	testSwear(nMs);
}
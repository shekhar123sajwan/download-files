var nm1 = ["","","","b","c","d","g","j","k","l","m","p","s","t","v","y"];
var nm2 = ["a","e","i","u"];
var nm3 = ["b","c","cl","dc","dl","g","gb","gw","gt","j","k","l","ld","m","ml","n","nch","nd","ng","ns","nt","r","s","t","tch","td","v","y","zv"];
var nm4 = ["a","e","i","o","u"];
var nm5 = ["b","c","g","b","c","g","gt","l","m","l","m","mb","n","n","nc","nd","ng","nt","r","s","r","s","st","t","y","t","y"];
var nm6 = ["","","","c","d","g","k","l","m","n","ng","r","s","t"];

var nm7 = ["","","","b","ch","d","h","k","l","m","p","s","t","v","y"];
var nm8 = ["a","i","u"];
var nm9 = ["c","cl","cs","g","gm","h","l","ld","lh","m","ml","mp","n","nd","ng","nt","r","rn","t","v","w","wl","y","z"];
var nm10 = ["ui","ee","ia","a","i","a","i","u"];
var nm11 = ["b","c","g","h","k","l","m","b","c","g","h","k","l","m","mb","n","n","nd","ng","ns","p","r","s","t","w","y","p","r","s","t","w","y"];
var nm12 = ["","","","","","","","","","","","","","","","d","g","l","m","n","ng","p","s","t","y"];

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
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	if(nTp < 4){
		while(nm3[rnd3] === nm6[rnd5] || nm3[rnd3] === nm1[rnd]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm4.length | 0;
		while(nm6[rnd5] === nm5[rnd6] || nm5[rnd6] === nm3[rnd3]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm4[rnd7] + nm6[rnd5];
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
		rnd7 = Math.random() * nm10.length | 0;
		while(nm12[rnd5] === nm11[rnd6] || nm11[rnd6] === nm9[rnd3]){
			rnd6 = Math.random() * nm11.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm11[rnd6] + nm10[rnd7] + nm12[rnd5];
	}
	testSwear(nMs);
}
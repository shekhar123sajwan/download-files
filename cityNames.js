function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var names1 = ["a","e","i","o","u","","","","","","","","","","","","","","","","","","","","","",""];
	var names2 = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","br","cr","dr","fr","gr","kr","pr","qr","sr","tr","vr","wr","yr","zr","str","bl","cl","fl","gl","kl","pl","sl","vl","yl","zl","ch","kh","ph","sh","yh","zh"];
	var names3 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ae","ai","au","aa","ee","ea","eu","ia","ie","oi","ou","ua","ue","ui","uo","uu","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
	var names4 = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","br","cr","dr","fr","gr","kr","pr","tr","vr","wr","zr","st","bl","cl","fl","gl","kl","pl","sl","vl","zl","ch","kh","ph","sh","zh"];
	var names5 = ["c","d","f","h","k","l","m","n","p","r","s","t","x","y","","","","","","","","","","","","","","",""];
	var names6 = ["aco","ada","adena","ago","agos","aka","ale","alo","am","anbu","ance","and","ando","ane","ans","anta","arc","ard","ares","ario","ark","aso","athe","eah","edo","ego","eigh","eim","eka","eles","eley","ence","ens","ento","erton","ery","esa","ester","ey","ia","ico","ido","ila","ille","in","inas","ine","ing","irie","ison","ita","ock","odon","oit","ok","olis","olk","oln","ona","oni","onio","ont","ora","ord","ore","oria","ork","osa","ose","ouis","ouver","ul","urg","urgh","ury"];
	var names7 = ["bert","bridge","burg","burgh","burn","bury","bus","by","caster","cester","chester","dale","dence","diff","ding","don","fast","field","ford","gan","gas","gate","gend","ginia","gow","ham","hull","land","las","ledo","lens","ling","mery","mond","mont","more","mouth","nard","phia","phis","polis","pool","port","pus","ridge","rith","ron","rora","ross","rough","sa","sall","sas","sea","set","sey","shire","son","stead","stin","ta","tin","tol","ton","vale","ver","ville","vine","ving","well","wood"];
	
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(i < 3){
			rnd0 = Math.random() * names1.length | 0;
			rnd1 = Math.random() * names2.length | 0;
			rnd2 = Math.random() * names3.length | 0;
			rnd3 = Math.random() * names5.length | 0;
			while(names5[rnd3] === names2[rnd1]){
				rnd3 = Math.random() * names5.length | 0;
			}
			rnd4 = Math.random() * names7.length | 0;
			names = names1[rnd0] + names2[rnd1] + names3[rnd2] + names5[rnd3] + names7[rnd4];
		}else if(i < 5){
			rnd3 = Math.random() * names4.length | 0;
			rnd4 = Math.random() * names3.length | 0;
			rnd5 = Math.random() * names5.length | 0;
			while(names5[rnd5] === names4[rnd3]){
				rnd5 = Math.random() * names5.length | 0;
			}
			rnd6 = Math.random() * names7.length | 0;
			names = names4[rnd3] + names3[rnd4] + names5[rnd5] + names7[rnd6];
		}else if(i < 8){
			rnd0 = Math.random() * names1.length | 0;
			rnd1 = Math.random() * names2.length | 0;
			rnd2 = Math.random() * names6.length | 0;
			names = names1[rnd0] + names2[rnd1] + names6[rnd2];
		}else{
			rnd3 = Math.random() * names7.length | 0;
			rnd4 = Math.random() * names6.length | 0;
			names = names6[rnd4] + names7[rnd3];
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
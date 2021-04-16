var br = "";

function nameGen(type){
	var tp = type;
	var nm1 = ["Aee","Ahsy","Alang","Bee","Blar","Blong","By","Cai","Cawv","Ceeb","Ceev","Cha","Chai","Chao","Chee","Cheng","Cher","Cheu","Chia","Chivkeeb","Choj","Chou","Choua","Chu","Chua","Chue","Ci","Cimxeeb","Dang","Daus","Dej","Es","Fong","Foom","Foua","Fu","Fue","Fuechy","Fwam","Fwj","Fwm","Ge","Ger","Hawj","Hiav","Hlee","Hnub","Houe","Huas","Hue","Hwj","Hwm","Ib","Ka","Kaim","Kang","Kao","Kau","Kaub","Kaus","Ke","Keebkwm","Keej","Khais","Khoua","Kim","Kong","Kongmeng","Koob","Kou","Kouaeia","Koun","Ku","Kuam","Kub","Lang","Lauj","Leej","Leng","Lia","Liab","Lis","Looj","Lue","Lung","Lwm","Ma","Maas","Mas","Meej","Meng","Moos","Muas","Nao","Nchai","Ndrua","Neeb","Neng","Nhia","Nou","Npis","Npliaj","Nplooj","Nruag","Nruas","Ntaaj","Ntaj","Ntsuab","Ntxaij","Ntxawg","Ntxhees","Ntxhw","NujTxeeg","Nyaj","Nyiaj","Pao","Peng","Pheej","PheejXeeb","Pheng","Phia","Phiab","Pobtsuas","Pobzeb","Pos","Pov","Riam","Rwg","Sai","Sao","Sawm","Seng","Shao","Shong","Shoua","Song","Soob","Suav","Tang","Tee","Teeb","Teev","Teng","Thai","Thaiv","Thao","Thaokeng","Thoj","Thoob","Tong","Toog","Tooj","Tou","Toua","Touchondue","Touhue","Tria","Tsaab","Tsab","Tsawb","Tseeb","Tseemci","Tsheej","Tshua","Tshwjxeeb","Tsim","Tsob","Tsu","Tswab","Tswb","TswjFwm","TswjHwm","Tu","Tuam","Tub","Txhaj","Txhiaj","Txhim","Txooj","Txoov","Vaaj","Vag","Vaj","VamMeej","Vang","Voos","Vwj","Xaab","Xab","Xais","Xao","Xauv","Xeeb","Xeng","Xengxou","Xia","Xiav","Xiong","Xob","Xub","Xue","Xwm","Xyoob","Xyooj","Yaaj","Yag","Yaj","Yang","Yee","Yeeb","Yeej","Yeng","Yer","Yia","Yias","Ying","Yis","Youa","Zaaj","Zaj","Zeb","Zongneng","Zoov"];
	var nm2 = ["Ab","Aee","Ah","Alee","Bao","Bau","Bee","Blia","Boa","Chao","Che","Chee","Chia","Choua","Chua","Chue","Cua","Dawb","Dej","Der","Dia","Dib","Dlawb","Doua","Douachi","Duabntxoo","Eve","Foua","Gao-jer","Ger","Geu","Hiav","Hlawv","Hle","Hli","Hnub","Houa","Huab","Ia","Ib","Jong","Joua","Ka","Kabzuag","Kaj","Kajsiab","Kalue","Kang","Kawm","Ke","Kha","Khou","Khoua","Kiab","Kou","Kouaeia","Ku","Kub","Lee","Liab","Liablis","Liag","Lig","Luv","Mai","Maikia","Mailee","Maiv","Maly","Mao","May","Me","Mee","Miv","Mo","Mos","Mouachy","My","Nag","Nali","Nao","Neng","Ngia","Nhia","Njua","Nkao","Nkauj","Nou","Npaim","Ntaub","Ntsais","Ntsuab","Ntuj","Ntxawm","Ntxhais","Ntxhi","Ntxoo","Nu","Nyiaj","Pa","Paj","Pang","Pangfoua","Panhia","Poua","Qaib","Sa","Sai","Se","See","Sheng","Shoua","Si","Song","Sua","Suab","Sue","Taub","Tong","Treu","True","Tshaus","Tswb","Tuab","Tue","Vang","Xe","Xee","Xeeb","Xia","Xiav","Xov","Xy","Yang","Yee","Yeng","Yer","Yia","Ying","Youa","Zer","Zoua"];
	var nm3 = ["Bee","Cha","Chai","Chang","Cheng","Cho","Chou","Chu","Chue","Fa","Faaj","Faj","Fang","Fau","Gao","Gee","Ger","Ha","Haam","Ham","Hang","Hawj","Her","Herr","Heu","Houa","Kang","Kao","Keng","Kha","Khaab","Khab","Khang","Khue","Kia","Ko","Kong","Koo","Kou","Ku","Kue","Kwm","La","Laing","Lao","Lau","Lauj","Lee","Leng","Li","Lis","Lo","Lor","Lue","Ly","Mai","Mao","Moua","Mua","Muas","Na","Nao","Neng","Nhia","Pha","Phaab","Phab","Phang","Phia","Sao","Saychou","Saykao","Sher","Shong","Shur","Siong","So","Song","Soua","Soung","Tang","Tao","Thai","Thao","Thoj","Thor","Thow","Toa","Tong","Torr","Toua","Tria","Tsaab","Tsab","Tsheej","Tsue","Tswb","Va","Vaaj","Vaj","Vang","Vangh","Vong","Vou","Vu","Vue","Vwj","Wang","Wong","Xang","Xiong","Xong","Xoom","Xvooj","Ya","Yaaj","Yaj","Yang","Ye","Yer","Yi","Yia","Young","Zongkai"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd3 = Math.random() * nm3.length | 0;
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			while(rnd === rnd2){
				rnd2 = Math.random() * nm2.length | 0;
			}
			names = nm2[rnd] + " " + nm2[rnd2] + " " + nm3[rnd3];
			nm2.splice(rnd, 1);
			nm2.splice(rnd2, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm1.length | 0;
			while(rnd === rnd2){
				rnd2 = Math.random() * nm1.length | 0;
			}
			names = nm1[rnd] + " " + nm1[rnd2] + " " + nm3[rnd3];
			nm1.splice(rnd, 1);
			nm1.splice(rnd2, 1);
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
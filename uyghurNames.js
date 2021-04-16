function nameGen(type){
	var tp = type;
	var nm1 = ["Ürkesh","Abduhaliq","Abdul","Abdul'ahat","Abdulkerim","Abdulla","Abdullah","Abdurashid","Abdurehim","Abduwali","Abduweli","Abduxaliq","Ablat","Ablet","Abliz","Abu","Abudureyimu","Adel","Adil","Adiljan","Ahmad","Ali-Shir","Alim","Alimjan","Arken","Arkin","Bahtiyar","Bari","Batur","Baurchuk","Bayanchur","Burhan","Dawut","Dayan","Dilmurat","Dost","Edham","Ehmet","Ehmetjan","Elihan","Emam","Erkin","Esen","Eset","Ezizjan","Gheni","Haji","Hammad","Hassan","Hazrat","Hoja","Hoshur","Hozaifa","Ilham","Ilhamjan","Isa","Isma'il","Ismail","Jüme","Jahangir","Jian","Juma","Kahar","Kebek","Kurban","Lutpulla","Möminjan","Mahinur","Mahmud","Mahmut","Mansur","Maqsud","Masud","Megmat","Mehemmet","Mehmet","Mehmut","Mehmutjan","Merxat","Moyanchur","Muhammad","Muhemmet","Murat","Musa","Nëghmet","Nur","Nur Ahmad","Qutlugh","Rabban","Rouzi","Sabit","Said","Saidullah","Saifuddin","Satuq","Shohrat","Shohret","Shoukhrat","Sidiq","Tömür","Timur","Tohti","Tughluk","Turghun","Uwais","Yahballaha","Yehya","Yulbars","Yunus","Yusef","Yusuf","Yusup","Yusupjan","Ziya","Zordun","Zulfiya","Zunun"];
	var nm2 = ["Adina","Ahmad","Aisan","Alfire","Alfiya","Aliye","Amangul","Amannisa","Arzu","Aygül","Aygul","Aynur","Chin","Daulat","Dilber","Dilhumar","Dilireba","Dilnaz","Dilraba","Dilyara","Durnyam","Gülbahar","Gülnezer","Gülyar","Güzile","Guli","Hala","Khalil","Madina","Mahinur","Mahire","Mansur","Meryem","Mihirgül","Mihr","Mihrigül","Miryam","Munire","Nigar","Nur","Patigül","Patigul","Patime","Paziliya","Qutlugh","Reyhan","Reyhangul","Sënëvër","Shah","Subinur","Venera","Yunus"];
	var nm3 = ["Ötkür","Abdiqadir","Abdulbaki","Abdulkarim","Abdulla","Abdullin","Abdulrixit","Abdulwali","Abdurehim","Ablikim","Ahmet","Ajiyiming","Akhmadieva","Alach","Alaq","Alim","Almas","Alptekin","Ametjan","Avutov","Azizi","Bahtiyar","Balasaghuni","Barat","Bashi","Basit","Beg","Begum","Bekri","Bextiyar","Borhan","Bosakov","Bozan","Bughra","Dawamet","Dilmurat","Helpe","Hisamudin","Hoshur","Ilyas","Khan","Khanum","Khoja","Kusen","MAxatova","Maimaiti","Mamatil","Mashurova","Memet","Mijit","Mitalipov","Mohammed","Muhiti","Mutellip","Nasyrov","Navai","Niyaz","Qari","Qasim","Qassim","Raxman","Sabir","Sabri","Samadi","Samedi","Sauma","Sayrami","Shah","Shahidi","Sidick","Tekin","Tiliwaldi","Tohti","Tunyaz","Tursun","Uighur","Uyghur","Yüknäki","Yasin","Zakir"];
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		rnd2 = Math.random() * nm3.length | 0;
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			names = nm2[rnd] + " " + nm3[rnd2];
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd] + " " + nm3[rnd2];
			nm1.splice(rnd, 1);
		}
		nm3.splice(rnd2, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}
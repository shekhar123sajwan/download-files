function nameGen(type){var tp=type;var nm1=["Äðhäm","Äğlämetdin","Äkhmät","Äkrämetdin","Ämir","Ämirkhan","Änüär","Änwär","Äxkäm","Äxmät","Äxmätzäki","Ğäbiz̦Ulla","Ğäli","Ğälim","Ğälimyän","Ğäziz","Ğöbäyðulla","Ğöbäyz̦Ulla","Ğümär","Ğaysa","Ğilemdar","Şähit","Şärif","Ağiðel","Afzaletdin","Airat","Almas","Altynbay","Anuar","Aryşlan","Ayðar","Aybulat","Aydar","Aygiz","Ayrat","Azamat","Bäğiz","Büre","Bariy","Bayğötdin","Bikbulat","Borxan","Bulat","Dawït","Dawit","Dayan","Dim","Dinislam","Färit","Fäyzulla","Fazulla","Gäwhär","Gotbetdin","Haz̦Iy","Husayn","Ibrahim","Ilyas","Irändek","Irek","Iskändär","Islamğäli","Islambäk","Islametdin","Iz̦El","Kamaletdin","Khamza","Khasan","Mäjit","Mäxmüt","Möxämätğäbdelxäy","Möxämmätša","Möxämmät","Marvan","Minhažetdin","Mintimer","Mirgayaz","Mirxäyz̦Är","Mortaz̦A","Muşarif","Muhammad","Mullayän","Musa","Näžip","Nögöş","Nagim","Niğmät","Niğmättulla","Niğmätulla","Nil","Räşit","Rämil","Räsül","Räwef","Röstäm","Ramaz̦An","Rišat","Rif","Rifqät","Rinat","Ruslan","Säğit","Sälimä","Sälim","Säyet","Sïñğïð","Söläymän","Sabir","Sabit","Salawat","Sayed","Shäyxislam","Shaikhzada","Siñğiz̦","Tälğät","Tölkö","Tagir","Talğat","Talxa","Tashtemir","Tayfur","Taymaç","Tufan","Tulqyn","Ural","Uyïldan","Uyildan","Växit","Vener","Vildan","Xäbibulla","Xäbir","Xämzä","Xäsän","Xäydär","Xösäyen","Xoz̦Aybirgän","Yähüz̦Ä","Yämil","Yäwðät","Yäwz̦Ät","Yahya","Yakhya","Yaqup","Yaxya","Yomabay","Yosop","Yulay","Yusuf","Zäki","Zäkiryän","Zäynulla","Zöfär","Zagir","Zahir"];var nm2=["Älfiä","Äliä","Äminä","Änisä","Äyšä","Ümmöxäbibä","Ğäyšä","Šäwrä","Aigöl","Albinä","Almabikä","Asiä","Asiya","Aybikä","Aygöl","Bäkirä","Bäz̦Är","Banıŵ","Banat","Baniw","Bayrambikä","Bibi","Elvirä","Emeşbikä","Fänünä","Färiz̦Ä","Fatima","Firüzä","Flyura","Gäwhär","Gölbanïw","Gölsinä","Güzäl","Güzäliä","Hädiä","Jamila","Läysän","Laysan","Liliä","Mäðinä","Mädinä","Märyäm","Mäymünä","Menäwrä","Miläwşä","Miläwšä","Muyylbikä","Näžibä","Närkäs","Rämilä","Rämzilä","Räyxana","Reyhane","Rezeda","Rezida","Säüdä","Säbilä","Säkinä","Sälimä","Säriä","Säyäbikä","Sabira","Saniya","Sara","Shäwrä","Sulpan","Tañhïlïw","Tañhiliw","Xäz̦Isä","Xafasa","Yämilä","Yüväyriä","Yomabikä","Zäbirä","Zäynäb","Zäynäp","Zäytünä","Zöhrä","Zöläykha","Zöläyxä","Zöläyxa","Zölfiä","Zölxizä","Zamira","Zemfíra","Zemfira","Zeyneb","Zifa","Ziliä","Zulaikha","Zulfiya"];var br="";var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){if(tp===1){rnd=Math.random()*nm2.length|0;names=nm2[rnd];nm2.splice(rnd,1);}else{rnd=Math.random()*nm1.length|0;names=nm1[rnd];nm1.splice(rnd,1);}
br=document.createElement('br');element.appendChild(document.createTextNode(names));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
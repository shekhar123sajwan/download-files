var br="";function nameGen(type){var tp=type;var nm1=["Abdii","Araarsa","Araarso","Arbaayii","Baati","Badessa","Bakkalcha","Beekan","Biiflee","Bilisummaa","Billisaa","Biqilee","Biqilsa","Birkii","Birraa","Birraasaa","Birrissa","Bitoo","Bohaarsa","Bona","Boona","Boorana","Bulluq","Bultum","Caala","Caalsan","Dabalaa","Daga","Dansa","Daraara","Daraaran","Demiksa","Dhugaa","Diinqan","Diinqat","Dinajaas","Dirribaa","Dulluma","Dureessa","Duuressaa","Eba","Eebbisan","Eeyban","Elemo","Faarsan","Faarsi","Faayame","Falma","Falmata","Fileera","Firomsaa","Gaaddisaa","Gadaa","Gadisa","Galaan","Galataa","Galgaloo","Galma","Gameda","Gammachu","Gammada","Gammadaa","Gannaa","Garaakoo","Gidaadaa","Goota","Guddataa","Gudina","Gulantaa","Guutaa","Hamilan","Hamilta","Harxummaa","Hawwii","Heeran","Hegeree","Hirba","Hirkisaa","Hirkoa","Humnaa","Hundarraa","Hundee","Ibsaa","Ifa","Ifaa","Irbuu","Iree","Jaadataa","Jalatan","Jeyna","Jiraa","Jiraanne","Jirata","Keeysan","Kuma","Kumaa","Kumalaa","Labuu","Leellisaa","Lelisa","Lencho","Meiga","Mootii","Moti","Negasu","Neissa","Nimoonaa","Salbaan","Sooressaa","Tolessa","Wako","Waysira","Yadeta"];var nm2=["Aansi","Abadan","Amene","Annanee","Araari","Arfaasee","Arkani","Atinaaf","Ayyantu","Baati","Bayssa","Bedatu","Beseesee","Bifani","Biftu","Biiflee","Bikeltu","Bilillee","Bilisee","Bilisse","Biqiltuu","Birillee","Bontu","Caaltu","Caamsee","Calalaqii","Calaq","Carraa","Dabalee","Dagalee","Dansitu","Dansool","Dawwatan","Dawwi","Dinqii","Dinqisee","Dirribe","Dirribee","Dureetti","Dursinee","Eebbisee","Elellaan","Faa","Faantoli","Faaya","Faayo","Fayyisee","Feenan","Feenet","Filan","File","Fileera","Firaanbooni","Gaaddise","Gadise","Gadisse","Galgalee","Gannee","Garaatoo","Gidaadee","Ginseenee","Goobane","Gudetu","Hawwi","Hilani","Hiree","Ifanii","Iftu","Ijakoo","Jaadanii","Jaala","Jaalatani","Jaallanne","Jaallee","Jadatee","Jiruu","Kullani","Kumee","Kumii","Kuulle","Lagashan","Lalistu","Lammi","Leellis","Leelloo","Leensa","Lelisa","Lelise","Maashoo","Madaalan","Magalle","Marsani","Meeto","Meetti","Meti","Midhaaydu","Migritu","Mijuu","Mirqani","Mirqee","Miyee","Momina","Mona","Naadura","Naafi","Naafis","Naahili","Naanah","Naanti","Naasihi","Nabira","Nadawwi","Nadhii","Nalaali","Nehi","Qalbisee","Qananii","Qantuu","Roobani","Saaran","Saartu","Salbaanee","Seena","Seeqan","Seeqii","Seeran","Shagan","Sifi","Simalee","Sinaaf","Soorettee","Takkitti","Temara","Tiruut","Tiyyaa","Waaritu","Waartu","Walalaa","Warke","Yaatiruu","Yuube","Ziqiyaa"];var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){if(tp===1){rnd=Math.random()*nm2.length|0;names=nm2[rnd];nm2.splice(rnd,1);}else{rnd=Math.random()*nm1.length|0;names=nm1[rnd];nm1.splice(rnd,1);}
br=document.createElement('br');element.appendChild(document.createTextNode(names));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
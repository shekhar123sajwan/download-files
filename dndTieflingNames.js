var nm1=["Aet","Ak","Am","Aran","And","Ar","Ark","Bar","Car","Cas","Dam","Dhar","Eb","Ek","Er","Gar","Gu","Gue","Hor","Ia","Ka","Kai","Kar","Kil","Kos","Ky","Loke","Mal","Male","Mav","Me","Mor","Neph","Oz","Ral","Re","Rol","Sal","Sha","Sir","Ska","The","Thy","Thyne","Ur","Uri","Val","Xar","Zar","Zer","Zher","Zor"];var nm2=["adius","akas","akos","char","cis","cius","dos","emon","ichar","il","ilius","ira","lech","lius","lyre","marir","menos","meros","mir","mong","mos","mus","non","rai","rakas","rakir","reus","rias","ris","rius","ron","ros","rus","rut","shoon","thor","thos","thus","us","venom","vir","vius","xes","xik","xikas","xire","xius","xus","zer","zire"];var nm3=["Achievement","Adventure","Aid","Ambition","Anguish","Art","Ashes","Atonement","Awe","Bliss","Bright","Carrion","Carrior","Chant","Cheer","Cherish","Closed","Comfort","Compassion","Confidence","Content","Courage","Creed","Cunning","Darkness","Death","Debauchery","Deceit","Delight","Desire","Despair","Devotion","Dexterity","Different","Doom","Doubt","Dread","Ecstasy","End","Enduring","Ennui","Entropy","Essential","Esteem","Eternal","Euphoria","Excellence","Exceptional","Exciting","Expert","Expertise","Expressive","Extreme","Faith","Fear","Flawed","Free","Freedom","Fresh","Gentle","Gladness","Glee","Gloom","Glory","Gluttony","Grief","Happiness","Happy","Harmony","Hate","Hatred","Hero","Hope","Horror","Hunt","Hymn","Ideal","Ignominy","Immortal","Innovation","Interesting","Journey","Joy","Laughter","Life","Light","Love","Loyal","Lust","Mantra","Master","Mastery","Mayhem","Misery","Mockery","Murder","Muse","Music","Mystery","Normal","Nowhere","Odd","Open","Optimal","Pain","Panic","Passion","Perfect","Piety","Pleasure","Poetry","Possession","Promise","Psalm","Pure","Quest","Random","Rare","Recovery","Redemption","Regular","Relentless","Respect","Reverence","Revulsion","Sadness","Sanctity","Silence","Skilled","Sly","Song","Sorrow","Suffering","Temerity","Terror","Timeless","Torment","Tragedy","Trickery","Trouble","Trust","Truth","Uncommon","Unlocked","Vice","Virtue","Void","Voyage","Weary","Winning","Wit","Woe"];var nm4=["Af","Agne","Ani","Ara","Ari","Aria","Bel","Bri","Cre","Da","Di","Dim","Dor","Ea","Fri","Gri","His","In","Ini","Kal","Le","Lev","Lil","Ma","Mar","Mis","Mith","Na","Nat","Ne","Neth","Nith","Ori","Pes","Phe","Qu","Ri","Ro","Sa","Sar","Seiri","Sha","Val","Vel","Ya","Yora","Yu","Za","Zai","Ze"];var nm5=["bis","borys","cria","cyra","dani","doris","faris","firith","goria","grea","hala","hiri","karia","ki","laia","lia","lies","lista","lith","loth","lypsis","lyvia","maia","meia","mine","narei","nirith","nise","phi","pione","punith","qine","rali","rissa","seis","solis","spira","tari","tish","uphis","vari","vine","wala","wure","xibis","xori","yis","yola","za","zes"];function nameGen(type){var tp=type;var br="";var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){if(tp===1){nameFem();while(nMs===""){nameFem();}}else if(tp===2){rnd=Math.random()*nm3.length|0;nMs=nm3[rnd];}else{nameMas();while(nMs===""){nameMas();}}
br=document.createElement('br');element.appendChild(document.createTextNode(nMs));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
function nameFem(){rnd=Math.random()*nm4.length|0;rnd2=Math.random()*nm5.length|0;nMs=nm4[rnd]+nm5[rnd2];testSwear(nMs);}
function nameMas(){rnd=Math.random()*nm1.length|0;rnd2=Math.random()*nm2.length|0;nMs=nm1[rnd]+nm2[rnd2];testSwear(nMs);}
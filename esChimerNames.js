var nm1=["","","b","d","g","h","l","m","n","r","s","v","z"];var nm2=["a","e","i","o"];var nm3=["b","br","d","dv","dr","g","gr","gv","l","ln","lm","lr","lv","ng","nr","ns","nd","nrsl","nv","r","rd","rg","rl","th","v","vr"];var nm4=["a","e","i","o","a","e","i","o","y"];var nm5=["d","dr","g","l","m","n","r","thr","v","z"];var nm6=["c","l","n","r","s","th"];var nm7=["","","","","d","h","l","m","n","t","v"];var nm8=["a","e","i","u"];var nm9=["d","g","h","l","ll","lm","lv","ls","m","mm","n","nn","ns","nr","nv","r","rs","rn","rv","rh","s","ss","sp","v","vr"];var nm10=["ii","ia","a","e","u","o","i","a","e","u","o","i","a","e","u","o","i"];var nm11=["h","l","m","n","r","s","v","x"];var nm12=["b","d","f","g","h","m","n","r","s","v","z"];var nm13=["oa","ou","aa","oo","a","i","o","a","i","o","e","u","a","i","o","a","i","o","e","u","a","i","o","a","i","o","e","u"];var nm14=["b","br","d","dr","g","gn","l","ll","ln","lm","lr","m","mn","n","ng","nr","nl","nd","r","rl","rn","rm","t","th","v"];var nm15=["a","e","i","o"];var nm16=["b","d","dr","h","m","n","r","v","z"];var nm17=["d","l","m","n","s","t","th"];var br="";function nameGen(type){var tp=type;$('#placeholder').css('textTransform','capitalize');var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){if(tp===1){nameFem();while(nMs===""){nameFem();}}else{nameMas();while(nMs===""){nameMas();}}
nameSur();while(nSr===""){nameSur();}
names=nMs+" "+nSr;br=document.createElement('br');element.appendChild(document.createTextNode(names));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
function nameMas(){nTp=Math.random()*6|0;rnd=Math.random()*nm1.length|0;rnd2=Math.random()*nm2.length|0;rnd5=Math.random()*nm6.length|0;if(nTp===0){while(nm6[rnd5]===nm1[rnd]||nm6[rnd5]===""){rnd5=Math.random()*nm6.length|0;}
nMs=nm1[rnd]+nm2[rnd2]+nm6[rnd5];}else{rnd3=Math.random()*nm3.length|0;rnd4=Math.random()*nm4.length|0;if(nTp<4){while(nm3[rnd3]===nm6[rnd5]||nm3[rnd3]===nm1[rnd]){rnd3=Math.random()*nm3.length|0;}
nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm4[rnd4]+nm6[rnd5];}else{rnd6=Math.random()*nm5.length|0;rnd7=Math.random()*nm2.length|0;while(nm6[rnd5]===nm5[rnd6]||nm5[rnd6]===nm3[rnd3]){rnd6=Math.random()*nm5.length|0;}
if(nTp===4){nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm2[rnd7]+nm5[rnd6]+nm4[rnd4]+nm6[rnd5];}else{nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm2[rnd7]+nm5[rnd6]+nm4[rnd4]+nm6[rnd5];}}}
testSwear(nMs);}
function nameFem(){nTp=Math.random()*6|0;rnd=Math.random()*nm7.length|0;rnd2=Math.random()*nm8.length|0;rnd3=Math.random()*nm9.length|0;rnd4=Math.random()*nm10.length|0;if(nTp<3){while(nm9[rnd3]===nm7[rnd]){rnd3=Math.random()*nm9.length|0;}
nMs=nm7[rnd]+nm8[rnd2]+nm9[rnd3]+nm10[rnd4];}else{rnd6=Math.random()*nm11.length|0;rnd7=Math.random()*nm8.length|0;while(nm9[rnd3]===nm11[rnd6]||nm9[rnd3]===nm7[rnd]){rnd3=Math.random()*nm9.length|0;}
nMs=nm7[rnd]+nm8[rnd2]+nm9[rnd3]+nm8[rnd7]+nm11[rnd6]+nm10[rnd4]}
testSwear(nMs);}
function nameSur(){nTp==Math.random()*6|0;rnd=Math.random()*nm12.length|0;rnd2=Math.random()*nm13.length|0;rnd5=Math.random()*nm17.length|0;if(nTp===0){while(nm17[rnd5]===nm12[rnd]||nm17[rnd5]===""){rnd5=Math.random()*nm6.length|0;}
while(rnd2>3){rnd2=Math.random()*nm13.length|0;}
nSr=nm12[rnd]+nm13[rnd2]+nm17[rnd5];}else{rnd3=Math.random()*nm14.length|0;rnd4=Math.random()*nm15.length|0;if(nTp<4){while(nm14[rnd3]===nm17[rnd5]||nm14[rnd3]===nm12[rnd]){rnd3=Math.random()*nm14.length|0;}
nSr=nm12[rnd]+nm13[rnd2]+nm14[rnd3]+nm15[rnd4]+nm17[rnd5];}else{rnd6=Math.random()*nm16.length|0;rnd7=Math.random()*nm13.length|0;while(nm17[rnd5]===nm16[rnd6]||nm16[rnd6]===nm14[rnd3]){rnd6=Math.random()*nm16.length|0;}
nSr=nm12[rnd]+nm13[rnd2]+nm14[rnd3]+nm13[rnd7]+nm16[rnd6]+nm15[rnd4]+nm17[rnd5];}}
testSwear(nSr);}
var nm1=["b","br","d","f","fr","g","h","j","k","kl","m","r","rh","s","sk","st","t","th","v"];var nm2=["oe","ee","y","a","e","i","o","u","y","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];var nm3=["ch","d","g","gn","kn","ks","l","lb","lg","lsg","lsk","nd","ng","nr","nw","r","rg","rk","rl","rm","rr","sg","sgr","sm","sn","tg","tm","w"];var nm4=["ei","ia","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];var nm5=["g","l","ll","m","n","nn","nm","r","w"];var nm6=["k","l","ll","lg","ld","m","mth","n","nl","r","rr","skr","th"];var nm7=["br","fr","g","h","hj","hl","hr","k","m","r","s","sk","sv","th","thr","v"];var nm8=["ia","ey","ei","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];var nm9=["d","dm","dn","dr","g","gj","gdr","gr","h","j","l","ld","lm","ln","lr","m","nd","ngr","nh","r","rm","rj","rv","t","th","v"];var nm10=["ie","io","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u"];var nm11=["b","dr","f","h","ld","n","nl"];var nm12=["dr","f","l","ld","ldr","n","nd","r","s"];var br="";function nameGen(type){var tp=type;$('#placeholder').css('textTransform','capitalize');var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){if(tp===1){nameFem();while(nMs===""){nameFem();}}else{nameMas();while(nMs===""){nameMas();}}
names=nMs;br=document.createElement('br');element.appendChild(document.createTextNode(nMs));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
function nameMas(){nTp=Math.random()*6|0;rnd=Math.random()*nm1.length|0;rnd2=Math.random()*nm2.length|0;rnd5=Math.random()*nm6.length|0;if(nTp===0){while(nm1[rnd]===""){rnd=Math.random()*nm1.length|0;}
while(nm1[rnd]===nm6[rnd5]||nm6[rnd5]===0){rnd5=Math.random()*nm6.length|0;}
nMs=nm1[rnd]+nm2[rnd2]+nm6[rnd5];}else{rnd3=Math.random()*nm3.length|0;rnd4=Math.random()*nm4.length|0;if(nTp<5){while(nm3[rnd3]===nm6[rnd5]||nm3[rnd3]===nm1[rnd]){rnd3=Math.random()*nm3.length|0;}
nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm4[rnd4]+nm6[rnd5];}else{rnd6=Math.random()*nm5.length|0;rnd7=Math.random()*nm2.length|0;while(nm6[rnd5]===nm5[rnd6]||nm5[rnd6]===nm3[rnd3]){rnd6=Math.random()*nm5.length|0;}
nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm2[rnd7]+nm5[rnd6]+nm4[rnd4]+nm6[rnd5];}}
testSwear(nMs);}
function nameFem(){nTp=Math.random()*6|0;rnd=Math.random()*nm7.length|0;rnd2=Math.random()*nm8.length|0;rnd5=Math.random()*nm12.length|0;if(nTp===0){while(nm1[rnd]===""){rnd=Math.random()*nm7.length|0;}
while(nm7[rnd]===nm12[rnd5]||nm12[rnd5]===0){rnd5=Math.random()*nm12.length|0;}
nMs=nm7[rnd]+nm8[rnd2]+nm12[rnd5];}else{rnd3=Math.random()*nm9.length|0;rnd4=Math.random()*nm10.length|0;if(nTp<4){while(nm9[rnd3]===nm12[rnd5]||nm9[rnd3]===nm7[rnd]){rnd3=Math.random()*nm9.length|0;}
nMs=nm7[rnd]+nm8[rnd2]+nm9[rnd3]+nm10[rnd4]+nm12[rnd5];}else{rnd6=Math.random()*nm11.length|0;rnd7=Math.random()*nm8.length|0;while(nm12[rnd5]===nm11[rnd6]||nm11[rnd6]===nm9[rnd3]){rnd6=Math.random()*nm11.length|0;}
nMs=nm7[rnd]+nm8[rnd2]+nm9[rnd3]+nm8[rnd7]+nm11[rnd6]+nm10[rnd4]+nm12[rnd5];}}
testSwear(nMs);}
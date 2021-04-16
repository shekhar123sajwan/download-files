var nm1=["br","c","d","dr","g","gr","h","m","r","s","v","z"];var nm2=["a","e","o"];var nm3=["d","dd","dr","g","gr","gd","ld","lm","m","mn","n","nn","nr","r","rm","rn","rr","rl","rs"];var nm4=["a","i","o"];var nm5=["c","d","g","l","ld","lt","n","nd","nt","rn","th"];var nm6=["b","c","d","h","m","n","s","v","w"];var nm7=["a","e","i","o"];var nm8=["c","cr","d","dr","g","l","m","mn","mr","n","nr","r","rh","rl","rth","s","t"];var nm9=["a","e","i","o"];var nm10=["","","","","","","c","d","n","s","ld","ft","ss","dh","rf","rd","rn","th"];var br="";function nameGen(type){var tp=type;$('#placeholder').css('textTransform','capitalize');var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){if(tp===1){nameFem();while(nMs===""){nameFem();}}else{nameMas();while(nMs===""){nameMas();}}
br=document.createElement('br');element.appendChild(document.createTextNode(nMs));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
function nameMas(){nTp=Math.random()*4|0;rnd=Math.random()*nm1.length|0;rnd2=Math.random()*nm2.length|0;rnd5=Math.random()*nm5.length|0;if(nTp===0){while(rnd5<4){rnd5=Math.random()*nm5.length|0;}
nMs=nm1[rnd]+nm2[rnd2]+nm5[rnd5];}else{rnd3=Math.random()*nm4.length|0;rnd4=Math.random()*nm3.length|0;while(nm3[rnd4]===nm1[rnd]||nm3[rnd4]===nm5[rnd5]){rnd4=Math.random()*nm3.length|0;}
if(nTp<3){nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd4]+nm4[rnd3]+nm5[rnd5];}else{nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd4]+nm4[rnd3]+"doc";}}
testSwear(nMs);}
function nameFem(){nTp=Math.random()*3|0;rnd=Math.random()*nm6.length|0;rnd2=Math.random()*nm7.length|0;rnd3=Math.random()*nm10.length|0;if(nTp===0){while(rnd3<10){rnd3=Math.random()*nm10.length|0;}
nMs=nm6[rnd]+nm7[rnd2]+nm10[rnd3];}else{rnd5=Math.random()*nm8.length|0;rnd6=Math.random()*nm9.length|0;while(nm8[rnd5]===nm6[rnd]||nm8[rnd5]===nm10[rnd3]){rnd5=Math.random()*nm8.length|0;}
nMs=nm6[rnd]+nm7[rnd2]+nm8[rnd5]+nm9[rnd6]+nm10[rnd3];}
testSwear(nMs);}
var nm1=["","","","","b","br","bh","c","d","dh","dr","f","g","gr","gh","k","kh","m","n","r","rh","s","t","th","v","z"];var nm2=["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","y","y","io","ae","ou","ie","ui","ai"];var nm3=["bs","bz","c","cn","cm","cr","cl","dr","dn","g","gn","gl","gg","k","kr","kz","kn","kl","l","lf","lm","lr","lg","ln","lv","m","mm","mr","mz","ml","mdr","mn","n","ndr","nd","nz","nc","nv","r","rv","rn","rr","rz","rdr","rl","t","tr","th","thr","v","vr"];var nm4=["c","d","g","k","l","m","n","r","t","v"];var nm5=["","","","","","c","d","dh","k","kh","l","h","n","r","rth","rn","s","ss","th"];var nm6=["","","","","","","","b","bh","c","ch","d","dh","f","g","gh","h","l","m","n","p","ph","q","qh","r","rh","s","sh","sc","t","th","tr","v","w","y","z"];var nm7=["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ia","ae","ie","ei","ee","ai"];var nm8=["b","bn","bs","br","c","cr","cs","cn","d","dr","dh","dv","dr","fr","h","kh","kn","kl","ks","ksh","l","ll","ln","lv","lr","lz","mr","mv","mn","n","nn","nd","nsh","ns","nz","nv","nr","p","ph","phr","phn","r","rn","rsh","rh","rr","s","ss","sh","shr","sc","str","v","vr"];var nm9=["b","c","d","h","l","m","n","p","r","s","v"];var nm10=["","","","","","","","","","","","","","","","","","","","d","h","l","n","nth","s","sh","ss","t","th"];var nm11=["","","","","b","bh","c","cr","ch","d","dh","dr","g","gh","k","kr","kh","m","n","p","ph","phr","r","s","sh","shr","t","th","v","w","y","z"];var nm12=["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ae","iu","ei","ie","ia","ai","ee"];var nm13=["b","d","dr","g","gn","gr","ld","lr","ldr","lv","lz","ln","m","mr","n","nd","nn","ng","nr","ndr","nz","nvr","r","rl","rdr","rd","rz","rv","rs","rth","s","sr","shr","str","vr","vn","zr","z"];var nm14=["b","d","g","m","n","r","s","z"];var nm15=["","","","","c","d","h","l","n","r","s","sh","t","th"];var nm16=["","","","","","b","bh","c","d","dh","f","g","gh","m","n","r","rh","s","t","th","v","z"];var nm17=["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","y","y","y","ae","io","ie","ei","ai","ui"];var nm18=["b","bs","c","cn","cm","d","dr","k","kn","kl","l","lv","ln","lv","m","mz","mn","n","nz","nv","r","rn","rz","rr","s","ss","v","vr"];var nm19=["b","c","d","k","l","m","n","r","s","v"];var nm20=["","","","","c","d","h","l","n","s","ss","t","th"];var br="";function nameGen(type){$('#placeholder').css('textTransform','capitalize');var tp=type;var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){nameLast();while(nLs===""){nameLast();}
if(tp===1){nameFem();while(nMs===""){nameFem();}}else if(tp===2){nameNt();while(nMs===""){nameNt();}}{nameMas();while(nMs===""){nameMas();}}
var nm=nMs+" "+nLs;br=document.createElement('br');element.appendChild(document.createTextNode(nm));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
function nameLast(){rnNm=Math.random()*4|0;rnd=Math.random()*nm11.length|0;rnd2=Math.random()*nm12.length|0;rnd3=Math.random()*nm13.length|0;rnd4=Math.random()*nm12.length|0;rnd5=Math.random()*nm15.length|0;while(nm13[rnd3]===nm11[rnd]||nm15[rnd5]===nm13[rnd3]){rnd3=Math.random()*nm13.length|0;}
if(rnNm<2){nLs=nm11[rnd]+nm12[rnd2]+nm13[rnd3]+nm12[rnd4]+nm15[rnd5];}else{rnd6=Math.random()*nm14.length|0;rnd7=Math.random()*nm12.length|0;while(nm14[rnd6]===nm15[rnd5]||nm14[rnd6]===nm13[rnd3]){rnd6=Math.random()*nm14.length|0;}
if(rnNm===2){nLs=nm11[rnd]+nm12[rnd2]+nm13[rnd3]+nm12[rnd4]+nm14[rnd6]+nm12[rnd7]+nm15[rnd5];}else{nLs=nm11[rnd]+nm12[rnd2]+nm14[rnd6]+nm12[rnd7]+nm13[rnd3]+nm12[rnd4]+nm15[rnd5];}}
testSwear(nLs);}
function nameFem(){rnNm=Math.random()*4|0;rnd=Math.random()*nm6.length|0;rnd2=Math.random()*nm7.length|0;rnd3=Math.random()*nm8.length|0;rnd4=Math.random()*nm7.length|0;rnd5=Math.random()*nm10.length|0;while(nm8[rnd3]===nm6[rnd]||nm10[rnd5]===nm8[rnd3]){rnd3=Math.random()*nm8.length|0;}
if(rnNm<2){nMs=nm6[rnd]+nm7[rnd2]+nm8[rnd3]+nm7[rnd4]+nm10[rnd5];}else{rnd6=Math.random()*nm9.length|0;rnd7=Math.random()*nm7.length|0;while(nm9[rnd6]===nm10[rnd5]||nm9[rnd6]===nm8[rnd3]){rnd6=Math.random()*nm9.length|0;}
if(rnNm===2){nMs=nm6[rnd]+nm7[rnd2]+nm8[rnd3]+nm7[rnd4]+nm9[rnd6]+nm7[rnd7]+nm10[rnd5];}else{nMs=nm6[rnd]+nm7[rnd2]+nm9[rnd6]+nm7[rnd7]+nm8[rnd3]+nm7[rnd4]+nm10[rnd5];}}
testSwear(nMs);}
function nameNt(){rnNm=Math.random()*4|0;rnd=Math.random()*nm16.length|0;rnd2=Math.random()*nm17.length|0;rnd3=Math.random()*nm18.length|0;rnd4=Math.random()*nm17.length|0;rnd5=Math.random()*nm20.length|0;while(nm18[rnd3]===nm16[rnd]||nm20[rnd5]===nm18[rnd3]){rnd3=Math.random()*nm18.length|0;}
if(rnNm<2){nMs=nm16[rnd]+nm17[rnd2]+nm18[rnd3]+nm17[rnd4]+nm20[rnd5];}else{rnd6=Math.random()*nm19.length|0;rnd7=Math.random()*nm17.length|0;while(nm19[rnd6]===nm20[rnd5]||nm19[rnd6]===nm18[rnd3]){rnd6=Math.random()*nm19.length|0;}
if(rnNm===2){nMs=nm16[rnd]+nm17[rnd2]+nm18[rnd3]+nm17[rnd4]+nm19[rnd6]+nm17[rnd7]+nm20[rnd5];}else{nMs=nm16[rnd]+nm17[rnd2]+nm19[rnd6]+nm17[rnd7]+nm18[rnd3]+nm17[rnd4]+nm20[rnd5];}}
testSwear(nMs);}
function nameMas(){rnNm=Math.random()*4|0;rnd=Math.random()*nm1.length|0;rnd2=Math.random()*nm2.length|0;rnd3=Math.random()*nm3.length|0;rnd4=Math.random()*nm2.length|0;rnd5=Math.random()*nm5.length|0;while(nm3[rnd3]===nm1[rnd]||nm5[rnd5]===nm3[rnd3]){rnd3=Math.random()*nm3.length|0;}
if(rnNm<2){nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm2[rnd4]+nm5[rnd5];}else{rnd6=Math.random()*nm4.length|0;rnd7=Math.random()*nm2.length|0;while(nm4[rnd6]===nm5[rnd5]||nm4[rnd6]===nm3[rnd3]){rnd6=Math.random()*nm4.length|0;}
if(rnNm===2){nMs=nm6[rnd]+nm7[rnd2]+nm8[rnd3]+nm7[rnd4]+nm9[rnd6]+nm7[rnd7]+nm10[rnd5];}else{nMs=nm6[rnd]+nm7[rnd2]+nm9[rnd6]+nm7[rnd7]+nm8[rnd3]+nm7[rnd4]+nm10[rnd5];}}
testSwear(nMs);}
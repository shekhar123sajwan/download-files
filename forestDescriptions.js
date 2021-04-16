function nameGen(){
	var nm1 = ["colossal","endless","enormous","far-reaching","gigantic","huge","humble","large","limitless","modest","small","tremendous","vast"];
	var nm2 = ["bright","clear","compact","crowded","dark","dense","foggy","gloomy","impenetrable","light","luminous","misty","murky","radiant","shadowy","spacious","thick","wet"];
	var nm3 = ["ancient","archaic","blooming","budding","diverse","flourishing","lush","primal","prospering","rich","thriving","verdant","young"];
	var nm4 = ["claimed","competed for","contested","demanded","dominated","eclipsed","marked","monopolized","overshadowed","reigned","ruled"];
	var nm5 = ["alder","ash","asp","beech","birch","buxus","cedar","chestnut","cottonwood","crab apple","cypress","dogwood","elm","fir","hawthorn","hazel","hemlock","hickory","holly","juniper","larch","linden","magnolia","maple","oak","pine","poplar","redwood","rhododendron","rowan","sequoia","spruce","sycamore","walnut","willow","yew"];
	var nm6 = ["who left just enough light","who let through enough dancing beams of sunshine","who allowed adequate light to pass down","who permitted ample, shimmering lights to descend","who gave just enough light a chance to descent","who provided just enough openings for light to pass down","their leaves and branches allowed for just enough light to pass down","still plenty of light passed through their crowns","their crowns allowed for short beams of light to descend","and ample openings let enough dancing beams of light through","and occasional openings in their crowns allowed plenty of light through","their crowns allowed cascading lights to shimmer through","enough light shimmered through their crowns","and abundant dancing lights bounced through their crowns","sufficient twinkling lights bursted through their crowns","and twinkling lights bursting through their crowns allowed","and cascading lights bouncing between the leaves allowed","and rays of light bursting through their crowns allowed","and the occasional beam of light that made its way through the canopy allowed","and sparkling light dancing between the branches allowed"];
	var nm7 = ["a collection of","a diversity of","a flood of","a hodgepodge of","a medley of","a mishmash of","a mosaic of","a motley of","a patchwork of","a plethora of","a range of","a variety of","all sorts of","an overabundance of","bright","colorful","disorderly","dispersed","scattered","vibrant"];
	var nm8 = ["bushes","ferns","herbs","mushrooms","plants","saplings","shrubs","sprouts"];
	var nm9 = ["burst from","claim","consume","control","cultivate","dominate","flourish in","grow in","make use of","monopolize","reign","rule","spread in","sprout in","take advantage of","use"];
	var nm10 = ["boulder covered grounds","branch and twig laden ground","brittle leaves on the ground","crunchy layer of leaves","fertile soils","flat, fertile grounds","insect riddled soils","moist and fertile bottom layer","moss covered grounds","nut and seed covered grounds","rich grounds","sloping and slanting ground","soft, rich soils","stony grounds","thick layer of leaves"];
	var nm11 = ["Thick","Thin","Bundled","Swooping","Curling","Curving","Coiling","Quiet","Silent"];
	var nm12 = ["vines","branches","creepers","climbing plants","tree limbs","branches"];
	var nm13 = ["dangled from","hung from","clung to","embraced","grasped","dangled from","suspended from","waved from","drooped from","held onto"];
	var nm14 = ["a variety","a medley","a range","a hodgepodge","a mishmash","a potpourri","an array","a range"];
	var nm15 = ["were scattered sporadically","claimed remnants of light","claimed quiet corners","grew dispersed and sparingly","grew in a sprinkled and disorderly fashion","were seen occasionally","were found in the most quiet places","clung to any space they could find","grew all over the place","desperately tried to avoid the shadows","desperately tried to claim the last remnants of light","grew in abundance","were common to this area only","were unique to this region","blossomed brightly"];
	var nm16 = ["added colorful variety to","added colorful, scented elements to","added more life in","added playful elements to","added some bright touches to","added some color to","adorned","brightened up","caught attention in","clashed with","contrasted against","enhanced","enriched","highlighted","looked almost out of place in","protruded from","spruced up","stood out against","stuck out against","were a welcome change in"];
	var nm17 = ["amber","beige","brown","brown and green","colorless","dark","dark green","emerald","green","homogeneous","jade","monotone","monotonous","mundane","unchanging","uniform","unvarying"];
	var nm18 = ["backdrop","forest floor","forest grounds","landscape","lower level","scenery","terrain","view"];
	var nm19 = ["cacophony","clamor","discord","disharmony","hodgepodge","medley","mishmash","mixture","tumult","variation","variety"];
	var nm20 = ["animal sounds","animal noises","wild sounds","beastly noises","sounds","noises","wild noises","beastly sounds"];
	var nm21 = ["most of which were","which were caused by","most belonged to","predominantly those of","belonging mostly to"];
	var nm22 = ["bird songs","birds","birds and insects","birds and vermin","critters","fleeing animals","foraging animals","foraging beasts","herds of larger animals","insects","insects and critters","prowling animals","rummaging critters","small creatures","varmint","vermin"];
	var nm23 = ["added life to the forest","brightened up the forest","echoed in the air","filled the air","resonated through the air","reverberated through the air"];
	var nm24 = ["were accompanied by","drowned out","almost completely muffled","overpowered","were in harmony with","formed a chaotic orchestra with","were out of sync with","were strangely synchronized with","were backed by","added to the sounds of"];
	var nm25 = ["barrage of noise coming from a waterfall in the distance","croaks of frogs in the nearby ponds","occasional roar of a large animal trying to scare away predators","occasional sounds of birds of prey gliding in the air","occasional sounds of breaking twigs beneath the feet of larger animals","occasional sounds of large animals in the distance","occasional splashes of frogs jumping in the nearby lake","raging river currents clashing against boulders","rustling of the leaves and branches of the tree tops in the wind","sound of the wind blowing gently through the forest","sounds of a fight over dominance between larger animals","sounds of several woodpeckers in the distance","splashing of fish in a nearby lake","swaying of tree tops in the wind","trickling sounds of a gentle river stream"];
	var nm26 = ["a couple of trees","every tree","many a tree","many trees","most trees","the occasional tree"];
	
	var rnd = Math.random() * nm1.length | 0;
	var rnd2 = Math.random() * nm2.length | 0;
	var rnd3 = Math.random() * nm3.length | 0;
	var rnd4 = Math.random() * nm4.length | 0;
	var rnd5 = Math.random() * nm5.length | 0;
	var rnd5b = Math.random() * nm5.length | 0;
	while(rnd5 === rnd5b){
		rnd5b = Math.random() * nm5.length | 0;
	}
	var rnd5c = Math.random() * nm5.length | 0;
	while(rnd5c === rnd5b || rnd5c === rnd5){
		rnd5c = Math.random() * nm5.length | 0;
	}
	var rnd6 = Math.random() * nm6.length | 0;
	var rnd7 = Math.random() * nm7.length | 0;
	var rnd8 = Math.random() * nm8.length | 0;
	var rnd9 = Math.random() * nm9.length | 0;
	var rnd10 = Math.random() * nm10.length | 0;
	var rnd11 = Math.random() * nm11.length | 0;
	var rnd12 = Math.random() * nm12.length | 0;
	var rnd13 = Math.random() * nm13.length | 0;
	var rnd14 = Math.random() * nm14.length | 0;
	var rnd15 = Math.random() * nm15.length | 0;
	var rnd16 = Math.random() * nm16.length | 0;
	var rnd17 = Math.random() * nm17.length | 0;
	var rnd18 = Math.random() * nm18.length | 0;
	var rnd19 = Math.random() * nm19.length | 0;
	var rnd20 = Math.random() * nm20.length | 0;
	var rnd21 = Math.random() * nm21.length | 0;
	var rnd22 = Math.random() * nm22.length | 0;
	var rnd23 = Math.random() * nm23.length | 0;
	var rnd24 = Math.random() * nm24.length | 0;
	var rnd25 = Math.random() * nm25.length | 0;
	var rnd26 = Math.random() * nm26.length | 0;
	
	var name = "The forest was " + nm1[rnd] + ", " + nm2[rnd2] + ", and " + nm3[rnd3] + ". Its canopy was " + nm4[rnd4] + " by " + nm5[rnd5] + ", " + nm5[rnd5b] + ", and " + nm5[rnd5c] + ", " + nm6[rnd6] + " for " + nm7[rnd7] + " " + nm8[rnd8] + " to " + nm9[rnd9] + " the " + nm10[rnd10] + " below.";
	var name2 = nm11[rnd11] + " " + nm12[rnd12] + " " + nm13[rnd13] + " " + nm26[rnd26] + ", and " + nm14[rnd14] + " of flowers, which " + nm15[rnd15] + ", " + nm16[rnd16] + " the otherwise " + nm17[rnd17] + " " + nm18[rnd18] + ".";
	var name3 = "A " + nm19[rnd19] + " of " + nm20[rnd20] + ", " + nm21[rnd21] + " " + nm22[rnd22] + ", " + nm23[rnd23] + ", and " + nm24[rnd24] + " the " + nm25[rnd25] + ".";
	
	var br = [];
	for(i = 0; i < 2; i++){
		br[i] = document.createElement('br');	
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}
	
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	element.appendChild(document.createTextNode(name));
	element.appendChild(br[0]);
	element.appendChild(document.createTextNode(name2));
	element.appendChild(br[1]);
	element.appendChild(document.createTextNode(name3));
	document.getElementById("placeholder").appendChild(element);
}	
var nm2=["Aberrant","Agile","Alarm","Ancient","Anger","Arch","Arctic","Battle","Berserk","Berserker","Bitter","Blade","Brass","Bright","Burst","Cannon","Chain","Chaos","Chemical","Cloud","Cold","Colossal","Commander","Corrupt","Crown","Cruel","Dark","Data","Demon","Devil","Digital","Dimension","Double","Dr.","Draconian","Dual","Earthquake","Electric","Ethereal","Explosive","False","Flame","Flawless","Fluke","Flux","Frantic","Freedom","Frost","Gargantuan","Gear","General","Ghastly","Ghost","Giant","Glass","Gold","Grand","Grim","Grizzly","Guardian","Hell","Hook","Horror","Hulking","Hungry","Ice","Impulse","Iron","Judge","Lethal","Mad","Major","Master","Mirror","Misery","Night","Nightmare","Parallel","Phase","Photon","Poison","Powder","Prime","Prof.","Proud","Pulse","Putrid","Rabid","Radiant","Radioactive","Reaction","Requiem","Robust","Rusty","Ruthless","Shadow","Shock","Skeletal","Smog","Smoke","Spark","Stark","Steel","Storm","Swift","Terror","Thunder","Tremor","Twin","Ultra","Vagabond","Venom","Violent","Virus","Void","Volatile","War","Warlord","Whip","Wicked","Wrath"];var nm3=["Aardvark","Akbash","Akbasher","Akita","Akitack","Albatosser","Albatross","Alligator","Alligatorque","Alpaca","Alpacaw","Angora","Anole","Ant","Antbeater","Anteater","Ape","Argali","Armadillo","Armadillock","Avocet","Axolot","Baboom","Baboon","Badger","Bandicoot","Barnaclaw","Barracuda","Barracudang","Basilisk","Bat","Battlesnake","Bear","Beaver","Beetle","Birman","Bison","Bisong","Boa","Boam","Boar","Bobcat","Bongone","Bonobo","Bonobone","Boombay","Borer","Buffalo","Buffalox","Bull","Bulldawg","Burro","Caiman","Caimonster","Capuchin","Capybara","Caracal","Cariboost","Caribou","Cassowary","Catfish","Chameleo","Chameleon","Chamois","Cheetah","Chimpanz","Chimpanzee","Chinook","Chipmunk","Cichlid","Civet","Coati","Cockroach","Cony","Cougar","Coyote","Coyotex","Crab","Crane","Crocodie","Crocodile","Crow","Darter","Dhole","Dighorn","Dingo","Dodoom","Dolfinish","Donkey","Donkill","Dragon","Dragonflight","Dragonfly","Dragoon","Dugone","Dugong","Dunker","Eagle","Egret","Eland","Elephant","Elephantom","Elk","Emu","Falcon","Falcone","Ferret","Flamingone","Fly","Fossa","Fox","Frog","Geck-o","Gecko","Gemsbok","Gibbomb","Gibbon","Gnu","Goat","Gorilla","Gorillat","Grasshopper","Grizzly","Guardvark","Hare","Harrier","Hedgehog","Hippo","Hippomp","Hippopotamus","Hog","Hornet","Hornettle","Hound","Hyena","Hyenaw","Ibex","Ibexis","Ibis","Iguana","Iguanarl","Insectoid","Jackal","Jackall","Jaguar","Jaguard","Kakapo","Kakapown","Kangaroid","Kangaroo","Koalaw","Koodoo","Koodoom","Kookaburrack","Kudu","Leopard","Leopaw","Liger","Lion","Lizar","Lizard","Llamax","Lobstar","Lobster","Locust","Lynx","Macaw","Macawa","Mandread","Mandrill","Mandriller","Mantis","Mantissue","Mastiff","Millipode","Mole","Mongoose","Mongrel","Mongrell","Monkey","Moose","Moth","Mule","Muskrat","Mustang","Numbattle","Ocelot","Oceloto","Octopus","Octopuss","Oedemera","Okapi","Orangutan","Orangutank","Orcannon","Ostrich","Otterror","Owl","Ox","Panda","Panther","Pantherror","Parrotten","Pelicannon","Penguin","Pengwin","Piranha","Porcupain","Possum","Puffinish","Puma","Quagga","Quetzal","Beast","Smogtopus","Shocktopus","Rabbite","Raccocoon","Raccoon","Ram","Rat","Rattlesnake","Raven","Rhino","Rhinoceros","Robind","Salamander","Salamandread","Saola","Scorpiece","Scorpion","Skunk","Snake","Sparrow","Sparrowhead","Spider","Spidevil","Squid","Stalleon","Stallion","Stingraze","Tarantula","Tarantulax","Termite","Tiger","Toad","Tortoise","Toucan","Toucannon","Turtle","Vultune","Vulture","Warrus","Warthog","Wasp","Weasel","Wildeboost","Wolf","Wolverine","Wombat","Wombattle","Wrathhog","Yak","Zebra"];var br="";function nameGen(){var nm1=["Access","Advantage","Alarm","Analysis","Analyst","Answer","Arch","Particle","Beam","Band","Bit","Bonus","Burst","Bulb","Bubble","Canvas","Catch","Chance","Chart","Charge","Chemistry","Chip","Coil","Click","Clock","Code","Copper","Cycle","Current","Dime","Dimension","Disk","Dock","Dot","Edge","Effect","Emphasis","Error","Fix","Feature","Fluke","Fuel","Game","Gear","Grease","Gift","Glove","Goal","Grip","Habit","Hook","Iron","Ice","Impulse","Junior","Knot","Kite","Light","Link","Lock","Locket","Mask","Marble","Memory","Mix","Motion","Mouse","Night","Noise","Omen","Oil","Option","Pace","Patch","Path","Patience","Pause","Phase","Piece","Pitch","Play","Pocket","Print","Pop","Prompt","Push","Ratio","Remote","Risk","Route","Routine","Rush","Script","Scheme","Secret","Sense","Shade","Shadow","Shift","Shock","Sign","Signal","Smoke","Spell","Split","Spring","Steam","Storm","Status","Steel","Stitch","Stretch","Switch","Tank","Task","Ticket","Track","Trail","Trip","Twist","Trick","Veil","Whip","Whistle","Wing","Wire","Wish","Wrench"];var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){if(i<5){rnd=Math.random()*nm1.length|0;names=nm1[rnd];nm1.splice(rnd,1);}else{rnd=Math.random()*nm2.length|0;rnd2=Math.random()*nm3.length|0;names=nm2[rnd]+" "+nm3[rnd2];}
br=document.createElement('br');element.appendChild(document.createTextNode(names));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
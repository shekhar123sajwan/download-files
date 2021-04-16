var names1=["Backstab","Barefoot","Bearclaw","Bellringer","Big Nose","Black Dog","Bloodied Hands","Boulderfist","Bronzebeard","Butcher of Innocents","Child-King","Cruel Eyes","Dead Eyes","Deathbringer","Destiny","Dog's Son","Dragonrider","Dragonslayer","Eagle's Eye","Fiery Face","Firestarter","Flame Bearer","Fool's Tool","Four-Fingers","Freckles","Giantslayer","Golden Glove","Golden Hair","Good Heart","Hairyfoot","Hero of Fools","Honorbound","Honorless","Horsehead","Iron Hand","Iron Head","Ironhide","Ironskin","Keen Eye","King Without Land","King of Accidents","King of Exiles","King of Lies","King of Rivers","King of Winter","King of the People","King of the Wild","Lady Mercy","Lapdog","Lawbreaker","Limpfoot","Little Boot","Little Orphan","Littlerock","Lone Wolf","Long Legs","Loose Hands","Loose Tongue","Lord of Ashes","Lord of Blood","Lord of Sails","Manslayer","Martyr","Martyr King","Milk Drinker","Miracle Child","Mumbling Mouth","New Skin","Nightowl","No Friend","No Home","No Name","One-Eye","Phantom King","Playboy King","Prince of Fools","Queen of Nothing","Queenguard","Queenslayer","Rabbit Teeth","Scar","Sidestep","Silent Foot","Silent Tongue","Silver Hair","Sleeping Hero","Slithering","Smooth-Spoken","Snow King","Stormbringer","Switch","The Animal","The Anomaly","The Anvil","The Assassin","The Axe","The Barbarian","The Bastard","The Bear","The Beast","The Beauty","The Beggar","The Behemoth","The Biased","The Bitter","The Black","The Blade","The Bland","The Blind","The Bloody","The Boar","The Bore","The Brave","The Brawn","The Brilliant","The Bronze","The Brutal","The Brute","The Buffoon","The Bull","The Butcher","The Calm","The Captive","The Champion","The Chaste","The Childless","The Clever","The Clown","The Clumsy","The Cobra","The Cold","The Colossal","The Confident","The Confused","The Conqueror","The Content","The Coward","The Crook","The Crow","The Cruel","The Cunning","The Curator","The Cursed","The Damned","The Dapper","The Daring","The Deaf","The Deceiver","The Defiant","The Deserter","The Destroyer","The Devoted","The Direwolf","The Disfigured","The Dog","The Dragon","The Dragonheart","The Elegant","The Enigma","The Eunuch","The Exalted","The Executioner","The Exile","The Extravagant","The Faithfull","The Falcon","The False King","The False Queen","The Fat","The Fearless","The Feral","The Fiend","The Fierce","The Firm","The Fixer","The Flame","The Flower","The Fool","The Foreigner","The Fraud","The Freak","The Free","The Frenzy","The Frigid","The Generous","The Gentle","The Ghost","The Giant","The Giantslayer","The Giving","The Glutton","The Goat","The Godless","The Gorgeous","The Grand","The Great","The Greedy","The Grey","The Grim","The Guardian","The Guilty","The Gutless","The Hammer","The Heartless","The Hideous","The Historian","The Hog","The Homeless","The Horror","The Humble","The Hunter","The Hurricane","The Hypocrite","The Imbecile","The Immigrant","The Immoral","The Imposter","The Inept","The Inferior","The Innocent","The Intrepid","The Invincible","The Ironfist","The Just","The Killer","The Kind","The Kingmaker","The Lame","The Landless","The Lavish","The Lax","The Liar","The Light","The Lion","The Lionheart","The Loyal","The Magnificent","The Majestic","The Mammoth","The Marvel","The Meek","The Merciful","The Mild","The Miracle","The Modest","The Mole","The Monster","The Muscles","The Mutant","The Mute","The Nervous","The Neutral","The Nightmare","The Nightowl","The Noble","The Oaf","The Old","The Orphan","The Owl","The Ox","The Panicked","The Paranoid","The Passionate","The Patient","The Phantom","The Pious","The Pompous","The Preserver","The Pretender","The Prodigy","The Promiscuous","The Queenslayer","The Quiet","The Rat","The Raven","The Rebel","The Repulsive","The Restless","The Restorer","The Rider","The Ruthless","The Sadistic","The Savage","The Scarred","The Scorpion","The Sentinel","The Serpent","The Shadow","The Sheep","The Shepherd","The Short","The Silent","The Silver","The Slayer","The Sleeper","The Sloth","The Slow","The Smug","The Snitch","The Spider","The Spook","The Spy","The Squealer","The Stag","The Storm","The Stout","The Swine","The Tempest","The Terror","The Thief","The Thug","The Thunder","The Tiny","The Tower","The Traitor","The Traveller","The Trickster","The Triumphant","The True King","The Trustworthy","The Truthful","The Tyrant","The Ugly","The Unblemished","The Usurper","The Valiant","The Vermin","The Wall","The Warden","The Warrior","The Weak","The Whistle","The White","The Wicked","The Widow","The Wild","The Wildling","The Wise","The Wolf","The Wonder","The Young","Traditions","Twice Captured","Twice Dead","Twice Killed","Venom Tongue","Warrior Queen","Weak Legs","White Hand","White Rose"];function nameGen(){var br="";var element=document.createElement("div");element.setAttribute("id","result");for(i=0;i<10;i++){rnd=Math.floor(Math.random()*names1.length);names=names1[rnd];br=document.createElement('br');element.appendChild(document.createTextNode(names));element.appendChild(br);}
if(document.getElementById("result")){document.getElementById("placeholder").removeChild(document.getElementById("result"));}
document.getElementById("placeholder").appendChild(element);}
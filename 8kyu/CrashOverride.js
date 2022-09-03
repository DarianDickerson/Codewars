/*
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
*/

function aliasGen(fir,las){
    var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', D:'Data', E:'Energy', F:"Function", G:"Glitch", H:"Half-life", I:"Ice", J:"Java", K:"Keystroke", L:"Logic", M:"Malware", N:"Nagware", O:"OS", P:"Phishing", Q:"Quantum", R:"RAD", S:"Strike", T:"Trojan", U:"Ultraviolet", V:"Vanilla", W:"WiFi", X:"Xerox", Y:"Y", Z:"Zero"}
    var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst', D:'Discharge', E:'Electron', F:"Faraday", G:"Gig", H:"Hacker", I:"IP", J:"Jabber", K:"Killer", L:"Lazer", M:"Mike", N:"n00b", O:"Overclock", P:"Payload", Q:"Quark", R:"Roy", S:"Spy", T:"T-Rex", U:"Unit", V:"Virus", W:"Worm", X:"X", Y:"Yob", Z:"Zombie"}
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    if(abc.includes(fir[0].toUpperCase()) && abc.includes(las[0].toUpperCase())){
      return firstName[fir[0].toUpperCase()] + " " + surname[las[0].toUpperCase()]
    }else{
      return 'Your name must start with a letter from A - Z.'
    }
}
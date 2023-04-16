/*
Just another day in the world of Minecraft, Steve is getting ready to start his next exciting project -- building a railway system!

Alt text

But first, Steve needs to melt some iron ores in the furnace to get the main building blocks of rails -- iron ingots.ironingot_icon32

Each iron ingot takes 11 seconds* to produce. Steve needs a lot of them, and he has the following fuel options to add into the furnace:

Buckets of lava, each lasts 800 seconds*bucketL
Blaze rod, each lasts 120 secondsblazerod
Coals, each lasts 80 secondscoal
Blocks of Wood, each lasts 15 secondslogs
Sticks, each lasts 1 second*stick
In Ruby: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a hash of the form {:lava => 2, :blaze_rod => 1, :coal => 1, :wood => 0, :stick => 0} In JavaScript: Write a function calcFuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return an object of the form {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0} In Python: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a dictionary of the form {"lava": 2, "blaze rod": 1, "coal": 1, "wood": 0, "stick": 0}
*/

function calcFuel(n) {
    n *= 11
    let resources = {lava:0, blazeRod:0, coal:0, wood:0, stick:0}
    
    //Lava
    resources.lava += Math.floor(n/800)
    n = n % 800
    
    //blazeRod
    resources.blazeRod += Math.floor(n/120)
    n = n % 120
    
    //coal
    resources.coal += Math.floor(n/80)
    n = n % 80
    
    //wood
    resources.wood += Math.floor(n/15)
    n = n % 15
    
    //sticks
    resources.stick += n
    
    return resources
};
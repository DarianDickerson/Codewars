/*
VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/

function Warrior(n){
    this.n = n;  
    this.name = function(n){
      if(n) this.n = n
      return this.n;
    }
}
    
Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
}
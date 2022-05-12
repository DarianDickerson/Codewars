/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
    let suit = card.split("")
    switch (suit[suit.length-1]){
        case "♣":
          return "clubs"
        case "♦":
          return "diamonds"
        case "♥":
          return "hearts"
        case "♠":
          return "spades"
    }
}
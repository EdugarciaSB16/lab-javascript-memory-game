class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards.length === 0) {
      return undefined
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
   
    this.pairsClicked +=1

    if(card1 === card2){
      this.pairsGuessed +=1
      return true
    }else{
      return false
    }
  }

  isFinished() {

    if(this.pairsGuessed === this.cards.length / 2){
      return true
    }else{
      return false
    }
  }
}
"use strict";
/*
var card1 = new pokerCard("Hearts", "king");
card1.rankValue = 13;
var card2 = new pokerCard("spades", "7");
card2.rankValue = 7;
   JavaScript Exercise 07_07
   Author: Mario Sandoval
   Date:   04.12.2018
   Filename: ag_poker.js
*/
window.addEventListener("load", playDrawPoker);
function playDrawPoker(){
  var dealButton = document.getElementById("dealB");
  var drawButton = document.getElementById("drawB");
  var standButton = document.getElementById("standB")
  var resetButton = document.getElementById("resetB")
  var handValueText = document.getElementById("handValue")
  var betSelection = document.getElementById("bet");
  var bankBox = document.getElementById("bank");
  var cardImages = document.querySelectorAll("img.cardImg");

  // set the initial values of the poker game object
        pokerGame.currentBank = 500;
        pokerGame.currentBet = 25;

        // create a new deck of cards and shuffle it
          var myDeck = new pokerDeck();
          myDeck.shuffle();
          console.log(myDeck);
          // create a pokerhand object
          var myHand = new pokerHand(5);

        bankBox.value = pokerGame.currentBank;
        betSelection.onchange = function(e){
          pokerGame.currentBet = parseInt(e.target.options[e.target.selectedIndex].value);
        };
        // Restart the game when the reset button is clicked
            resetButton.addEventListener("click", function(){
              pokerGame.currentBank = 500;
              bankBox.value = pokerGame.currentBank;
              enableObj(dealButton);
              enableObj(betSelection);
              disableObj(drawButton);
              disableObj(standButton);
            });
  // enable the Draw and Stand buttons after the deal
    dealButton.addEventListener("click", function(){
      if (pokerGame.currentBank >= pokerGame.currentBet) {
            disableObj(dealButton);
            disableObj(betSelection);
            enableObj(drawButton);
            enableObj(standButton);
            bankBox.value = pokerGame.placeBet();
            // Deal cards into the pokerHand after comfirming there are at least 10 cards in the deck
            if (myDeck.cards.length < 10) {
              myDeck = new pokerDeck();
              myDeck.shuffle();
            }
            myDeck.dealTo(myHand);
            // display the card images on the table
            for (var i = 0; i < cardImages.length; i++) {
              cardImages[i].src = myHand.cards[i].cardImage();
            }
            //console.log(myDeck, myHand);
      } else {
        alert("Reduce the size of your bet, LIKE RIGHT NOWWW!!!!!!!!!!!!")
      }
    });
// enable the Deal and Bet options when the current hand ends
    drawButton.addEventListener("click", function(){
          enableObj(dealButton);
          enableObj(betSelection);
          disableObj(drawButton);
          disableObj(standButton);
    })
    standButton.addEventListener("click", function(){
          enableObj(dealButton);
          enableObj(betSelection);
          disableObj(drawButton);
          disableObj(standButton);
    });
  // disable poker button
    function disableObj(obj){
      obj.disabled = true;
      obj.style.opacity = .25;
    }
  // enable poker button
    function enableObj(obj){
        obj.disabled = false;
        obj.style.opacity = 1;
    }
}

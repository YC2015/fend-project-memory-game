/*
 * Create a list that holds all of your cards
 */
let cardList = [];



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//function to display cards and shuffice them
//Display cards all as cards down; function not working properly
/*function cardsDown(){
  var arrOfClass = document.getElementsByClassName("card");

  for (var =0, i < arrOfClass.length; i++)
   arrOfClass[i].setAttribute("class", "card");
}

cardsDown();*/


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//call function that will remove the card from cardList and hide it again
//function to change card's class to open position
//function to remove card from cardList and hide it again
 function checkCards(cardListArray){

   if (cardListArray[0].firstElementChild.className === cardListArray[1].firstElementChild.className) {
       //call function that will lock cards into open positions
        var arrOfClass = document.getElementsByClassName("show open");

          arrOfClass[0].setAttribute("class", "card match");
          arrOfClass[0].setAttribute("class", "card match");
          cardList=[];
          console.log(arrOfClass);
          console.log(arrOfClass.length);
          console.log('lock into position');

     } else {

       //setTimeout after trying other methods;
       setTimeout(() => {
       var arrOfClass = document.getElementsByClassName("show open");
       //fixed numbering by learning more about get ElementsByClass Name ==> live list [Stack Overflow]
        arrOfClass[0].setAttribute("class", "card");
        arrOfClass[0].setAttribute("class", "card");
        //arrOfClass = [];
        cardList=[];
        console.log('reverts back')
      }, 1000);
    }

 }

//selecting parent element of cards
const deck = document.querySelector('.deck');


//toggling cards [Fellow classmate Mathew Cranford Blog]
deck.addEventListener('click', function(event) {
  const clickTarget = event.target;
  if (clickTarget.classList.contains('card') && cardList.length < 2){
    console.log("I'm a card!");
    clickTarget.classList.toggle('open');
    clickTarget.classList.toggle('show');

    cardList.push(clickTarget);

    if (cardList.length === 2){
      checkCards(cardList);
    }

  }
});

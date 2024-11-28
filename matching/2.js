function createNewCard() {
	let cardElement = document.createElement("div");

	cardElement.classList.add("card");

	cardElement.innerHTML = `
    <div class="card-down"></div>
    <div class="card-up"></div>
  `;

  return cardElement;

}
// createNewCardTest();


function appendNewCard(parentElement) {
	let cardElement = createNewCard();
  
	parentElement.appendChild(cardElement);

	return cardElement;

}
// appendNewCardTest();


function shuffleCardImageClasses() {
	const cardClasses = [
    "image-1","image-1",
    "image-2","image-2",
    "image-3","image-3",
    "image-4","image-4",
    "image-5","image-5",
    "image-6","image-6"
  ];

  let shuffledClasses = _.shuffle(cardClasses);
  
  return shuffledClasses;
}
// shuffleCardImageClassesTest()


function createCards(parentElement, shuffledImageClasses) {
  let cardObjects = [];

    for (let i = 0; i < 12; i++) {
      let cardElement = appendNewCard(parentElement);
      cardElement.classList.add(shuffledImageClasses[i]);
	    const cardObject = {
        index: i,
        element: cardElement,
        imageClass: shuffledImageClasses[i]
      };
      cardObjects.push(cardObject);
    }
  return cardObjects;
}
 //createCardsTest();


function doCardsMatch(cardObject1, cardObject2) {

  return cardObject1.imageClass === cardObject2.imageClass;
}
//doCardsMatchTest();


let counters = {};


function incrementCounter(counterName, parentElement) {

	if (counters[counterName] === undefined){
    counters[counterName] = 0;
  }
  

	counters[counterName]++;


	parentElement.innerText = counters[counterName];

}
//incrementCounterTest();


let lastCardFlipped = null;

function onCardFlipped(newlyFlippedCard) {

  incrementCounter('flips', document.getElementById('flip-count'));

  console.log('Last card flipped: ', lastCardFlipped);
  console.log('Newly flipped card: ', newlyFlippedCard);

  if (lastCardFlipped === null) {
    lastCardFlipped = newlyFlippedCard;
    return;
  }

  if (!doCardsMatch(lastCardFlipped, newlyFlippedCard)) {
    setTimeout(() => {
      if (lastCardFlipped) {
        lastCardFlipped.element.classList.remove('flipped');
      }
      newlyFlippedCard.element.classList.remove('flipped');
      lastCardFlipped = null;
      isFlipping = false;
    }, 400);
    return;
  }

  incrementCounter('matches', document.getElementById('match-count'));
  
  lastCardFlipped.element.classList.add('border-glow');
  newlyFlippedCard.element.classList.add('border-glow');

  const matchAudio = new Audio('audio/match.wav');
  const winAudio = new Audio('audio/win.wav');

  if (counters.matches === 6) {
    winAudio.play();
  } else {
    matchAudio.play();
  }

  lastCardFlipped = null;
}


function resetGame() {
	
  let cardContainer = document.getElementById('card-container');
	
	
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
	
  document.getElementById('flip-count').innerText = 0;
  document.getElementById('match-count').innerText = 0;
  

  counters = {};
	
  lastCardFlipped = null;
	
  setUpGame();
}

setUpGame();
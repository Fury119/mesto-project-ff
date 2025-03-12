function createCards(card, deleteCard) {
  const cardElement = document.querySelector('#card-template');
  const cardElementCopy = cardElement.content.cloneNode(true);

  const cardImage = cardElementCopy.querySelector('.card__image');
  const cardTitle = cardElementCopy.querySelector('.card__title');
  const cardButton = cardElementCopy.querySelector('.card__delete-button');

  cardImage.alt = card.name;
  cardImage.src = card.link;
  cardTitle.textContent = card.name;

  cardButton.addEventListener('click', (event) => {
      deleteCard(event);
  });

  return cardElementCopy;
}


function deleteCard(event) {
  const cardToDelete = event.target.closest('.card');
  cardToDelete.remove();
}


const container = document.querySelector('.places__list');
initialCards.forEach(function (card) {
  const cardElement = createCards(card, deleteCard);
  container.appendChild(cardElement); 
});
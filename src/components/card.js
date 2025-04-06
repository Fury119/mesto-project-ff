
import {openImagePopup} from '../index.js' 


const cardElement = document.querySelector('#card-template');

function createCards(card, deleteCard, likeCard, openImagePopup) {
  const cardElementCopy = cardElement.content.cloneNode(true);
  const cardImage = cardElementCopy.querySelector('.card__image');
  const cardTitle = cardElementCopy.querySelector('.card__title');
  const cardButton = cardElementCopy.querySelector('.card__delete-button');
  const likeButton = cardElementCopy.querySelector('.card__like-button');

  cardImage.alt = card.name;
  cardImage.src = card.link;
  cardTitle.textContent = card.name;

  cardButton.addEventListener('click', (event) => {
      deleteCard(event);
  });

  likeButton.addEventListener('click', () => {
    likeCard(likeButton);
  })
  
  return cardElementCopy;
}


function deleteCard(event) {
  const cardToDelete = event.target.closest('.card');
  cardToDelete.remove();
}


function likeCard(button) {
  button.classList.toggle('card__like-button_is-active');
}

export {createCards, deleteCard, likeCard};
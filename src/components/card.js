import { openPopup } from "./modal.js";

const cardElement = document.querySelector('#card-template');
const imagePopup = document.querySelector('.popup__image');
const cardImageCaption = document.querySelector('.popup__caption'); 
const popupImage = document.querySelector('.popup_type_image'); //попап для картинок 

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

  
  cardImage.addEventListener('click', function () {
    const imageSrc = cardImage.src;
    const title = cardImage.closest('.card').querySelector('.card__title').textContent;
    openImagePopup(imageSrc, title);
  });
  

  
  return cardElementCopy;
}


function deleteCard(event) {
  const cardToDelete = event.target.closest('.card');
  cardToDelete.remove();
}


function likeCard(button) {
  button.classList.toggle('card__like-button_is-active');
}


function openImagePopup (imageSrc, title) {
  imagePopup.src = imageSrc; 
  imagePopup.alt = title;
  cardImageCaption.textContent = title;
  openPopup(popupImage); // Показываем попап
}

export {createCards, deleteCard, likeCard, openImagePopup};
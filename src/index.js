import {createCards, deleteCard, likeCard} from './components/card.js';
import './pages/index.css';
import { openPopup, closePopup, closeEsc, addClosePopupByOverlayListener } from './components/modal.js';
import {initialCards} from './components/cards.js'

    
const container = document.querySelector('.places__list');
  
initialCards.forEach(function (card) {
  const cardElement = createCards(card, deleteCard, likeCard, openImagePopup);
  container.appendChild(cardElement); 
});


const profileButton = document.querySelector('.profile__edit-button'); //кнопка редактировать в профайле
const newcardButton = document.querySelector('.profile__add-button'); //кнопка добавить новую карточку

const popupEdit = document.querySelector('.popup_type_edit'); //попап для профайла
const newcardPopup = document.querySelector('.popup_type_new-card'); //попап для создания карточек

const popupImage = document.querySelector('.popup_type_image'); //попап для картинок 


const closeButtonNew = newcardPopup.querySelector('.popup__close'); //попытка выцепить кнопку в конкретном попапе 
const closeButtonEdit = popupEdit.querySelector('.popup__close'); //кнопка закрыть в попапе карточек
const closeButtonImage = popupImage.querySelector('.popup__close'); //кнопка закрыть в попапе картинок

const formElementEdit = popupEdit.querySelector('.popup__form'); //форма для редактирования профиля
const nameInput = document.querySelector('.popup__input_type_name'); //форма редактирования имени
const jobInput = document.querySelector('.popup__input_type_description'); //форма редактирования описания

const imageForm = newcardPopup.querySelector('.popup__form'); //форма ввода картинок
const imageName = document.querySelector('.popup__input_type_card-name'); //форма ввода новой картинки
const imageInput = document.querySelector('.popup__input_type_url'); //форма ввода описания картинки для карточки
const imageContainer = document.querySelector('.places__list'); //контейнер для добавления новой карточки в него



//обработчик клика для попапа редактирования
profileButton.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = document.querySelector('.profile__title').innerText; //присваиваем старое значение при открытии попапа
  jobInput.value = document.querySelector('.profile__description').innerText; //присваиваем старое значение при открытии попапа
});

function editFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  document.querySelector('.profile__title').textContent = nameInput.value; //присваиваем новые значения для полей
  document.querySelector('.profile__description').textContent = jobInput.value; //присваиваем новые значения для полей
  closePopup(popupEdit);
}

formElementEdit.addEventListener('submit', editFormSubmit); 

closeButtonEdit.addEventListener('click', function () {
  closePopup(popupEdit);
})


//обработчик клика для добавления новой карточки
newcardButton.addEventListener('click', function () {
  openPopup(newcardPopup); 
});

closeButtonNew.addEventListener('click', function () {
  closePopup(newcardPopup);
})


function imageFormSubmit(evt) {
  evt.preventDefault(); // Отменяем стандартную отправку формы.
  const newCard = {
    link: imageInput.value,
    name: imageName.value
  };
  const cardElementCopy = createCards(newCard, deleteCard, likeCard, openImagePopup); // Создаем новую карточку
  imageContainer.insertBefore(cardElementCopy, imageContainer.firstChild); // Вставляем новый элемент в начало контейнера
  imageForm.reset(); // Сбрасываем форму
  closePopup(newcardPopup); // Закрываем попап
}

imageForm.addEventListener('submit', imageFormSubmit);

const imagePopup = document.querySelector('.popup__image');
const cardImageCaption = document.querySelector('.popup__caption'); 
//const popupImage = document.querySelector('.popup_type_image'); //попап для картинок 


function openImagePopup (imageSrc, title) {
  imagePopup.src = imageSrc; 
  imagePopup.alt = title;
  cardImageCaption.textContent = title;
  openPopup(popupImage); // Показываем попап
}


closeButtonImage.addEventListener('click', function () {
  closePopup(popupImage);
})




// Закрытие попапов кликом на оверлей
const popups = document.querySelectorAll('.popup');
popups.forEach(addClosePopupByOverlayListener);








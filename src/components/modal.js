const containerPopup = document.querySelector('.content');

function openPopup(popupElement) {
  popupElement.classList.add('popup_is-opened');
  popupElement.classList.add('popup_is-animated');
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', (evt) => closeEsc(evt, popupElement));
}

function closeEsc (evt, popupElement) {
  if (evt.key === 'Escape') {
    closePopup(popupElement);
  }
}



export {openPopup, closePopup, closeEsc};
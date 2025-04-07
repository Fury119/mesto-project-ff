
function openPopup(popupElement) {
  popupElement.classList.add('popup_is-opened');
  popupElement.classList.add('popup_is-animated');
  document.addEventListener('keydown', closeEsc);
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeEsc);
}

function closeEsc (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_is-opened'));
  }
}

function closeOverlay (popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
};


export {openPopup, closePopup, closeEsc, closeOverlay};
const popupButton = document.querySelector('.popup__menu-button');
const popupWrapper = document.querySelector('.popup__menu');
const popupMenu = document.querySelector('.popup__menu-site');

popupButton.addEventListener('click', handleMenu);

function handleMenu () {
    popupMenu.classList.toggle('hide__popup');
}

document.addEventListener('click', hidePopup);

function hidePopup (el) {
    let targetInside = popupWrapper.contains(el.target);
    if(!targetInside) {
        popupMenu.classList.add('hide__popup');
    }
    else {
        return;
    }
}
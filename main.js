
const ancientCardList = document.querySelectorAll('.ancient-card');
const difficultyContainer = document.querySelector('.difficulty-container');
let toggleAncientCard = function (item) {
    ancientCardList.forEach(el => {
        el.classList.remove('ancient-card-after');
        difficultyContainer.style.display= "flex";
    });
    item.classList.add('ancient-card-after');
}
const difficultyList = document.querySelectorAll('.difficulty');
const deckContainer = document.querySelector('.deck-container');
let toggleDifficulty = function (it) {
    difficultyList.forEach(el => {
        el.classList.remove('difficulty-active');
        deckContainer.style.display= "flex";
    });
    it.classList.add('difficulty-active');
}



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
};
const backDeck = document.querySelector('.two-dec-container'); 
const runDeck = document.querySelector('.deck-container');
runDeck.addEventListener('click', ()=>{
    runDeck.style.display= "none";
    backDeck.style.display = 'flex'
});
const flipedDeck = document.querySelector('.flipedCard');
const backCard = document.querySelector('.backCard'); 
backCard.addEventListener('click', ()=>{
    flipedDeck.style.display = 'flex';
});
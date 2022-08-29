import {zames} from './main.js';
import {flipedCardddddsssss} from './main.js';
import {stage} from './main.js';
const ancientOne = document.getElementById('ancients0')
const ancientTwo = document.getElementById('ancients1')
const ancientThree = document.getElementById('ancients2')
const ancientFour = document.getElementById('ancients3')
const ancientCardList = document.querySelectorAll('.ancient-card');
const difficultyContainer = document.querySelector('.difficulty-container');
//матрица
const stOneOne = document.getElementById('1_1')
const stOneTwo = document.getElementById('1_2')
const stOneThree = document.getElementById('1_3')
const stTwoOne = document.getElementById('2_1')
const stTwoTwo = document.getElementById('2_2')
const stTwoThree = document.getElementById('2_3')
const stThreeOne = document.getElementById('3_1')
const stThreeTwo = document.getElementById('3_2')
const stThreeThree = document.getElementById('3_3')
//матрица
export let ancientNumber
function toggleAncientCard (item) {
    ancientCardList.forEach(el => {
        el.classList.remove('ancient-card-after');
        difficultyContainer.style.display= "flex";
    });
    // let activeAnchi = getAncientBt();
    // let acAn = activeAnchi.textContent;
    item.classList.add('ancient-card-after');
    const ancientValue = getAncientBt();
    ancientNumber = ancientValue.textContent
    // console.log("ancientNumber",ancientNumber)
}
const soEasy = document.getElementById('soEasy');
const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');
const soHard = document.getElementById('soHard');
const difficultyList = document.querySelectorAll('.difficulty');
const deckContainer = document.querySelector('.toMixDeck');
const toggleDifficulty = (it) => {
    difficultyList.forEach(el => {
        el.classList.remove('difficulty-active');
        deckContainer.style.display= "flex";
    });
    it.classList.add('difficulty-active');
};
soEasy.addEventListener('click', (e)=>{
    toggleDifficulty(e.currentTarget);
})
easy.addEventListener('click', (e)=>{
    toggleDifficulty(e.currentTarget);
})
normal.addEventListener('click', (e)=>{
    toggleDifficulty(e.currentTarget);
})
hard.addEventListener('click', (e)=>{
    toggleDifficulty(e.currentTarget);
})
soHard.addEventListener('click', (e)=>{
    toggleDifficulty(e.currentTarget);
})

const backDeck = document.querySelector('.two-dec-container'); 
const runDeck = document.querySelector('.toMixDeck');
const dotsContainer = document.querySelector('.dots-container')

export let arrQeue;
let firstStage;
let secondStage;
let thirdStage;
let trak;
runDeck.addEventListener('click', ()=>{
    runDeck.style.display= "none";
    backDeck.style.display = 'flex';
    dotsContainer.style.display = 'flex';
    const actBt = getActiveBt ();
    firstStage = zames(actBt.textContent, 'firstStage');
    secondStage = zames(actBt.textContent, 'secondStage');
    thirdStage = zames(actBt.textContent, 'thirdStage');
    arrQeue = firstStage.concat(secondStage, thirdStage);
    
    //почитать диструктуризация
    // console.log ('koloda 16 el',[...firstStage,...secondStage,...thirdStage])
    // console.log ('getActiveBt',getActiveBt ())
console.log('1', firstStage)
console.log('2', secondStage)
console.log('3', thirdStage)    
traker ()
    console.log ("trak", trak)
});
function traker (){
    stOneOne.textContent = firstStage.filter((el) => el.color === 'green').length;
    stOneTwo.textContent = firstStage.filter((el) => el.color === 'brown').length;
    stOneThree.textContent = firstStage.filter((el) => el.color === 'blue').length;

    stTwoOne.textContent = secondStage.filter((el) => el.color === 'green').length;
    stTwoTwo.textContent = secondStage.filter((el) => el.color === 'brown').length;
    stTwoThree.textContent = secondStage.filter((el) => el.color === 'blue').length;

    stThreeOne.textContent = thirdStage.filter((el) => el.color === 'green').length;
    stThreeTwo.textContent = thirdStage.filter((el) => el.color === 'brown').length;
    stThreeThree.textContent = thirdStage.filter((el) => el.color === 'blue').length;
}

const flipedCard = document.querySelector('.flipedCard');
const backCard = document.querySelector('.backCard'); 
backCard.addEventListener('click', ()=>{
flipedCard.style.display = 'flex';
const img = flipedCardddddsssss();
flipedCard.style.background = `url(${img})`;
let firstStageCopy = [...firstStage];
let secondStageCopy = [...secondStage];
// let thirdStageCopy = [...thirdStage];
firstStage.splice(0, 1);
if (!firstStageCopy.length){
    secondStage.splice(0, 1);
}
if (!secondStageCopy.length){
    thirdStage.splice(0, 1);
}
if (thirdStage.length === 0){
    backCard.style.display = 'none'
}
// if (!thirdStageCopy.length){
//     backCard.addEventListener('click', ()=>{
//     backDeck.style.display = 'none'})
// }
traker ()
});

ancientOne.addEventListener('click', (e)=>{
    toggleAncientCard(e.currentTarget);
})
ancientTwo.addEventListener('click', (e)=>{
    toggleAncientCard(e.currentTarget);
})
ancientThree.addEventListener('click', (e)=>{
    toggleAncientCard(e.currentTarget);
})
ancientFour.addEventListener('click', (e)=>{
    toggleAncientCard(e.currentTarget);
})
function getActiveBt (){
    return document.querySelector('.difficulty-active')
}

function getAncientBt (){
    return document.querySelector('.ancient-card-after')
}

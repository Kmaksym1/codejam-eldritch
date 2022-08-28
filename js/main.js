import ancientsData from "../data/ancients.js";
// import difficulties from "../data/difficulties.js";
import blueCardsData from "../data/mythicCards/blue/index.js";
import brownCardsData from "../data/mythicCards/brown/index.js";
import greenCardsData from "../data/mythicCards/green/index.js";
import {ancientNumber} from './style.js';
let firstStageColoda;
export let stage;
let greenCards;
let brownCards;
let blueCards;
export function zames(level, st) {
firstStageColoda = [];
stage = ancientsData[ancientNumber][st];
// console.log("stages",stage)
// console.log("stOneInOne",stOneInOne)
    if (level === 'easy'){
    greenCards = greenCardsData.filter((el) => el.difficulty !== 'hard');
    brownCards = brownCardsData.filter((el) => el.difficulty !== 'hard');
    blueCards = blueCardsData.filter((el) => el.difficulty !== 'hard');
    } else if (level === 'normal'){
    greenCards = greenCardsData
    brownCards = brownCardsData
    blueCards = blueCardsData
} else if (level === 'hard'){
    greenCards = greenCardsData.filter((el) => el.difficulty !== 'easy');
    brownCards = brownCardsData.filter((el) => el.difficulty !== 'easy');
    blueCards = blueCardsData.filter((obj) => !Object.values(obj).some((el) => el === 'easy'));
} else if (level ==='soEasy'){
    // greenCards = 
    // .filter((el) => el.difficulty === level)
    // return 1;
    // console.log ('soeasy',greenCards)
    }
    // const blueCards = blueCardsData.filter((el) => el.difficulty === level);
    for (let key in stage) {
        const stageKey = stage[key];
    if (key === "greenCards") {
        const rundomNumber = getRandomNum(greenCards, stageKey);
        firstStageColoda.push(...greenCards.splice(rundomNumber, stageKey));
    } else if (key === "brownCards") {
        const rundomNumber = getRandomNum(brownCards, stageKey);
        firstStageColoda.push(...brownCards.splice(rundomNumber, stageKey));
    }else if (key === "blueCards") {
        const rundomNumber = getRandomNum(blueCards, stageKey);
        firstStageColoda.push(...blueCards.splice(rundomNumber, stageKey));
    } 
    };
    // console.log ('greenCards',greenCards)
    return firstStageColoda;
};
export function flipedCardddddsssss(){
    let nextCardImg = firstStageColoda.splice(0, 1);
    let img = nextCardImg[0].cardFace.slice(1);
    return img;
}
/*********************** RandomNumber ******************/
function getRandomNum(arr, value) {
const randomNum = Math.floor(Math.random() * (arr.length - 1)) + 1;
return (randomNum + value) < (arr.length - 1) ? 0 : randomNum
}


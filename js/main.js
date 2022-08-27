import ancientsData from '../data/ancients.js';
import difficulties from '../data/difficulties.js';
import blueCardsData from '../data/mythicCards/blue/index.js';
import brownCardsData from '../data/mythicCards/brown/index.js';
import greenCardsData from '../data/mythicCards/green/index.js';
// console.log (ancientsData);
// console.log (difficulties);
// console.log (blueCardsData);
// console.log (brownCardsData);
// console.log (greenCardsData);
const normal = {
    data:[],
    add: function (newData){
        this.data.push(newData)
    },
    next: function (){
        return this.data.pop()
    }
};

/*********************** RandomNumber ******************/
function getRandomNum(){ 
    return Math.floor(Math.random()*(blueCardsData.length - 1))+1
};
let randomNum = getRandomNum(blueCardsData);
normal.add(blueCardsData[randomNum])
let cardTry = blueCardsData[randomNum]['cardFace'];
console.log ('card1', blueCardsData);
/*********************** Hard ******************/
let blueCardsHard = blueCardsData.filter((obj) => Object.values(obj).some(el => el === 'hard'))
console.log ('hard',blueCardsHard)
/*********************** Hard end ******************/
const backCard = document.querySelector('.backCard')
const flipedCard = document.querySelector('.flipedCard');
// backCard.onclick = function() => {
//     flipedDeck.background = '../assets/MythicCards/blue/blue5.png';
// }
backCard.addEventListener('click', ()=>{
    flipedCard.style.background = `url('${cardTry}')`;
    imgsrc()
});
// console.log (getHard)

function imgsrc() {
    i++;
    blueCardsData.src=imgs[i];
}
//       for (let i=0; i < str.length; i++){
//     let stack = [];
//       for (let i=0; i < str.length; i++){
//         let currentSymbol = str[i]  ;
  
//         if (isClosedBr(currentSymbol)){
//           if (bracketsPair[currentSymbol] !== stack.pop()) return false;
//         } else {
//           stack.push(currentSymbol)
//         }
  
  
//       //   if (openBrackets.includes(currentSymbol))  {
//       //     stack = push(currentSymbol)
//       //   } else {
//       //     if (stack.length === 0) {
//       //       return false;
//       //     }
//       //     let topElement = stack[stack.length-1];
  
//       //     if (bracketsPair[currentSymbol] === topElement) {
//       //       stack.pop()
//       //     } else {
//       //       return false;
//       //     }
//       //   }
//       // }
//       // return stack.length === 0;
      
  
//   }
  
//   return stack.length === 0;
//   }
 
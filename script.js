const resultDisplay = document.querySelector('.result');
const cButton = document.querySelector('.cbutton');
const twoParentButton = document.querySelector('.two-parent');
const persentButton = document.querySelector('.percent');
const divideButton = document.querySelector('.divide');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');
const multyplyButton = document.querySelector('.multiply');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const minusButton = document.querySelector('.minus');
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const plusButton = document.querySelector('.plus');
const numberOff = document.querySelector('.off');
const zeroButton = document.querySelector('.zero');
const comaButton = document.querySelector('.coma');
const equalsButton = document.querySelector('.equals');

let firstNumber;
let secondNumber;
let answerNumber;
let step = 1;
let opsString;

let longNumberString = '';

const displayNumber = function(buttonPressed){
    if(step === 1){
        longNumberString = longNumberString + buttonPressed.textContent;
        resultDisplay.textContent = longNumberString;
         console.log(longNumberString);
    } else {
        
        longNumberString = longNumberString + buttonPressed.textContent;
        resultDisplay.textContent = longNumberString;
    }
}

comaButton.addEventListener('click', function(){
    longNumberString = longNumberString + '.';
    resultDisplay.textContent = longNumberString;
});

const numbersArr = [zeroButton, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton];
const opsArr = [divideButton, multyplyButton, minusButton, plusButton];
const opsStringsArr = ['divided', 'multiplied', 'minused', 'plused'];

numbersArr.forEach(function(n, i){
        n.addEventListener('click', function(){
            displayNumber(n);
        }) 
});

opsArr.forEach(function(o, i){
   o.addEventListener('click', function(){
       opsString = opsStringsArr[i];
       console.log(opsString);
       resultDisplay.textContent = o.textContent;
       firstNumber = Number(longNumberString);
       console.log(`The first number is ${firstNumber} ${o.textContent}`);
       step = 2;
       console.log(`step is ${step}`);
       longNumberString = '';
   })
})



const answerCalculate = function(){
    secondNumber = Number(longNumberString);
    if(firstNumber && opsString){
      if(opsString === 'divided'){
          answerNumber = firstNumber/secondNumber;
      } else if(opsString === 'multiplied'){
          answerNumber = firstNumber * secondNumber;
      } else if(opsString === 'minused' ){
          answerNumber = firstNumber - secondNumber;
      } else if(opsString = 'plused' ){
         answerNumber = firstNumber + secondNumber;
      }
    };
    console.log(`The answer is ${answerNumber}`);
    if(answerNumber !== undefined){
        resultDisplay.textContent = answerNumber;
    }
}

equalsButton.addEventListener('click', answerCalculate);

cButton.addEventListener('click', function(){
    firstNumber = undefined;
    secondNumber = undefined;
    longNumberString = '';
    resultDisplay.textContent = '0';
});


numberOff.addEventListener('click', function(){
    document.querySelector('.calculator-container').style.opacity = '0';
})

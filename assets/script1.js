

let winHolder = 0;
let lossHolder = 0;
let wins = $('#wins');
let losses = $('#losses');



function resetGame() {
    startGame();
}


startGame();


function startGame () {
    wins.text(winHolder);
losses.text(lossHolder);
let rdmValue1 = Math.floor(Math.random() * 10 + 1);
console.log('1');
let rdmValue2 = Math.floor(Math.random() * 10 + 1);
console.log('2');
let rdmValue3 = Math.floor(Math.random() * 10 + 1);
console.log('3');
let rdmValue4 = Math.floor(Math.random() * 10 + 1);
console.log('4');
let rand = Math.floor(Math.random() * 50 + 50);
console.log('5');
let targetScore = rand;
console.log('6');
let startingScore = 0;
console.log('8');

let playerScore = $('.score');
console.log('9');
playerScore.text(startingScore);
console.log('10');
playerScore.css('font-size', '50px')
console.log('11');
playerScore.css('font-weight', '700');
console.log('12');
let targetElement = $('.target');
console.log('13');
targetElement.text(targetScore);
console.log('???');
targetElement.css('font-size', '50px');
console.log('14');
targetElement.css('font-weight', '700')
console.log('15');

function checkGuess() {
    if (startingScore === targetScore) {
        winHolder++;
        console.log('20');
        wins.text(winHolder);
        console.log('21');
        resetGame();
        console.log('22');

    } else if (startingScore > targetScore) {
        lossHolder++;
        console.log('23');
        losses.text(lossHolder);
        console.log('24')
        resetGame();
        console.log('25');
    } else{
        return;
    }
}


$("#val1").click(function () {
   
    let added = startingScore + rdmValue1;
    console.log('16');
    startingScore = added;
    console.log('17');
    playerScore.text(startingScore);
    console.log('18');
    checkGuess();

})

$("#val2").click(function () {
    let added = startingScore + rdmValue2;
    console.log('26');
    startingScore = added;
    console.log('27');
    playerScore.text(startingScore);
    console.log('28');
    checkGuess();
    
})

$("#val3").click(function () {
    let added = startingScore + rdmValue3;
    console.log('36');
    startingScore = added;
    console.log('37');
    playerScore.text(startingScore);
    console.log('38');
    checkGuess();
})

$("#val4").click(function () {
    let added = startingScore + rdmValue3;
    console.log('46');
    startingScore = added;
    console.log('47');
    playerScore.text(startingScore);
    console.log('48'); 
    checkGuess() ;
})

}


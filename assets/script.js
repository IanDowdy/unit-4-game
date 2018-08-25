let winHolder = 0;
let lossHolder = 0;
let wins = $('#wins');
let losses = $('#losses');

startGame();

function resetGame() {
    startGame();
}


function startGame () {
    wins.text(winHolder);
losses.text(lossHolder);
let rdmValue1 = Math.floor(Math.random() * 10 + 1);
let rdmValue2 = Math.floor(Math.random() * 10 + 1);
let rdmValue3 = Math.floor(Math.random() * 10 + 1);
let rdmValue4 = Math.floor(Math.random() * 10 + 1);
let rand = Math.floor(Math.random() * 50 + 50);
let targetScore = rand;
let startingScore = 0;

let playerScore = $('.score');
playerScore.text(startingScore);
playerScore.css('font-size', '50px')
playerScore.css('font-weight', '700');
let targetElement = $('.target');
targetElement.text(targetScore);
targetElement.css('font-size', '50px');
targetElement.css('font-weight', '700')



$("#val1").click(function () {
    let added = startingScore + rdmValue1;
    startingScore = added;
    playerScore.text(startingScore);
    if (startingScore === targetScore) {
        winHolder++;
        wins.text(winHolder);
        resetGame();

    } else if (startingScore > targetScore) {
        lossHolder++;
        losses.text(lossHolder);
        resetGame();
    } else{
        return;
    }

});

$("#val2").click(function () {
    let added = startingScore + rdmValue2;
    startingScore = added;
    playerScore.text(startingScore);
    if (startingScore === targetScore) {
        winHolder++;
        wins.text(winHolder);
        resetGame();

    } else if (startingScore > targetScore) {
        lossHolder++;
        losses.text(lossHolder);
        resetGame();

    } else{
        return;
    }
})

$("#val3").click(function () {
    let added = startingScore + rdmValue3;
    startingScore = added;
    playerScore.text(startingScore);
    if (startingScore === targetScore) {
        winHolder++;
        wins.text(winHolder);
        resetGame();

    } else if (startingScore > targetScore) {
        lossHolder++;
        losses.text(lossHolder);
        resetGame();
    } else{
        return;
    }
})

$("#val4").click(function () {
    let added = startingScore + rdmValue3;
    startingScore = added;
    playerScore.text(startingScore);
    if (startingScore === targetScore) {
        winHolder++;
        wins.text(winHolder);
        resetGame();

    } else if (startingScore > targetScore) {
        lossHolder++;
        losses.text(lossHolder);
        resetGame();
    } else{
        return;
    }
})
}




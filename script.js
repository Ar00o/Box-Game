const $time = document.querySelector('#time');
const $result = document.querySelector('#result')
const $game = document.querySelector('#game');
const $start = document.querySelector('#start');
const $change_time = document.querySelector('#change-time');


const colors = ['red', 'blue', 'green', 'black', 'orange', 'yellow', 'gray' ];
let score = 0;

$start.addEventListener('click', startGameFunc);


function startGameFunc(){

    score = 0;
    $result.textContent = score;


    $start.style.display = 'none';
    $game.style.backgroundColor = 'white';
    $change_time.setAttribute('disabled', true);
    
    
    const interval = setInterval(() => {
        const time = +$time.textContent - 0.1;
        $time.textContent = time.toFixed(1);


        if(time <= 0){
            clearInterval(interval);
            endGameFunc();
        }
        
    },100);

    renderBox();
    
}

function endGameFunc(){
    $start.style.display = 'inline-block';
    $game.style.backgroundColor = 'gray';
    $change_time.removeAttribute('disabled');
    $time.textContent = (+$change_time.value).toFixed(1);

    $game.textContent = '';
}

function changeTimeFunc(){
    $time.textContent = (+$change_time.value).toFixed(1);
    if(+$change_time.value < 5){
        $change_time.value = 5
    } 
}

function renderBox(){
    $game.textContent = '';

    const boxSize = randomBox(30,60);
    const colorIndex = randomBox(0, colors.length - 1);
    const top = randomBox(0, 300 - boxSize -  10);
    const left = randomBox(0, 300 - boxSize - 10);
   
    const $box = document.createElement('div');
    $box.style.width = $box.style.height = boxSize + 'px';
    $box.style.backgroundColor = colors[colorIndex];
    $box.style.cursor = 'pointer';
    $box.style.position = 'absolute';
    $box.style.top = top + 'px';
    $box.style.left = left + 'px';
    $box.addEventListener('click', clickedBoxFunc);


    $game.append($box);

}

function clickedBoxFunc(){
    renderBox();
    score++;
    $result.textContent = score;
}

function randomBox(min,max){
    const diff = max - min + 1;
    return Math.floor(Math.random() *diff) + min;
}







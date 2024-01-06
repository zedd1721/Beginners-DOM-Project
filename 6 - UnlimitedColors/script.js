const start = document.getElementById('start');
const stop = document.getElementById('stop');



let myInterval;
function randomColors(){
    let randomValue = "0123456789ABCDEF";
    let colors ="#";
    for(let i =0; i<6; i++){
        colors = colors + randomValue[parseInt(Math.random()*16)];
    }
    console.log(colors);
    document.body.style.backgroundColor = colors;
    
};

start.addEventListener('click', function(){
    console.log('Start Button Clicked');
    if(myInterval === null){
        myInterval = setInterval(randomColors, 1000);
    }
});

stop.addEventListener('click', function(){
    console.log('Stop button clicked');
    clearInterval(myInterval);
    myInterval = null;
});

//Самовызывающиеся функция. Вся логика игры будет прописана в нутри одной функции потому что это правило хорошего кода.
(function () {
let isPause = false;
let animationId = null;
const speed = 3;

 
const car = document.querySelector('.car');
const trees = document.querySelectorAll('.tree');

const treesCooords = [];
const carCoords = getCoords(car);
const carMoveInfo = {
top: null,
bottom: null,
left: null,
right: null,
};

for(let i = 0;i < trees.length; i++){
    const tree = trees[i];
    const coorsTree = getCoords(tree);



treesCooords.push(coorsTree);
}
//.window innerHeight: 919, innerWidth: 841
// для отслеживания собитыя нажатия кнопки можно спользовать keydown keyup keypress
document.addEventListener('keydown', (event) => {
const code = event.code

if (code === 'ArrowUp' && carMoveInfo.top === null){
    carMoveInfo.top = requestAnimationFrame(carMoveToTop);
}
else if (code === 'ArrowDown' && carMoveInfo.bottom === null) {
    carMoveInfo.bottom = requestAnimationFrame(carMoveToBottom);
}
else if (code === 'ArrowLeft' && carMoveInfo.left === null){
    carMoveInfo.left = requestAnimationFrame(carMoveToLeft);
}
else if (code === 'ArrowRight'  && carMoveInfo.right === null){
    carMoveInfo.right = requestAnimationFrame(carMoveToRight);
}

//code ArrowUp, ArrowDown, ArrowLeft,  ArrowRight
});
document.addEventListener('keyup', (event) => {
    const code = event.code

    if (code === 'ArrowUp'){
        cancelAnimationFrame(carMoveInfo.top);
        carMoveInfo.top = null;
    }
    else if (code === 'ArrowDown') {
        cancelAnimationFrame(carMoveInfo.bottom);
        carMoveInfo.bottom = null;
    }
    else if (code === 'ArrowLeft'){
        cancelAnimationFrame(carMoveInfo.left);
        carMoveInfo.left = null;   
    }
    else if (code === 'ArrowRight'){
        cancelAnimationFrame(carMoveInfo.right);
        carMoveInfo.right = null;   
    }

    
    //code ArrowUp, ArrowDown, ArrowLeft,  ArrowRight
    
  });

function carMoveToTop (){
let newY = carCoords.y - 5;
carCoords.y = newY;
carMove(carCoords.x, newY);
carMoveInfo.top = requestAnimationFrame(carMoveToTop);

}
function carMoveToBottom (){
    let newY = carCoords.y + 5;
    carCoords.y = newY;
    carMove(carCoords.x, newY);
    carMoveInfo.bottom = requestAnimationFrame(carMoveToBottom);

}

function carMoveToLeft (){
    let newX = carCoords.x - 5;
carCoords.x = newX;
carMove(newX, carCoords.y);
carMoveInfo.left = requestAnimationFrame(carMoveToLeft);

}

function carMoveToRight (){
    let newX = carCoords.x + 5;
carCoords.x = newX;
carMove(newX, carCoords.y);
carMoveInfo.right = requestAnimationFrame(carMoveToRight);

}

function carMove(x, y){
    car.style.transform = `translate(${x}px, ${y}px)`;
}

animationId = requestAnimationFrame(startGame);

function startGame(){

treesAnimation();
animationId = requestAnimationFrame(startGame);

}


function treesAnimation(){
     
    for(let i = 0;i < trees.length; i++){
        const tree = trees[i];
        const coords = treesCooords[i];
        
        let newYCoord = coords.y + speed;
        
        if(newYCoord > window.innerHeight){
            newYCoord = -400;
        }
        treesCooords[i].y = newYCoord;
        tree.style.transform = `translate(${coords.x}px, ${newYCoord}px)`;
        }
    }
    
   

function getCoords(element){
    const matrix = window.getComputedStyle(element).transform;
    const array = matrix.split(','); 
    const y = array[array.length - 1];
    const x = array[array.length - 2];
    const numericY = parseFloat(y);
    const numericX = parseFloat(x);
    return {x: numericX, y:numericY};
}

const button = document.querySelector('.Play');
button.addEventListener('click', ()=> {
isPause = !isPause;
    if(isPause){
    cancelAnimationFrame(animationId);
    button.children[0].style.display = 'initial';
    button.children[1].style.display = 'none';
} 
else {
    animationId = requestAnimationFrame(startGame);
    button.children[0].style.display = 'none';
    button.children[1].style.display = 'initial';
}



    });
})();



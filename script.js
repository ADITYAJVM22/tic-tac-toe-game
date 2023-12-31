alert("Hi and welcome to the tic-tac-toe game. Enjoy the game 😁");
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgcont=document.querySelector(".msg");
let msg=document.querySelector("#win");
let turnO=true;   //player x and player O turn will be stored

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clixked");
        if(turnO){
            box.innerText="O";
            box.style.color="blue";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcont.classList.add("hid");
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congatulations, Winner is ${winner}`;
    msgcont.classList.remove("hid");
    disableBoxes();
}
const showDraw=()=>{
    msg.innerText=`Oops game is draw press new game`;
    msgcont.classList.remove("hid");
    disableBoxes();
}
const checkWinner=()=>{
    let draw=true;
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                return;
            }
        }
    }
    for (let box of boxes) {
        if (box.innerText === "") {
            draw = false; // If any box is empty, the game is not a draw yet
            break;
        }
    }

    if (draw) {
        showDraw();
    }
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

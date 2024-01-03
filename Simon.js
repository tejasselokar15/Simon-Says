let gameseq =[];
let userseq =[];
let btns=["yellow","red","blue","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is Started");
        started=true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },290);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },290);
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx= Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}

function checkans(idx){
  

    if(userseq[idx]== gameseq[idx]){
        if (userseq.length == gameseq.length)
        setTimeout(levelup,1000);
    } else{
        h2.innerHTML = `Game over! Your Score was <b>${level}</b><br>Press any key to start`;
      
        document.querySelector("body").style.backgroundColor="white";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgb(20, 20, 20)";
        },150);
        reset()
    }
}

function btnpress(){
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor)
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click", btnpress);
}
function reset(){
    userseq=[]
    started=false;
    gameseq=[];
    level=0;
}
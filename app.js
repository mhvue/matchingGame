//using vanilla js

const card = document.querySelector(".card");
const allCards = document.querySelectorAll(".card-content");
const backCards = document.querySelectorAll(".back-card");
const scoreCard = document.getElementById("scoreHere")
const numArr = [1,1,2,2,3,3,4,4,5,5];
let collectNum =[];
let cardInfo = [];
let score = 0;
const modal = new bootstrap.Modal(document.getElementById("msgModal"));
const closeBtn = document.querySelector(".close");
const startBtn = document.querySelector(".btn");
let startTime; 

//move or shuffle the array of numbers and add it to back-card 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array


function randomNum(){
let sorted = numArr.sort( () => 0.5 - Math.random());
console.log(sorted)

sorted.forEach((num, index) =>{
    //input on each back card
   const info = `<h2 class='num' data-num=${num}>${num}</h2>`;
   const selector = `.card:nth-child(${index+1}) .back-card`;
   const element = document.querySelector(selector);
   element.innerHTML = info;

   //removing gray color on back of cards 
   if(element.classList.contains("grayOut")){
       element.classList.remove("grayOut");
   }
   
});
};

randomNum();

function peek(){
//when clicking on start the game. 
startBtn.addEventListener("click", function(e){
    e.target.classList.add("grayOut")
    allCards.forEach(card =>{
        if(card.children[1].classList.contains("grayOut")){
            //don't flip
        }else{
            start();
            setTimeout(flip, 5000);
        }
        
    });
},{once: true})
}

peek();

//now you add click event to each instance of .card-content
//to get card to flip
allCards.forEach(card =>{
     card.addEventListener("click",function game(){
        //toggle class of active on card-content
       card.classList.toggle("active");
       card.classList.add("open")
       //get the data attribute per back card 
       const dataNum = card.children[1].children[0].dataset.num;
       //get back card clicked on 
       const backCard = card.children[1];

       //pushing those data attribute into array to check for match 
       collectNum.push(parseInt(dataNum));
       //pushing the backCard into array  so we 'store' type of card user clicked on
       cardInfo.push(backCard);

        //can't click on same card twice
//         cardInfo.forEach(c =>{
// //console.log(c)
//         c.parentNode.removeEventListener("click",game)
//         });
       //trying to add to check for all cards class to remove click event
       
       //checking if the two numbers match 
        if(collectNum.length === 2 && collectNum[0] == collectNum[1]){
            score++;
            scoreCard.textContent = score;
            collectNum = []; //reset length of collectNum back to 0
            setTimeout(grayOut,2000);
        }
        //if NO match 
        else if (collectNum.length === 2 && collectNum[0] != collectNum[1]){   
            collectNum = []; //reset length of collectNum back to 0
            setTimeout(turnCard,2000);
            // NEXT STEP adding click event back 
       
        }
    
         winGame();

    });

});

//flip all the cards over 1st to allow peek at the numbers on the back 
function start(){
    startTime = setTimeout(function(){
        allCards.forEach(card=>{
        card.classList.add("active");
    });
}, 1000);

};

//flip the cards over now
function flip(){
    allCards.forEach(card=>{
        card.classList.remove("active");
    });
};

//gray out cards that matched and have modal pop up
function grayOut(){
    modal.show();
    for(let i = 0; i < cardInfo.length; i++){
        console.log(cardInfo)
    cardInfo[i].classList.add("grayOut"); 
    cardInfo[i].parentNode.classList.remove("open");
    }
    cardInfo = [];

};

//if no match, turn card back to green side(front side)
function turnCard(){
    for(let i = 0; i < cardInfo.length; i++){
        cardInfo[i].parentNode.classList.remove("active");
    }
    cardInfo = [];
};

//modal to show msg that user won game and ask if mbr like to start again 
function winGame(){
      //check for score 
      if(score === 1){
        const gameOver = "<h1>Nice Job! You found all matches!</h1>";
        const gameMsg = document.getElementById("gameMsg");
        const startAgain = '<button type="button" class="btn btn-warning startYellow">Start Again?</button>'
        gameMsg.innerHTML = gameOver + startAgain;
      }
};

//close out modal
closeBtn.addEventListener("click",function(){
    modal.hide()
});

//when user clicks Start Again btn on modal, game resets 
document.getElementById("gameMsg").addEventListener("click", function(e){
    //checking of class of btn startYellow
    if(e.target.classList[2] === "startYellow"){
        randomNum();
        flip();
        startBtn.classList.remove("grayOut")
        peek();
        score = 0;
        scoreCard.textContent = score;
        modal.hide();
        
    }
})

//LAST STEP reset score back to 0 if game is all done

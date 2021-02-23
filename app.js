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



//move or shuffle the array of numbers and add it to back-card 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
let sorted = numArr.sort( () => 0.5 - Math.random());
console.log(sorted)

sorted.forEach((num, index) =>{
    //console.log(num);
    //input on each back card
   const info = `<h2 class='num' data-num=${num}>${num}</h2>`;
   const selector = `.card:nth-child(${index+1}) .back-card`;
   const element = document.querySelector(selector);
   element.innerHTML = info;

});

//now you add click event to each instance of .card-content
//to get card to flip
allCards.forEach(card =>{
   // console.log(card)
    card.addEventListener("click",function(e){
        //toggle class of active on card-content
       card.classList.toggle("active");

       const dataNum = card.children[1].children[0].dataset.num;
       const backCard = card.children[1];
       collectNum.push(parseInt(dataNum));
       cardInfo.push(backCard)
     
        //gotta make sure can't click on same card twice

         if(collectNum.length === 2 && collectNum[0] == collectNum[1]){
            console.log(collectNum[0],collectNum[1])
            score++;
            scoreCard.textContent = score;
            collectNum = []; //reset length of collectNum back to 0
            setTimeout(grayOut,2000)
        }
        else if (collectNum.length === 2 && collectNum[0] != collectNum[1]){
            console.log("no match")
            collectNum = []; //reset length of collectNum back to 0
            setTimeout(turnCard,2000)
        }
    
    });
});

//gray out cards that matched and have modal pop up
function grayOut(){
    modal.show();
    for(let i = 0; i < cardInfo.length; i++){
    cardInfo[i].classList.add("grayOut")
    }
    cardInfo = []
};

//if no match, turn card back to green side(front side)
function turnCard(){
    for(let i = 0; i < cardInfo.length; i++){
        cardInfo[i].parentNode.classList.remove("active")
    }
    cardInfo = [];
}

//close out modal
closeBtn.addEventListener("click",function(){
    modal.hide()
});

//reset score back to 0 if game is all done

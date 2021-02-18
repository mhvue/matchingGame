//using vanilla js

const card = document.querySelector(".card");
const allCards = document.querySelectorAll(".card-content");
const backCards = document.querySelectorAll(".back-card");
const scoreCard = document.getElementById("scoreHere")
const numArr = [1,1,2,2,3,3,4,4,5,5];
let collectNum =[];
let score = 0;

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
    
    card.addEventListener("click",function(e){
        //toggle class of active on card-content
       card.classList.toggle("active");

       const dataNum = card.children[1].children[0].dataset.num;
       collectNum.push(parseInt(dataNum));
     
        //gotta make sure can't click on same card twice

         if(collectNum.length === 2 && collectNum[0] == collectNum[1]){
            console.log(collectNum[0],collectNum[1])
            score++;
            scoreCard.textContent = score;
            document.getElementById("msgModal").showModal()
            collectNum = []; //reset length of collectNum back to 0
            //get cards that matched to gray out by add grayout class
            card.children[1].classList.add("grayOut");
            //reset score back to 0 if game is all done
            console.log(collectNum)
        }
        else if (collectNum.length === 2 && collectNum[0] != collectNum[1]){
            console.log("no match")
            collectNum = []; //reset length of collectNum back to 0
            //since cards did not match, flip back to green side 
            console.log(collectNum)
        }
    
    });
});

 

//gray out cards that matched 
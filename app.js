//using vanilla js

const card = document.querySelector(".card");
const allCards = document.querySelectorAll(".card-content");
const backCards = document.querySelectorAll(".back-card");
const numArr = [1,1,2,2,3,3,4,4,5,5];
let collectNum =[];

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
    card.addEventListener("click",function(){
        //toggle class of active on card-content
       card.classList.toggle("active");

       const dataNum = card.children[1].children[0].dataset.num;
       collectNum.push(parseInt(dataNum));
       console.log(collectNum)
       //reset length of arry to have 2 element to compare 
    
        // if(collectNum[0] !== collectNum[1] && collectNum.length > 2){
        //     collectNum = [];
        // }
        if(collectNum[0] === collectNum[1]){
            console.log("win!")
            console.log(collectNum[0],collectNum[1])
        }
        console.log(collectNum)
    
    });
});

 //figure out a way to say if num match num then win, if not, then no win 




//gray out cards that matched 
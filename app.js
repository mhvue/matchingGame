//using vanilla js

const card = document.querySelector(".card");
const allCards = document.querySelectorAll(".card-content");
const numbers = document.querySelectorAll(".num");
const numArr = [1,1,2,2,3,3,4,4,5,5]
//now you add click event to each instance of .card-content
allCards.forEach(card =>{
    card.addEventListener("click",function(){
        //toggle class of active on card-content
       card.classList.toggle("active");
    });
});

//move or shuffle the array of numbers and add it to back-card 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
let sorted = numArr.sort( () => 0.5 - Math.random());
console.log(sorted)

sorted.forEach(num =>{
    console.log(num)
    //input on the back card
})

//figure out a way to say if num match num then win, if not, then no win 
//gray out cards that matched 
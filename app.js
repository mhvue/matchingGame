//using vanilla js

const card = document.querySelector(".card");
const allCards = document.querySelectorAll(".card-content");

//now you add click event to each instance of .card-content
allCards.forEach(card =>{
    card.addEventListener("click",function(){
        //toggle class of active on card-content
       card.classList.toggle("active");
    })
});
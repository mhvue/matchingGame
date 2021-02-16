//using vanilla js

const card = document.querySelector(".card");
const allCards = document.querySelectorAll(".card-content");
console.log(allCards)

//just one instance of that class
// card.addEventListener("click", function(){
//     console.log("hello")
// });

//now you add click event to each instance of .card
allCards.forEach(card =>{
    card.addEventListener("click",function(){
        console.log(card.classList);
        //get to children to add active class to backend
       card.classList.toggle("active")
    })
});
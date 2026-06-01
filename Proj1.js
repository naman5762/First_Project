let choices = document.querySelectorAll(".photo");
let max = 3;
let won = 0;
let lost = 0;
choices.forEach(function(choice){
    choice.addEventListener('click', function(event){
        Loop(event);
})});


function Loop(){
    let choice1;
    let currentChoice = event.target.id;
    let randomNum = Math.floor(Math.random() * max) + 1;
    if(randomNum == 1){
        choice1 = "rock";
        document.getElementById("rock1").style.visibility = "visible";
        document.getElementById("paper1").style.visibility = "hidden";
        document.getElementById("scissor1").style.visibility = "hidden";
        
    }else if(randomNum == 2){
        choice1 = "paper";
        document.getElementById("paper1").style.visibility = "visible";
        document.getElementById("rock1").style.visibility = "hidden";
        document.getElementById("scissor1").style.visibility = "hidden";
    }else{
        choice1 = "scissor";
        document.getElementById("scissor1").style.visibility = "visible";
        document.getElementById("rock1").style.visibility = "hidden";
        document.getElementById("paper1").style.visibility = "hidden";
    }    
    if(currentChoice == "rock"){
        document.getElementById("rock").style.visibility = "visible";
        document.getElementById("paper").style.visibility = "hidden";
        document.getElementById("scissor").style.visibility = "hidden";
        
    }else if(currentChoice == "paper"){
        document.getElementById("paper").style.visibility = "visible";
        document.getElementById("rock").style.visibility = "hidden";
        document.getElementById("scissor").style.visibility = "hidden";
    }else{
        document.getElementById("scissor").style.visibility = "visible";
        document.getElementById("rock").style.visibility = "hidden";
        document.getElementById("paper").style.visibility = "hidden";
    }
    if(currentChoice == choice1){
        alert("It's a tie!");
    }else if(currentChoice == "rock" && choice1 == "scissor"){
        alert("It's a Win!");
        won+= 1;
    }else if(currentChoice == "paper" && choice1 == "rock"){
        alert("It's a Win!");
        won+= 1;
    }else if(currentChoice == "scissor" && choice1 == "paper"){
        alert("It's a Win!");
        won+= 1;
    }else{
        alert("It's a Loss!");
        lost+= 1;
    }
    
    let Win = document.getElementById("won").textContent = `Won:${won}`;
    let Loss = document.getElementById("lost").textContent = `Lost:${lost}`;

    setTimeout(function() { Loop(event); }, 1000);
}
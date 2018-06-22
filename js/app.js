document.addEventListener("DOMContentLoaded", function() {
    
 var theGame = document.querySelector(".the-game");
 var counter = 0;
 var missedCount = 0;

    timer = setInterval(function () {
        var points = document.querySelector(".points");
        var missed = document.querySelector(".missed");
        var title = document.querySelector(".title");
        var zombie = document.createElement("div");
        
        zombie.classList.add("zombie");

       
        var randomNumber = Math.round(Math.random() * (35 - 1) + 1);
        var randomSpead = Math.round(Math.random() * (4 - 1) + 1);

        zombie.style.bottom = randomNumber + "%";
        zombie.style.zIndex = 35 - randomNumber;
        zombie.style.animationDuration = "0.5s," + randomSpead + "s";
        
        
        if (randomNumber > 30) {
            zombie.style.transform = "scale(0.4)";
        } else if (randomNumber > 25) {
            zombie.style.transform = "scale(0.7)";
        }
        
        theGame.appendChild(zombie);
 
        zombie.addEventListener("animationend", function(event) {
            this.remove();
            missedCount++;
            missed.innerText = missedCount;
            if (missedCount === 10) {
                title.innerText = "Game Over";
                clearInterval(timer);
            }
        });

        zombie.addEventListener("click", function (e) {
            
            zombie.classList.remove("zombie");
            counter++;
            points.innerText = counter;
        })

    }, 1000);

});
// Enemies our player must avoid

// function random a number beetwen min and max
function randomFunction (min,max){
    return [Math.round((Math.random() * max) + min)];
}

let positionsY = [60,145,230,315];

class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
    
    constructor (){

        
         
         this.x = -100;
         this.y = positionsY[randomFunction(0,4)];
         this.speed = ((Math.random() * 3) + 1);
         this.sprite = 'images/enemy-bug.png';

     }
     // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
      
        if(this.x > 606) {
            this.x = -100;
            this.y = positionsY[randomFunction(0,4)];
        } else {
            this.x += 100 * this.speed * dt;
        }
    };
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    

    // Draw the enemy on the screen, required method for game
    render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

};





// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    constructor (){
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 400;
        this.moves = 0;
        this.score = 0;
        this.lives = 3;
        this.spriteLive = 'images/Heart.png';
    }

    // Update the player position, required method for game
    // Parameter: dt, a time delta between ticks
    update() {
        return this.y;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    }

    // Draw the player on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        ctx.font = "20px Impact";
        ctx.fillText("SCORE:", 40, 580);
        ctx.font = "25px Impact";
        ctx.fillText(player.score, 120, 580);
        ctx.font = "20px Impact";
        ctx.fillText("LIVES:", 300, 580);
        ctx.font = "50px Impact";
        ctx.fillText("Frogger", 180, 50);
        if (this.lives === 3){
            ctx.drawImage(Resources.get(this.spriteLive), 350, 540, 40, 50);
            ctx.drawImage(Resources.get(this.spriteLive), 400, 540, 40, 50);
            ctx.drawImage(Resources.get(this.spriteLive), 450, 540, 40, 50);
        }else if (player.lives === 2){
            ctx.drawImage(Resources.get(this.spriteLive), 350, 540, 40, 50);
            ctx.drawImage(Resources.get(this.spriteLive), 400, 540, 40, 50);
        }else if (player.lives === 1){
            ctx.drawImage(Resources.get(this.spriteLive), 350, 540, 40, 50);
        }
    }

        reset() {
            player.lives = 3;
            player.moves = 0;
            player.score = 0;
        }


    /* Move player with cursor */
    handleInput(keyMove){
        if ((keyMove == "left") && (this.x > 50)){
            this.x -= 100;
            this.moves++;
        }else if((keyMove == "up") && (this.y > 0)){
            this.y -= 85;
            this.moves++;
        }else if((keyMove == "right") && (this.x < 400)){
            this.x += 100;
            this.moves++;
        }else if((keyMove == "down") && (this.y < 400)){
            this.y += 85;
            this.moves++;
        }
    }
};







// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//let allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy(), new Enemy(), new Enemy(), new Enemy()];
let allEnemies =[];
for (let i = 0; i < 7; i++) {
    allEnemies.push(new Enemy());
}
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

(function start(){
    let modal = document.querySelectorAll(".modal");
    let char = document.querySelectorAll(".char");
    /* Show modal   */
    modal[0].classList.add('block');
   player.sprite = 'images/char-pink-girl.png';

   for (let i = 0; i < char.length; i++){
       char[i].addEventListener('click',function(){
            modal[0].style.display = 'none';
            let charAdress = this.getAttribute("data-image");
            player.sprite = charAdress;

       })
   }
        

       
})();
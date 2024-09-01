class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull; // health
        this.firepower = firepower; //attack power
        this.accuracy = accuracy; // chance of hitting player ship between 0 and 1
    }

    attack(target) {
        if (Math.random() < this.accuracy) {
            target.hull -= this.firepower; // subtract health from firepower
            return `${this.constructor.name} hit the target!`; //says target was hit
        } else { 
            return `${this.constructor.name} missed!`; // says target was not hit
        }
    }

    isDestroyed() {
        return this.hull <= 0; // check if health is less than or equal to 0
    }
}

class PlayerShip extends Ship {
    constructor() {
        super(20, 5, 0.7);
    }
}

class AlienShip extends Ship {
    constructor() {
        const hull = Math.floor(Math.random() * 4) + 3; // random between 3 and 6
        const firepower = Math.floor(Math.random() * 3) + 2; // random between 2 and 4
        const accuracy = Math.random() * 0.2 + 0.8; // random between 0.8 and 1
        super(hull, firepower, accuracy);
    }
}

let player, alienFleet, currentAlien;

function startGame() {
    player = new PlayerShip(); // create a new player ship
    alienFleet = []; // create an empty array for alien ships
    const numberOfAliens = 6; // number of alien ships to make

    for (let i = 0; i < numberOfAliens; i++) {
        alienFleet.push(new AlienShip()); // make an alienship object and push into array
    }

    currentAlien = 0;
    document.getElementById('game-status').innerHTML = `A new alien ship approaches! Alien Ship Health: ${alienFleet[currentAlien].hull}`; // show game status
    document.getElementById('start-button').style.display = 'none'; // hide start button
    document.getElementById('game-controls').style.display = 'block'; // show game controls
}

function attackAlien() {
    if (!player.isDestroyed() && !alienFleet[currentAlien].isDestroyed()) {
        let playerAttack = player.attack(alienFleet[currentAlien]);
        let status = playerAttack;
        if (alienFleet[currentAlien].isDestroyed()) {
            status += `<br>Alien ship destroyed!`;
            currentAlien++;
            if (currentAlien < alienFleet.length) {
                status += `<br>A new alien ship approaches! Alien Ship Health: ${alienFleet[currentAlien].hull}`;
            } else {
                status += `<br>Congratulations! You have destroyed all the alien ships.`;
                endGame(status);
            }
        } else {
            let alienAttack = alienFleet[currentAlien].attack(player);
            status += `<br>${alienAttack}`;
            if (player.isDestroyed()) {
                status += `<br>The USS Assembly has been destroyed. Game over.`;
                endGame(status);
            }
        }
        document.getElementById('game-status').innerHTML = status;
    }
}

function retreat() {
    document.getElementById('game-status').innerHTML = 'You retreated from the battle!';
    endGame();
}

function endGame(status) {
    document.getElementById('game-controls').style.display = 'none';
    document.getElementById('start-button').style.display = 'block';
    document.getElementById('start-button').textContent = `Play Again`;
}

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('attack-button').addEventListener('click', attackAlien);
document.getElementById('retreat-button').addEventListener('click', retreat);

# Space Battle 🚀

### A Fun and Interactive Browser Game Built with HTML, CSS, and JavaScript

Welcome to **Space Battle**, a browser-based game where players defend Earth from an alien invasion! This project showcases my front-end development skills, including interactive UI design, game logic implementation, and object-oriented programming in JavaScript.

## 🛠️ Tech Stack

- **HTML5**: Structure of the game interface
- **CSS3**: Styling for a visually appealing, responsive UI
- **JavaScript (ES6+)**: Core game logic, event handling, and DOM manipulation

## 🎮 Gameplay Overview

In **Space Battle**, you command the USS Assembly, Earth's last defense against a fleet of alien ships. The game features turn-based combat, where strategic decisions can make the difference between victory and defeat.

### Features:
- **Randomized Alien Stats**: Each alien ship has unique attributes, ensuring varied gameplay in every session.
- **Dynamic Combat System**: Simple yet engaging combat mechanics that challenge players to manage risk and reward.
- **Intuitive UI**: A clean and responsive design that enhances user experience.

## 🧩 Object-Oriented Design

The game is built using JavaScript classes, demonstrating my understanding of OOP principles:

### `Ship` Class
The base class representing a ship, encapsulating common properties like `hull`, `firepower`, and `accuracy`.

```javascript
class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(target) {
        if (Math.random() < this.accuracy) {
            target.hull -= this.firepower;
            return `${this.constructor.name} hit the target!`;
        } else {
            return `${this.constructor.name} missed!`;
        }
    }

    isDestroyed() {
        return this.hull <= 0;
    }
}
```


### `PlayerShip` Class
Extends `Ship` and initializes the player with fixed stats, demonstrating inheritance.

```javascript
class PlayerShip extends Ship {
    constructor() {
        super(20, 5, 0.7);
    }
}
```

### `AlienShip` Class
Extends `Ship` and features randomized stats, showcasing encapsulation and polymorphism.

```javascript
class AlienShip extends Ship {
    constructor() {
        const hull = Math.floor(Math.random() * 4) + 3;
        const firepower = Math.floor(Math.random() * 3) + 2;
        const accuracy = Math.random() * 0.2 + 0.8;
        super(hull, firepower, accuracy);
    }
}
```

## 🚀 Project Highlights

- **Interactive Front-End Development**: Showcases my ability to create engaging, interactive applications using JavaScript.
- **Game Design**: Demonstrates understanding of basic game mechanics, randomization, and user engagement.
- **Responsive UI**: Uses CSS Flexbox for a responsive design, ensuring the game looks great on any device.
- **Modular Code**: Clean, well-structured, and commented code, making it easy to understand, maintain, and extend.

## 📂 How to Run the Game

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/space-battle.git
    ```

2. Navigate to the project directory:
    ```bash
    cd space-battle
    ```

3. Open `index.html` in your browser:
    ```bash
    open index.html
    ```

4. Click "Start Game" and enjoy!

## 📈 Potential Enhancements

- **Improved Visuals**: Integrating graphics and animations for a more immersive experience.
- **Sound Effects**: Adding audio feedback for actions to enhance player engagement.
- **Difficulty Levels**: Implementing multiple levels of difficulty to challenge players.

## 🎯 Why This Project?

This project not only demonstrates my technical skills but also my ability to think creatively and deliver a complete, polished product. It serves as an example of how I approach problem-solving, from conceptualization to execution.



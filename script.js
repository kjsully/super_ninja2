//define class
class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    //methods
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(this.name, this.strength, this.speed, this.health);
    }
    drinkSake() {
        this.health += 10
        console.log(`${this.name}'s health is now ${this.health}`);
    }
}


//define class
class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom = () => {
        super.drinkSake();
        console.log("Wise Message");
    }
    showSenseiStats = () => {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`)
    }
}



//test
const n1 = new Ninja("Bob", 100);
n1.sayName();
n1.showStats();
n1.drinkSake();

const s1 = new Sensei("John M")
s1.showSenseiStats();
s1.speakWisdom();
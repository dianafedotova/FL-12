class Fighter {
    constructor(properties) {
        let _name = properties.name;
        this.getName = function() {
            return _name; 
}
        this.damage = properties.damage;
        this.strength = properties.strength;
        this.agility = properties.agility;
        this.curentHealth = properties.hp;
        this.totalHealth = properties.hp;
        this.win = 0;
        this.loss = 0
    }

    getDamage() {
        return this.damage;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.curentHealth;
    }
    attack(defender) {
        const MAX_PROBABILITY = 100;
        const SUCCESS_RANGE = MAX_PROBABILITY - defender.agility;
        const FORCE = Math.floor(Math.random() * MAX_PROBABILITY);
        if (FORCE > SUCCESS_RANGE) {
            console.log(`${this.getName()} attack missed`);
        } else {
            defender.dealDamage(this.damage);
            console.log(`${this.getName()} make ${this.damage} damage to ${defender.getName()}`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.win}, Losses: ${this.loss}`);
    }

    heal(healPoints) {
        if (healPoints + this.getHealth() > this.totalHealth) {
            this.curentHealth = this.totalHealth;
        } else {
            this.curentHealth += healPoints;
        }
    }

    dealDamage(damagePoints) {
        if (this.getHealth() - damagePoints < 0) {
            this.curentHealth = 0;
        } else {
            this.curentHealth -= damagePoints;
        }
    }

    addWin() {
        this.win++;
    }

    addLoss() {
        this.loss++;
    }
}

function battle(fighter1, fighter2) {

    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    if (fighter2.getHealth() <= 0) {
        fighter1.addWin();
        fighter2.addLoss();
        console.log(`${fighter2.getName()} is dead and can't fight`);
    } else if (fighter1.getHealth() <= 0) {
        fighter2.addWin();
        fighter1.addLoss();
        console.log(`${fighter1.getName()} is dead and can't fight`);
    } else {
        battle(fighter1, fighter2);
    }
}

const fighter1 = new Fighter({
    name: 'Maximus',
    damage: 65,
    hp: 330,
    strength: 50,
    agility: 125
});
const fighter2 = new Fighter({
    name: 'Commodus',
    damage: 53,
    hp: 123,
    strength: 30,
    agility: 90
});
battle(fighter1, fighter2);
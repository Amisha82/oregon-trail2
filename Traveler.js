class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        this.food = this.food + 2
        return this.food
    }
    eat() {

        if (this.food === 0) {
            this.isHealthy = false
        }
        else {
            --this.food
        }
    }

    getfood() {
        return this.food
    }
}

class Doctor extends Traveler {
    constructor(name) {
        super(name)

    }
    heal(travelor) {
        return travelor.isHealthy = true

    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2

    }
    hunt() {
        this.food = this.food + 5
        return this.food
    }
    eat() {

        if (this.food < 2) {
            this.food = 0
            return this.isHealthy = false
        }
        else {
            return this.food = this.food - 2
        }
    }
    giveFood(travelor, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            travelor.food = travelor.food + numOfFoodUnits
            return this.food = this.food - numOfFoodUnits
        }
    }
}


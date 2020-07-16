class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        let seatcount = this.capacity - this.passengers.length
        return seatcount
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy === false) {
                return true
            }
            else {
                return false
            }
        }
    }
    totalFood() {
        let totfood = 0
        if (this.shouldQuarantine() === true) {

        }
        for (let j = 0; j < this.passengers.length; j++) {
            console.log(this.passengers[j].getfood())
            totfood = totfood + this.passengers[j].getfood()
        }
        return totfood
    }
}
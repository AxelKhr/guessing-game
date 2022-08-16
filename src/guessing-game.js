class GuessingGame {
    constructor() {
        this.number = 0;
        this.rangeMin = 0;
        this.rangeMax = 0;
    }

    setRange(min, max) {
        this.rangeMin = min;
        this.rangeMax = max;
    }

    guess() {
        this.number = Math.ceil((this.rangeMax + this.rangeMin) / 2)
        console.log(this.number);
        return this.number;
    }

    lower() {
        this.rangeMax = this.number;
    }

    greater() {
        this.rangeMin = this.number;
    }
}

module.exports = GuessingGame;

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(`Поточна сходинка: ${this.step}`);
        return this;
    }
};

ladder.up().up().down().showStep(); 
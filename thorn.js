class Thorn extends LivingCreature{
    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.multiply >= 20) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;

            let newThorn = new Thorn(newX, newY);
            thornArr.push(newThorn);
            this.multiply = 0;
        }
    }

}
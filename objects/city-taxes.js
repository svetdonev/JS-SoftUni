function solve(city, population, treasury) {
    const cityObj = {
        name: city,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            let result = this.population * percentage / 100;
            this.population += result;
        },
        applyRecession(percentage) {
            let result = this.treasury * percentage / 100;
            this.treasury -= result;
        }
    }

    return cityObj;
}

solve('Tortuga', 7000, 15000);
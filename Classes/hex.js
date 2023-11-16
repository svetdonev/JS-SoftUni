class Hex {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    valueOf() {
        return this.value;
    }

    plus(num) {
        if(num === 'object') {
            let parsedValue = this.value + num.value;
            return '0x' + parsedValue.toString(16).toUpperCase();
        } else {
            let parsedValue = this.value + num;
            return new Hex(parsedValue);
        }
    }

    minus(num) {
        if(num === 'object') {
            let parsedValue = this.value - num.value;
            return '0x' + parsedValue.toString(16).toUpperCase();
        } else {
            let parsedValue = this.value - num;
            return new Hex(parsedValue);
        }
    }

    parse(str) {
        return parseInt(str, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.sum = function() {
        return a + b;
    }

    this.substraction = function() {
        return a - b;
    }

    this.multiplication = function() {
        return a * b;
    }

    this.division = function() {
        return a / b;
    }
};

const sum = new Calculator(10,5);

console.log(sum.sum());
console.log(sum.substraction());
console.log(sum.multiplication());
console.log(sum.division());

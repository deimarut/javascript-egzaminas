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

const numbers = new Calculator();
numbers.sum(10,5);
numbers.substraction(10,5);
numbers.multiplication(10,5);
numbers.division(10,5);

/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        if (this.budget >= 100000000) {
            return `The film "${this.title}", directed by ${this.director} has ${this.budget} mln USD budget`;
        } else {
            return `Sorry but "${this.title}" is not expensive enough to be in this list:)`
        }
    }
};

const titanic = new Movie('Titanic', 'James Cameron', 1700000000);
const topGun = new Movie('Top Gun', ' Joseph Kosinski', 200000000);
const lowBudgetMovie = new Movie('Budget Movie', 'No director', 100);

console.log(titanic.wasExpensive());
console.log(topGun.wasExpensive());
console.log(lowBudgetMovie.wasExpensive());
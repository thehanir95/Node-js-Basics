const superHero = require('./super-hero')

const batman = new superHero('batman')
console.log(batman.getName());
batman.setName('john khanna')
console.log(batman.getName());

const superMan = new superHero('superman')
console.log(superMan.getName());
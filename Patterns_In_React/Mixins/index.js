class Dog {
    constructor(name){
        this.name = name;
    }
}


const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping")
}


//Mixin
const dogFunctionality = {
    __proto__: animalFunctionality,
    bark: () => console.log('Woof!'),
    wagTail: () => console.log("Wagging my tails!"),
    play: () => console.log("Playing"),
    walk() {
        super.walk();
    },
    sleep() {
        super.sleep();
    }
};






// Object.assign(dogFunctionality, animalFunctionality); // Any new instances of Dog can now access the walk and sleep methods
Object.assign(Dog.prototype, dogFunctionality); //Adding mixing to dog class



//Testing
const pet1 = new Dog("Daisy");

console.log(pet1.name)
console.log(pet1.bark());





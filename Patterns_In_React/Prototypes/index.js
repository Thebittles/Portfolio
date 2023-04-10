

class Dog {
    constructor(name){
        this.name = name;
    }


    bark(){
        return 'Woof';
    }
}


Dog.prototype.play = () => { console.log("Playing now")}

// console.log(Dog.prototype);
  
  
  


let dog1 = new Dog("tater");

// console.log(dog1.name);
// console.log(dog1.__proto__);


class SuperDog extends Dog {
    constructor(name){
        super(name);
    }

    fly(){
        return "Flying!"
    }
}

let dog2 = new SuperDog("Daisy");

console.log(dog2.name)
console.log(dog2.fly())
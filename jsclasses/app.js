class Dog {
    constructor(newName, newBreed, newCollar, newAge, newCuteness = true){
        this.name = newName;
        this.breed = newBreed;
        this.collar = newCollar;
        this.age = newAge;
        this.cuteness = newCuteness;

    }

    bark(){
        console.log("Woof! i am a " + this.breed)
    }
}

let fido = new Dog("Fido", "Frenchie", "leather", 7);

console.log(fido);

fido.bark()

class BarkError extends Error {
    constructor(dogName, dogBreed){
        super(`${dogName} of breed ${dogBreed} failed to bark.`)
    }
}
// classes are a way to define the blueprints for creating objects
// (these objects are diffrent from the objects defined from the objects defined in the last section)

// example:-

class animal {

    // a constructor is a special function that automatically runs when you create a new object using the new keyword.
    constructor(typeofanimal, species, color, size) {
        this.typeofanimal = typeofanimal;
        this.species = species;
        this.color = color;
        this.size = size;
    }
    bird() {
        if (this.typeofanimal === "bird") {
            console.log(`this is a bird . species:- ${this.species}`);
        }
    }
    wildAnimal() {
        if (this.size === "big") {
            console.log(`this is a big animal. species:- ${this.species}`);
        } else {
            console.log("not a wild animal");
        }
    }

}

const cow = new animal("cow", "mammal", "white", "big") // creating an object from animal class or instance of the rectangle class
const isthiscow = cow.wildAnimal()

const sparrow = new animal("bird", "sparrow", "brown", "small") // creating an object from animal class or instance of the rectangle class
const isthisbird = sparrow.bird()
const iswildAnimal = sparrow.wildAnimal()





class Animal {
    constructor(name){
        this.name=name;

    }
    makeSound(){
        console.log('Generica Animal Sound');
    }
    
}

class Dog extends Animal{
    constructor(name){
        super()
    }
    makeSound(){
        super.makeSound()
        console.log('Guao Guao');
    } 
}

const a1= new Animal('Dog')
const a2= new Dog('Robert')

a1.makeSound()
a2.makeSound()


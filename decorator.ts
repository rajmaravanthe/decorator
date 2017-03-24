////PART A

function ClassDecorator(target) {
    target.prototype.name = "ABD";
    console.log(`Function name is ${target.name}`); // Print the target name
}

@ClassDecorator

class country {
    name: string; // define a param with value
}

var player = new country(); // instantiate and access the value of proprty
console.log(`Property value of name is ${player.name} `)


//////PART B 

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false) // Decor with property value;
    greet() {
       console.log(`Property key is ${descriptor.enumerable} `) // Console the value of key
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`Property key is ${propertyKey} `) // Console the value of key
        descriptor.enumerable = value;
    };
}
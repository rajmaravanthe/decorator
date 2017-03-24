////PART A
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function ClassDecorator(target) {
//     target.prototype.name = "ABD";
//     console.log(`Function name is ${target.name}`); // Print the target name
// }
// @ClassDecorator
// class country {
//     name: string; // define a param with value
// }
// var player = new country(); // instantiate and access the value of proprty
// console.log(`Property value of name is ${player.name} `)
//////PART B 
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false) // Decor with property value;
], Greeter.prototype, "greet");
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log("Property key is " + propertyKey + " ");
        descriptor.enumerable = value;
    };
}

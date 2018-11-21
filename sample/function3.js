
// function Person(first, last){
//     this.first = first;
//     this.last = last;
//     this.fullName = function(){
//         return this.first + ' ' + this.last;
//     }
//     this.fullNameReversed = function(){
//         return this.last + ", " + this.first;
//     }
// }

// var person = new Person('민', '김');
// console.log(person);
// console.log("-------------");
// console.log(person.fullName);
// console.log(person.fullNameReversed);
// console.log("-------------");
// console.log(person.fullName());
// console.log(person.fullNameReversed());
// console.log("-------------");
// var person2 = new Person('경민', '김');
// console.log("-------------");
// console.log(person2.fullName);
// console.log(person2.fullNameReversed);
// console.log("-------------");
// console.log(person2.fullName());
// console.log(person2.fullNameReversed());
// console.log("-------------");
// console.log(Person.length);

//------------------

// function Person2(first, last){
//         this.first = first;
//         this.last = last;
// }

// Person2.prototype.fullName = function(){
//     return this.first + ' ' + this.last;
// }
// Person2.prototype.fullNameReversed = function(){
//     return this.last + ', ' + this.first;
// }

// var person2 = new Person2("경민", "김");
// console.log(person2.fullName());

//---


class Person3{
    constructor (first, last){
        this.first = first;
        this.last = last;
    }
    fullName(){
        return this.first + ' '+  this.last;
    }
}
var person3 = new Person3("경민", "김");
console.log(person3.fullName());









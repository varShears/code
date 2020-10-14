// es5

// function Parent(name,age){
//     this.name = name
//     this.age = age
// }

// Parent.prototype.say = function(){
//     console.log(this.name,this.age)
// }

// function Child(name,age){
//     Parent.call(this,name,age)
// }

// Child.prototype = Object.create(Parent.prototype)
// Child.prototype.constructor = Child


// Child.prototype.sayName = function(){
//     console.log(this.name)
// }

// es6

class Parent{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    say(){
        console.log(this.name,this.age)
    }
}

class Child extends Parent{
    constructor(name,age){
        super(name,age)
    }

    sayName(){
        console.log(this.name)
    }
}

let a = new Child('wo',28)

console.log(a.say())
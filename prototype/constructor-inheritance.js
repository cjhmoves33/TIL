function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second
}
Person.prototype.sum = function() {
    return this.first + this.second
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second);
    this.third =third;
}
PersonPlus.prototype.avg = function(){
    return (this.first + this.second + this.third)/3;
}
PersonPlus.prototype.__proto__ = Person.prototype
// PersonPlus.prototype = Object.create(Person.prototype)
// PersonPlus.prototype.constructor = PersonPlus

let kim = new PersonPlus("kin", 10, 20 ,30)
console.log(kim.sum())
console.log(kim.constructor)
console.log(kim.avg())

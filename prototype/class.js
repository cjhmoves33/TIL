class Player {

    constructor(name, age, team, statA, statB) {
        this.name = name;
        this.age = age;
        this.team = team;
        this.statA = statA;
        this.statB = statB;
    }

    get name() {
        return this._name
    }

    set name(val) {
        if(val.length < 4) {
            console.log("name is too short")
            return;
        } else {
            this._name = val
        }
    }

    sum() {
        return this.statA + this.statB
    }
}

class StarPlayer extends Player{

    constructor(name, age, team, statA, statB, statC) {
        super(name, age, team, statA, statB);
        this.statC = statC
    }

    sum() {
        return super.sum() + this.statC
    }
}

let son = new Player("SONY", 20, "TH", 90, 80)
let park = new Player("PARK", 30, "MU", 85, 90)
let starSon = new StarPlayer("StarSony", 20, "TH", 90, 80, 20)

console.log(son.__proto__)
console.log(Player.prototype)
console.log(Object.getOwnPropertyNames(Player.prototype))



class animal {
    name = "dog"
    alias = "doge"
    sound() {
        console.log("bark!")
    }

    constructor() {
        this.sound()
        console.log(this.name);
    }
}
// new animal()

class cat extends animal {
    name = "cat"
    alias = "navi"
    sound() {
        console.log("meow")
        console.log(this.alias)
    }
}

// let naiv = new cat()



function parent(){}
parent.prototype.intro = function(){
    console.log("parent!!")
}
function child(){}
child.prototype = new parent()

// let baby = new child()
// baby.intro()
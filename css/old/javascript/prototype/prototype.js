function player(naming, backNum, position){
    this.name = naming;
    this.backNumber = backNum;
    this.position = position;
    this.goalMsg = function(){
        console.log(this.name, ", GET SCORE!!")
    }
}

const SON = new player("son", 7, "LW")
// SON.goalMsg()


function ScorePrinter(name, first, second) {
    this.name = name || "bakk";
    this.firstScore = first;
    this.secondScore = second; 
}
ScorePrinter.prototype.sum = function() {
    return this.name + '\'s Score Summary : ' + (this.firstScore + this.secondScore)
}


let son = new ScorePrinter("son", 10, 20)
let bakk = new ScorePrinter()

console.log(son.__proto__)
console.log(ScorePrinter.prototype)
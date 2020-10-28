// prototype
// prototype based language - 자바스크립트를 지탱하는 기반

function Person(name, first, second){
    this.name = name,
    this.first = first,
    this.second = second,
    this.sum = function(){
        return this.first+this.second;
    }
}

console.log("Person", Person); // 구조체를 그냥 보여줌
console.log("new Person", new Person); // new Person은 constructor 보여줌
console.log("Person()", Person()); // undefined
console.log("new Person()", new Person()); // new Person()도 constructor 보여줌


var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'modified: '+(this.first+this.second);
}
var lee = new Person('lee', 10, 10);
lee.sum = function(){
    return 'modified: '+(this.first+this.second);
}
// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());

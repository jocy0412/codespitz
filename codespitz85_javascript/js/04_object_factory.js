// constructor function (생성자(constructor) - 객체를 생성하고 객체의 초기상태를 세팅)
function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}

// 함수를 호출할 때 new를 붙이면 객체를 생성하는게 된다.
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());


var d1 = new Date('2019-4-10');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()); // month는 0부터 카운팅함

console.log('Date', Date);


console.log('Person()', Person());
console.log('new Person()', new Person());
// prototype
// prototype based language - 자바스크립트를 지탱하는 기반

// 1. prototype 어떤 의미가 있는가?
// 프로토타입은 객체를 정의하는 시점이 아닌, 필요한 시점에 정의할 수 있기에 메모리의 효율적 사용
// 또한, 프로토타입은 생성 된 모든 객체가 공통으로 사용할 수 있고 특정부분만 재정의가 가능

// 2. contructor 내에 메소드를 작성하지 않은 이유는?
// constructor 내에 메소드나 속성을 작성하면 객체를 생성 할 때마다 당장에 사용하지 않는 함수까지 실행하는데에 메모리가 할당된다. 그러나 prototype을 사용하면 메소드를 다른 객체들이 참조해서 사용하기 때문에 성능과 메모리를 절약 할 수 있다.

// 생성자 함수 안에

// 자바스크립트로 객체를 만들 때 속성, 데이터,변수 들은 생성자 안에 넣는게 일반적이다.
// 함수는 생성자이름.prototype.함수 이름으로 프로토타입을 만든다.
// 객체를 생성한 이후에 메소드가 정의되어있지 않으면 객체의 프로토타입에 정의 되어있는지를 찾는다.
// 생성자를 통해서 이미 만들어진 객체의 메서드는 프로토타입을 통해서 일괄적으로 수정 할 수 없다. 그래서 생성된 객체마다 수정을 해줘야하는 불편함이 발생한다.

function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second);
}

// 객체 생성
var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
var lee = new Person('lee', 10, 10);

// 실행
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

// console.log("Person", Person); // 구조체를 그냥 보여줌
// console.log("new Person", new Person); // new Person은 constructor 보여줌
// console.log("Person()", Person()); // undefined
// console.log("new Person()", new Person()); // new Person()도 constructor 보여줌

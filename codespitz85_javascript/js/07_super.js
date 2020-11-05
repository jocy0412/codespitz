// class 란?

// class란 객체를 만들어낼 때 쓰는 construct function의 대체제이다.
// 객체지향 언어(python, java, php 등등)에서 객체를 만들어내는 공장으로써 사용하는데 js는 기존에는 constructor를 통해서 만들지만 ES6부터 class을 통해서 생성하기 시작함

// inheritance(상속)

class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}

//  "class 클래스1 extends 클래스2" 는 클래스2는 클래스1을 상속해서 사용한다.
class PersonPlus extends Person{
    constructor(name, first, second, third){
        // super는 부모가 하지 못하는 상속 이후의 일을 처리할 때 쓴다.
        super(name, first, second)
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.svg()", kim.avg());

// super는 두가지의 용법
// 1. super()는 부모 클래스의 생성자
// 2. super. 는 부모 클래스 지칭한다고 보면 된다. super.method() 부모 클래스의 메소드 실행

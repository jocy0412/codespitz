// 객체의 예시
// Math라는 객체에는 변수(PI), 함수(random과 floor) 그룹핑해서 정리 정돈 한것, 같은 취지의, 연관된 변수와 함수를 객체라는 것으로 그룹핑 한 것
// 함수가 객체에 속해서 함수를 표현할 때는 메소드라고 한다.

console.log("Math.PI", Math.PI); // 3.14
console.log("Math.random()", Math.random()); // 랜덤 method
console.log("Math.floor(3.9)", Math.floor(3.9)); // 내림 method

var MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}

console.log("MyMath.PI",MyMath.PI);
console.log("MyMath.random()",MyMath.random());
console.log("MyMath.floor(3.9)",MyMath.floor(3.9));


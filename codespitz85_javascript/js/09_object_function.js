var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum(); 과 sum.call();은 같은 것이다.

// call 함수의 인자
// call의 첫번째 인자 : 내부적으로 사용할 this 값
// call의 두번째 인자 : 호출하려는 파라미터의 인자값
// 사용법: call(함수의 내부적인 this, pram1, pram2, ...)
// call은 실행할 때 함수의 this 값을 바꾼다

console.log("sum.call(kim)",sum.call(kim, '=> ')); // apply는 call과 비슷, 사용 방식이 다름
console.log("sum.call(lee)",sum.call(lee, ': '));

// bind는 어떤 함수의 내부적으로 this 값을 영구적으로 바꾸는 새로운 함수를 만듬
// bind는 첫번째 인자는 내부적으로 사용할 this
// bind는 어떤 함수의 내부적으로 this의 값을 영구적으로 바꾸는 새로운 함수를 만든다.

var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());

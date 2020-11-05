var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum();
console.log("sum.call(kim)",sum.call(kim, '=> ')); // apply는 call과 비슷
console.log("sum.call(lee)",sum.call(lee, ': '));

// call 함수의 인자
// 첫번째 인자 : 내부적으로 this 값
// 두번째 인자 : 호출하려는 파라미터의 인자값

var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());

// call은 실행할 때 함수의 this 값을 바꾼다
// bind는 어떤 함수의 내부적으로 this 값을 영구적으로 바꾸는 새로운 함수를 만듬
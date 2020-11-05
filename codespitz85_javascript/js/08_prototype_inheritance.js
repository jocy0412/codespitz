// super object의 상속을 받는 sub object가 다른 super object의 상속을 받을 때 prototype link 로 변경해준다.
// prototype link가 가르키고 있는 객체를 prototype object라고 한다.


var superObj = {superVal:'super'}
// __proto__ 사용법
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;

// Object.create(부모)
var subObj = Object.create(superObj); // superObj를 부모로 하는 subObj 객체 생성
subObj.subVal = 'sub'; // subVal의 값을 sub로 입력

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('subObj.superVal =>', subObj.superVal);

kim = {
    name: 'kim',
    first:10, second:20,
    sum:function() {return this.first+this.second}
}

// (방법 1) __proto__ 의 방식
// lee = {
//     name: 'lee',
//     first:10, second:10,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;

// (방법 2) Object.create를 통한 방식 (IE9 이상)
var lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2;
}


// console.log('kim.sum() : ', kim.sum());
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());
// 활용 전
// var kim = {
//     name:'kim',
//     first:10,
//     second:20,
//     sum:function(f, s){
//         return f+s;
//     }
// }
// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));


// 활용 후
var kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second;
    }
}
// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum()", kim.sum());

// this는 this가 속해있는 메소드(sum)가 속해있는 객체(kim)를 가르키도록 약속된 특수한 예약어

// 그러나 lee라는 객체가 추가되면 해당 선언을 다시 해줘야되고 변경사항이 발생하면 모든 객체에 변경사항을 반영해줘야 하는데 그래서 constructor가 필요하다.
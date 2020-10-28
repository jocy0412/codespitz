
// - 객체 지향 프로그래밍
//     객체 : 서로 연관된 변수와 함수를 그룹핑하고 이름을 붙인 것, 이름이 있는 정보를 정리할 때 쓰는 도구
//     객체를 읽을 때는 .을 사용하거나 [대괄호]를 사용

// var memberArray = ["egoing", "graphittie", "leezhce"];
// console.log("memberArray[2]", memberArray[2]);

// var memberObject = {
// manager: "egoing",
// developer: "graphittie",
// designer: "leezhce"
// };
// // 값을 업데이트 하거나 추가()
// memberObject.designer = "leezche";

// // .(점)을 사용하여 호출
// console.log("memberObject.designer", memberObject.designer);

// // 대괄호 사용하여 호출
// console.log("memberObject['designer']", memberObject["designer"]);

// // 값을 제거 할 때
// delete memberObject.manager;
// console.log("after delete memberObject.manager", memberObject.manager);


var memberArray = ["egoing", "graphittie", "leezhce"];
console.group('array loop');
var i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

var memberObject = {
    manager: "egoing",
    developer: "graphittie",
    designer: "leezhce"
};
console.group('object loop');
// 객체에서 사용하는 for문은 for in
for( var name in memberObject ){
    // console.log(name, memberObject.name); // memberObject.name을 하면 undefined가 뜬다. .뒤에는 변수가 올 수 없다. 속성의 이름이 와야한다.
    console.log(name, memberObject[name]); // 대괄호를 사용해서 호출해야된다.
}
console.groupEnd('object loop');
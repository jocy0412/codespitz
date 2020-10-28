const log = (data) => { 
    document.getElementById('print').innerHTML += data + '<br>';
};
// const a = {
//     '0': 3,
//     a: 5,
//     [Symbol()]: 7,
//     b: 6
// };

// let b = 0;
// const a = {
//     [b++]: 3,
//     [b++]: 4
// };


let arr = [1,2,3,4];
while (arr.length > 0){  // 중괄호는 계속 반복할지 판단
    console.log(arr.pop()); // 반복시마다 처리할 것
}


// iterator interface
// iterator 구조는 loop의 구조를 흉내내고 있다.

// 3가지의 지연방법
const a = b || c; // b가 true 일때는 c는 찾지도 읽지도 않는다. - 연산지연
//  지연
// 함수지연

// while문으로 살펴보는 iterator

// 1. 반복자체를 하지는 않지만
// 2. 외부에서 반복을 하려고 할 때
// 3. 반복에 필요한 조건과 실행을
// 4. 미리 준비해둔 객체(캡슐화)
//          ▼
// 반복행위와 반복을 위한 준비를 분리
//          ▼
// 1. 미리 반복에 대한 준비를 해두고
// 2. 필요할 때 필요한만큼 반복
// 3. 반복을 재현할 수 있음

// 객체의 특징
// 1. 캡슐화(은닉)
//      외부에는 내가 보고 싶은 행위만 보여주고 내부의 변화는 안보여줌
// 2. 다양성


// ES6 Loop
// ES6 Loop는 근본적으로 지연 실행에 기반한 iterator 객체를 소비하는 형태
// ES6 기본은 문을 통한 flow control
// ES6 이후에는 객체의 상태, 값, 캡슐화를 통한 loop, 언어에서는 실행만 함


// 사용자반복처리기

// 직접 iterator 반복처리기를 구현
const loop = (iter, f) => {
    // iterable 이라면 iterator를 얻음
    if(typeof iter[Symbol.iterator] == 'function'){
        iter = iter[Symbol.iterator]();
    }

    // iteratorObject가 아니라면 건너뜀 - 쉴드패턴?
    if(typeof iter.next != 'function') return;

    while(true){
        const v = iter.next();
        if(v.done) true; // 종료처리
        f(v.value); // 현재 값을 전달함
    }
}

// ES6는 아래와 같이 구현 가능
const iter = {
    [Symbol.iterator](){return this;},
    arr:[1,2,3,4],
    next(){
        return{
            done: this.arr.length == 0,
            value: this.arr.pop()
        };
    }
};

loop(iter, console.log);
// 4
// 3
// 2
// 1
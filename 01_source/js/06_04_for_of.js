const log = (data) => { 
    document.getElementById('print').innerHTML += data + '<br>';
};

// 내장반복처리기
// for of

const iter = {
    [Symbol.iterator](){return this;},
    arr:[1 ,2 ,3 ,4],
    next(){
        return {
            done: this.arr.length == 0,
            value: this.arr.pop()
        };
    }
};

for(const v of iter){
    console.log(v);
}
//4
//3
//2
//1







// this는 동적 context
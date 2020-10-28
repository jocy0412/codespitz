const log = (data) => { 
    document.getElementById('print').innerHTML += data + '<br>';
};

// 제곱을 요소로 갖는 가상컬렉션

const N2 = class{
    constructor(max){
        this.max = max;
    }
    [Symbol.iterator](){
        let cursor = 0, max = this.max;
        return {
            done:false,
            next(){
                if(cursor > max){
                    this.done = true;
                }else{
                    this.value = cursor * cursor;
                    cursor++;
                }
                return this;
            }
        };
    }
}


// this는 동적 context
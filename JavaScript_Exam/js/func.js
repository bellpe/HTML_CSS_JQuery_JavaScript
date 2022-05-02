// 함수(Function)
// - 함수 선언시 function 키워드 사용
// - 함수선언방법 : 함수선언문, 함수표현식, 화살표함수
// * 브라우저가 자바스크립트코드를 실행하기 전에 가장 먼저하는 일은
//   선언문을 먼저 실행한다는 점!(변수선언, 함수선언문) --> 호이스팅

// show(); //함수호출

// 함수선언문 구조
function show(){
    alert('함수호출!');
}

// 매개변수를 정의할 때 let키워드를 사용하지 않는다!
function show2(msg){
    alert(msg);
}



// String msg = public static void __(){} --> 불가능한 문장 

// showFunc(); // 실행X

// 함수표현식 구조
// - 자바스크립트에서의 함수는 일급객체로 취급
// - 함수표현식으로 선언한 이후에 호출이 가능하다!
let showFunc = function show3(){
    alert('함수호출3!!');
}

// showFunc();

// 화살표함수(Arrow Function)
// - function 키워드 사용X
// - let 변수명 = (매개변수, ...) => { 실행코드 } 이러한 구조로 선언

let arrowFunc = (msg) => {
    // alert('화살표 함수 호출!');
    console.log(msg);
}

// {}, () 생략가능
// {}의 경우 실행코드가 한 줄일 경우만
// ()의 경우 매개변수가 한 개만 있을 경우
let arrowFunc2 = (msg, msg2) => console.log(msg, msg2);

arrowFunc('화살표 함수 호출!');
arrowFunc2('화살표 함수 호출!!', 'Hello')

// 가변 매개변수(...args) : 함수에 넘길 데이터의 개수가 명확하지 않을 때
// - 입력받은 값을 배열로 저장
function nameList(...args){
    for(let i=0; i<args.length; i++){
    console.log(args[i]);
    }
}

nameList('정세연', '임명진', '박병관', '강예진')

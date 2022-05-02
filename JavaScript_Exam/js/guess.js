// 숫자 추측게임 문제정의
// - 1~100까지의 랜덤수 생성(Math.random())
// - 사용자가 입력한 값을 변수에 저장 -> 랜덤수와 비교
// - 랜덤수와 비교하여 큰 수, 작은 수, 동일에 따라서 피드백을 웹 페이지에 출력
//    1. 작은 수 입력시 -> "큰 수를 입력하세요."
//    2. 큰 수 입력시 -. "작은 수를 입력하세요."
//    3. 동일 -> "정답입니다."
//    4. 기회를 다 소진했을 때 -> "도전 실패..."
//    * 내용을 출력할 때 span요소와 내용을 같이 만들어서 출력
//    ex) <span class = "success or fail">메세지<span>
// - 사용자가 입력한 값 중 오답에 대한 데이터를 웹페이지에 출력
// - 추측 버튼에 대한 비활성화(버튼객체.disabled = true)
//   1. 정답을 맞췄을 때
//   2. 기회를 다 소진했을 때

// 1~100까지의 랜덤 수 생성방법
// console.log(parseInt(Math.random()*100)+1);

let rn = parseInt(Math.random()*100)+1;
let count = 0;

// HTML문서 내 변경될 요소 객체들을 선언
const answer = document.getElementById('answer');

// [input [type = "text"], input[type = "botton"]]
const btn = document.getElementsByTagName('input')[1];
const before_result = document.getElementById('before_result');
const result = document.getElementById('result');

console.log('랜덤 수 >>',rn);

function compareNumber(){
    let num = parseInt(answer.value);
    if(num === rn){
        result.innerHTML = '<span class="success">정답입니다.</span>';
        btn.disabled = true;
    }else if(num>rn){
        before_result.innerHTML += `${num} `;
        result.innerHTML = '<span class="fail">작은 수를 입력해주세요.</span>';
    }else{
        before_result.innerHTML += `${num} `;
        result.innerHTML = '<span class="fail">큰 수를 입력해주세요.</span>';
    }

    count += 1;

    if(count === 10){
        btn.disabled = true;
        result.innerHTML = '<span class="fail">도전 실패...</span>';
    }
}
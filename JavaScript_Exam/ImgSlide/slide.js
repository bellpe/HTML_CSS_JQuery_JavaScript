// 1. div 요소 객체를 접근
// 2. 클릭했을 때 이미지를 변경하는 pre(), next() 함수를 정의
//  - 요소객체.style.backgroundImage = 'url("이미지경로")';
//  - 파일명이 숫자로 되어있기 때문에 파일명을 변수화해서 증감식으로 변경
//  - 맨 마지막이미지에서 다음 이미지로 갈 때 첫 이미지로 보여지도록 조건식 추가
//  - 첫 이미지에서 마지막 이미지로 보여지도록 조건식 추가

const img = document.getElementById('img');
let fileNm = 1;

function next(){
    if(fileNm == 14){fileNm=1;}
    else{fileNm+=1;}

    img.style.backgroundImage = 'url("./img/'+fileNm+'.jpg")';
}

function pre(){
    if(fileNm == 1){fileNm=14;}
    else{fileNm-=1;}

    img.style.backgroundImage = `url("./img/${fileNm}.jpg")`;
}

// 주기적으로 동작시킬 때 사용하는 함수
// setInterval(()=>{실행할 로직이나 함수}, 밀리초);
setInterval(()=>{next(); }, 1000);
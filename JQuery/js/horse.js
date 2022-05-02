$(document).ready(()=>{

    let pos = 0; // 말의 위치값

    // 키보드를 눌렀을 때 말을 이동
    $('body').on('keyup',(event)=>{
        
        // 이벤트 객체 : 발생한 이벤트의 정보를 담고 있는 객체
        // key : 누른 키의 이름 ex) ArrowRight, Space
        // keyCode: 누른키의 아스키 값 ex) 39, 32
        // console.log(event.keyCode);

        if(event.keyCode === 37){ // 왼쪽
           
            leftMove();
            $('#bg > img').css('right', `${pos}px`);
        }else if(event.keyCode === 39){// 오른쪽
            
            rightMove();
            $('#bg > img').css('right', `${pos}px`);
        }
    });

    // 왼쪽버튼을 클릭했을 때 말을 왼쪽으로 이동
    // $('.left').on('click', ()=>{
    //     leftMove();
    // });

    $('.left').on('click' , leftMove);

    // 오른쪽 버튼을 클릭했을 때 말을 오른쪽으로 이동
    $('.right').on('click', rightMove);


    // 왼쪽/오른쪽으로 이동하는 함수구현
    function leftMove() {
        if (pos < 1200) {pos +=100;}
        $('#bg > img').css('right', `${pos}px`);
    }

    function rightMove() {
        if (pos > 0) {pos -=100;}
        $('#bg > img').css('right', `${pos}px`);
    }

});
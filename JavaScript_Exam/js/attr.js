// 타입선택자를 이용하여 img요소 객체를 접근
const img = document.querySelector('img');

function imgChange() {
    
    img.setAttribute('src','./img/ddbe1f911d676f198bdfc9b2346ac1e4.gif');

    // 이미지 크기 변경
    img.style.width = '340px';
    img.style.height = '316px';
    // img.style.border = '2px solid black';
    img.style.boxShadow = '3px 3px 3px black';
}
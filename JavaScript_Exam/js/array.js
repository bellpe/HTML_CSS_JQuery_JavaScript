// 배열(Array) 자바스크립트 방식
// - 선언방식 [] 
// - 인덱스를 이용하여 데이터접근
// - 배열의 크기는 length 변수로 접근
// - 다양한 자료형의 데이터를 한 곳에 관리하는 자료구조
// - ArrayList 특성을 가진 배열
// - 가변의 길이

// 배열 다루기
// - 데이터 추가 : push()
// - 데이터 접근 : 배열명[인덱스]
// - 데이터 삭제 : splice(삭제할 데이터 위치, 삭제할 개수), pop()
// - 데이터 수정 : 배열명[인덱스] = 수정할 데이터 

// Java언어
// int[] arr = {1,2,3,4};
// ArrayList list = new ArratList();
// list.add(1);
// list.add("string");
// list.add(true);

let arr = [1,2,3,4,'5', true];


//빈 배열생성
let arr2 = [];

// 배열 내 데이터 초기화 방법1 : 인덱스 활용
// 초기화보다는 수정할 떄 활용
arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;

// 배열 내 데이터 초기화 방법2 : push()
arr2.push(4);
arr2.push(5);
arr2.push(6);

// 배열 내 데이터 접근
for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}

console.log('데이터 삭제 후');

// 배열 내 데이터 삭제하는 방법1 : pop()
arr2.pop();
arr2.pop();
// 삭제할 데이터를 다른 곳에 활용해야 할 때
// let n = arr2.pop();

// 배열 내 데이터 삭제하는 방법2 : splice(삭제할 데이터 위치, 삭제할 개수)
arr2.splice(1,1);
arr2.splice(1,2);

for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}

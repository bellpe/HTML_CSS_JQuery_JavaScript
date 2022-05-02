// 객체(Object)
// - Java : 필드, 메소드
// - JavaScript : 속성, 메소드
// - 구조 : {속성 : 값1, 속성 : 값2, ...}
// - 속성 : 문자열로 정의
// - 값 : number, string, boolean, object, function
// - 종류 : 내장객체(String, Array, Date, Math), 
//          브라우저내장객체(BOM, DOM), 사용자정의객체

/* 
    Java 생성자 구조

    String name;
    public person(String name){
        this.name = name;
    }

*/

let name = 'MJ'

let person = {
    "name" : "임명진",
    "gender" : "남자",
    "age" : "50",
    "greet" : function(){
        // this.property : 객체 내 있는 속성접근
        // console.log(this.name+"님, 안녕하세요!");

        //템플릿문자열(백틱) : 문자열 내 변수를 사용할 수 있는 문법
        // 사용법 :`문자열${변수명}문자열`
        console.log(`${this.name}님, 안녕하세요!`);
    }
}

// person객체의 속성중 name을 출력
// 객체 내 속성접근 방법 : 객체명.속성명
console.log(person.name);

person.greet();
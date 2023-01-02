//1. Date 객체 생성
var now = new Date();
//2. 연도를 가져오는 메서드 .getFullYear()
console.log(now.getFullYear());
//3. 월 정보를 가져오는 메서드 .getMonth() {0: 1월, 1: 2월, ... 10: 11월, 11: 12월}
console.log(now.getMonth());
//4. 일 정보를 가져오는 메서드 .getDate()
console.log(now.getDate());
//5. 1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로 표시하는 메서드 .getTime()
console.log(now.getTime());
//6. 특정 일의 Date 객체 생성
var christmas = new Date('2020-12-25');
console.log(christmas);
//7. 특정 ms의 Date 객체 생성
var ms = new Date(1000);
console.log(ms);
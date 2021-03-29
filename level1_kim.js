/*
 * @name : 서울에서 김서방 찾기
 * @since : 2021-03-29
 */


function solution(seoul) {
    var answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`;
    return answer;

}

var seoul = ["Jane", "Kim"];

console.log(solution(seoul));
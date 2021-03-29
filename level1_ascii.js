/**
 *
 * @name 문자열 내림차순으로 배치하기
 * @since 2021-03-29
 * @doc
 *
 */

function solution(s) {
  var answer = "";
  var asciiCheck = [];
  for (let i = 0; i < s.length; i++) {
    asciiCheck[i] = s.charCodeAt(i);
  }
  asciiCheck.sort(function (a, b) {
    if (a < b) return 1;
    if (a === b) return 0;
    if (a > b) return -1;
  });

  asciiCheck.map((item) => (answer += String.fromCharCode(item)));
  return answer;
}

let s = "Zbcdefg";

console.log(solution(s));

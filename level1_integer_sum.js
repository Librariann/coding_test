/**
 *
 * @name 두 정수 사이의 합
 * @since 2021-03-29
 * @doc
 *
 */

function solution(a, b) {
  var answer = 0;
  if (a == b) {
    return a;
  }
  if (a > b) {
    let c = a;
    a = b;
    b = c;
  }

  for (a; a <= b; a++) {
    answer += a;
  }

  return answer;
}

let a = 5;
let b = 3;
console.log(solution(a, b));

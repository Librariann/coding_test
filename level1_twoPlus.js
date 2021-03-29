/*
 * @name : 두 개 뽑아서 더하기
 * @since : 
 */

function solution(numbers) {
  var answer = [];
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers.length == i + 1) {
      break;
    }
    for (var j = 0; j < numbers.length; j++) {
      if (i != j) {
        sum = numbers[i] + numbers[j];
        answer.push(sum);
      }
    }
  }
  answer = new Set(
    answer.sort(function (a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    })
  );
  answer = [...answer];
  return answer;
}
var numbers = 0;
console.log(solution(numbers));

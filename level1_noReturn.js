function solution(participant, completion) {
  var answer = "";
  var joinCheck = 0;
  var joinArr = [];
  var arrCheck = [];
  for (var i = 0; i < participant.length; i++) {
    if (i == 0) {
      arrCheck.push(participant[i]);
    } else {
      for (var k = 0; k < arrCheck.length; k++) {
        if (arrCheck[k] == participant[i]) {
          answer = participant[i];
          return answer;
        }
      }
      arrCheck.push(participant[i]);
    }
    var joinCheck = 0;
    for (var j = 0; j < completion.length; j++) {
      if (participant[i] == completion[j]) {
        joinCheck = 1;
      }
    }
    if (joinCheck === 0) {
      joinArr.push(participant[i]);
    }
  }
  answer = joinArr[0];
  return answer;
}

var participant = ["mislav", "stanko", "mislav", "ana"];
var completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));

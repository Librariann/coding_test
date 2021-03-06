/**
 *
 * @name 신규 아이디 추천
 * @since 2021-03-31
 * @doc
 *
 */

function solution(new_id) {
  var answer = "";
  var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
  answer = new_id.toLowerCase(); //1
  answer = answer.replace(reg, ""); //2
  answer = dotCheck(answer); //3

  //4
  if (answer[0] == ".") {
    answer = answer.substr(1);
  }
  if (answer[answer.length - 1] == ".") {
    answer = answer.slice(0, -1);
  }

  //5
  if (answer == "") {
    answer = "a";
  }

  //6
  if (answer.length > 15) {
    answer = answer.slice(0, 15);
    if (answer[answer.length - 1] == ".") {
      answer = answer.slice(0, -1);
    }
  }

  //7
  if (answer.length < 3) {
    let lastWord = answer[answer.length - 1];
    for (let k = answer.length; k < 3; k++) {
      answer += lastWord;
    }
  }

  return answer;
}

function dotCheck(answer) {
  let reg = /\.{2,}/gi;

  answer = answer.replace(reg, ".");
  return answer;
}

// let new_id = "...!@BaT#*..y.abcdefghijklm........";
// let new_id = "z-+.^.";
// let new_id = "=.=";
// let new_id = ".123.._.--......def";
// let new_id = ".1.";
// let new_id = "~!@#$%&*()=+[{]}:?,<>/";
let new_id = ".....b..1....2.13..12.3";
// let new_id = "abcdefghijklmn.p";

console.log(solution(new_id));

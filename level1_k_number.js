/*
 * @name : K번째수
 * @since : 2021-03-29
 * @doc : 
 */


function solution(array, commands) {
    var answer = [];

    for(let i = 0; i < commands.length; i++){
        // console.log(commands[i][0]);
        let returnArray = array.slice(commands[i][0] - 1, commands[i][1]);
        returnArray = returnArray.sort(function(a, b) {
                            if(a > b) return 1;
                            if(a === b) return 0;
                            if(a < b) return -1;
                        });
        answer.push(returnArray[commands[i][2] - 1]);
    }
    return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
    [2, 5, 3], 
    [4, 4, 1], 
    [1, 7, 3]
];
const ret = [5, 6, 3];

console.log(solution(array, commands));
/*
 * @name : 크레인게임
 * @since : 2021-03-29
 * @doc : 
 */


function solution(board, moves) {
    var answer = 0;
    var bucket = [];
    for(var i = 0; i < moves.length; i++){
        var number = moves[i] - 1;
        for(var j = 0; j < board.length; j++){
            if(board[j][number] === 0){
                continue;
            } else {
                bucket.push(board[j][number]); 
                board[j][number] = 0;
                
                if(bucket[bucket.length-1] === bucket[bucket.length-2]){
                    bucket.pop();
                    bucket.pop();
                    answer += 2;
                }

                break;
            }
        }
       
    }

    return answer;
    
}

var board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];
var moves = [1,5,3,5,1,2,1,4];

console.log(solution(board, moves));
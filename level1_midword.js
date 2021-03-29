function solution(s) {
    var answer = '';

    if((s.length % 2) != 0){
        var seq = Math.floor(s.length/2);
        answer = s[seq];

        return answer;
    } else {
        var seqOne = Math.floor(s.length/2);
        var seqTwo = seqOne - 1;
        
        answer = s[seqTwo]+s[seqOne];
        return answer;
    }
}

const word = "abcdef";
console.log(solution(word));
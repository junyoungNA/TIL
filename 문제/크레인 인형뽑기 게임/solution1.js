// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    const pocket = [];
    let answer = 0;
    const limit = board.length;
    // console.log(board, '보드');
    moves.map((move) => {
        if(move > limit) return null;
        const location = move - 1;
        for(let i = 0; i < board.length; i++) {
            if(board[i][location] === 0) continue;
            // console.log(board[i],'삭제전');
            //바구니에 들어가있는 값과 일치하다면 바구니에 넣지않고
            //바구니에 마지막요소 삭제
            if(pocket[pocket.length - 1] === board[i][location]) {
                pocket.pop();
                answer += 2;
            } else {
                pocket.push(board[i][location]);
            }
            board[i].splice(location, 1, 0);
            break;
        }
    });
    // console.log(pocket,'바구니');   
    return answer;
}
// 4
console.log(solution(   
    [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],
    [1,5,3,5,1,2,1,4]
    )) 

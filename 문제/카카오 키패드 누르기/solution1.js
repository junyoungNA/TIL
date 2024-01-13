// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    let answer = '';
    let left = '*';
    let right = '#'
    let middle = 0;
    numbers.map((item) => {
        console.log(item,'현재 숫자');
        switch(item) {
            case 1: 
            case 4: 
            case 7: 
                answer += 'L';
                left  = item;
                break;
            case 2:
            case 5:
            case 8:
            case 0:
                const calculLeft = item - left;
                const calculRight = item - right;
                const midValue = calculLeft > calculRight ? 'R' : 'L';
                answer += midValue === 'R' ? 'R' : 'L';
                if(midValue === 'R') right = item;
                if(midValue === 'L') left = item;
                console.log('왼쪽',left, '결과',calculLeft);
                console.log('오른쪽', right, '결과', calculRight);
                console.log('결과', answer);
                
                // 현재 오른손과 왼손의 위치중 가까운 손이 누르게됨
                // 거리가 같다면 주손으로 뉼러야함
                break;
            case  3: 
            case  6: 
            case  9: 
                answer += 'R';
                right  = item;
                break; 
            default : break;
        }
    })
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right")) //"LRLLLRLLRRL"
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left")) //"LRLLRRLLLRR"
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	,"right")) //"LLRLLRLLRL"

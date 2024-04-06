// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    let answer = '';
    let left = '*';
    let right = '#'
    // let middle = 0;
    const keyPadArr = [[1,2,3], [4,5,6], [7,8,9]];

    numbers.map((item) => {
        // console.log(item,'현재 숫자');
        switch(item) {
            case 1: 
            case 4: 
            case 7: 
                answer += 'L';
                left = item;
                // console.log('왼쪽',answer, item, left);
                break;
            case 2:                    
            case 5:
            case 8:
                console.log('현재', item, 'left',left, 'right',right);
                let leftValue = -1;
                let rightValue = -1;
                let midValue = midValue;
                for(let i = 0; i < keyPadArr.length; i++) {
                    if(leftValue === -1) {
                        leftValue = keyPadArr[i].findIndex((item) => item === left);
                        if(leftValue !== -1) {
                            
                        }
                    }
                    if(rightValue === -1) {
                        rightValue = keyPadArr[i].findIndex((item) => item === right);
                    }
                    if(midValue === -1) {
                        midValue = keyPadArr[i].findIndex((item) => item === midValue);
                    }
                    
                }
                // 현재 오른손과 왼손의 위치중 가까운 손이 누르게됨
                // 거리가 같다면 주손으로 뉼러야함
                break;
            case  3: 
            case  6: 
            case  9: 
                answer += 'R';
                right  = item;
                // console.log('오른쪽',answer, item, right);
                break; 
            default : break;
        }
    })
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right")) //"LRLLLRLLRRL"
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left")) //"LRLLRRLLLRR"
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	,"right")) //"LLRLLRLLRL"

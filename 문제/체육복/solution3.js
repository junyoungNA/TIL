// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// n 전체 수
// 잃어버린 학생 수
// 여벌 학새 수


function arrRemoveDuplicate (standardArr, compareArr) {
    const newArr = standardArr.filter((item) => (!compareArr.includes(item)));
    return newArr
}

function findAndRemoveItem(arr, itemToFind) {
    const findIdx = arr.findIndex(item => item === itemToFind);
    if (findIdx !== -1) {
        arr.splice(findIdx, 1);
        return true;
    }
    return false;
}


function solution(n, lost, reserve) {
    let answer = n;
    let failNum = 0;

    //sort 추가하니 해결하였다 이유는?뭘까
    const newLost = arrRemoveDuplicate(lost,reserve).sort();
    const newReserve = arrRemoveDuplicate(reserve, lost);
    if(newLost.length < 1 ) return answer - failNum;

    for(let i = 0; i < newLost.length; i++) {
        const currentLost = newLost[i];

        if (currentLost > 1) {
            if (findAndRemoveItem(newReserve, currentLost - 1)) {
                continue;
            }
        }

        if (currentLost < n) {
            if (findAndRemoveItem(newReserve, currentLost + 1)) {
                continue;
            }
        }

        failNum += 1;
    }
    return answer - failNum;
}


// console.log(solution(5,[2, 4],[1, 3, 5])) //5
// console.log(solution(5,[2, 4],	[3]	)) //4
// console.log(solution(5, [3, 4], [1, 2, 5])) //5
// console.log(solution(5, [1, 2], [3, 4])) //4
// console.log(solution( 5, [4, 5], [3, 4]))//4
console.log(solution( 10, [1, 2, 3, 4, 5, 6], [1, 2, 3]))//7
console.log(solution( 5,[1, 2, 3],[2, 3, 4])) //4
// console.log(solution(3, [3],[1])) //2


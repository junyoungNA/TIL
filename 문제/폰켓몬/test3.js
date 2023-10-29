function findNumbersWithSameOnesCount(n) {
    function countOnesInBinary(x) {
        let count = 0;
        while (x > 0) {
    // 만약 나머지가 1이라면,이진법 표현에서 해당 자릿수가 1임을 의미하므로 count를 1 증가시킵니다.
    // x를 다음 자릿수로 이동하기 위해 Math.floor(x / 2)를 수행
            if (x % 2 === 1) {
                count++;
            }
            x = Math.floor(x / 2);
        }
        return count;
    }

    const k = countOnesInBinary(n);
    let count = 0;

    // 1부터 n까지의 수 중에서 1의 개수가 k와 동일한 수를 찾습니다.
    for (let i = 1; i <= n; i++) {
        if (countOnesInBinary(i) === k) {
            count++;
        }
    }

    return count;
}

console.log(solution(9)) //3    
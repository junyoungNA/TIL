const solution = (N, stages) => {
    //가져온 코드
    //테스트코드에서 실패함!
    const arr = [...stages].sort((a, b) => a - b);
    const result = Array.from(Array(N), (v, i) => [i + 1, 0]);
    console.log(result,'이게멀까');
    let remainPeople;

    for (let i = 0; i < stages.length; i++) {
        if (arr[i] !== arr[i - 1]) remainPeople = stages.length - i;
        if (result[arr[i] - 1]?.[1] !== undefined){
            result[arr[i] - 1][1] += (1 / remainPeople);
        } 
    }

    return result.sort((a, b) =>{
        if (a[1] === b[1]) return a[0] - b[0];
        else return b[1] - a[1];
    }).map((v) => v[0]);
};

console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));//[3,4,2,1,5]
console.log(solution(4,[4,4,4,4,4]));//	[4,1,2,3]
console.log(solution(10,[10,2]));//	[10,2,1,3,4,5,6,7,8,9]
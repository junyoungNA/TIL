function solution(N, stages) {
    // 10.30 다시풀기
    const answer = [];
    const obj = {};
    let count = stages.length;
    for (let i = 1; i <= N; i++) {
        obj[i] = 0;
    }

    stages.forEach((y)=> {
        if(obj[y] <= N)
            obj[y]++;
    });

    console.log(obj, 'obj');
    for(let i = 1; i <= N; i++) {
        if(obj[i] !== undefined) {
            const newObj = {};
            newObj[i] = obj[i] /count
            answer.push(newObj); 
            count = count - obj[i];
        }
    }
    // 1. 객체 배열을 내림차순으로 정렬
    answer.sort((a, b) => {
        const keyA = Object.values(a)[0];
        const keyB = Object.values(b)[0];
        return keyB - keyA;
    });
    console.log(answer);

  // 2. 정렬된 배열에서 키 값을 추출하여 새로운 배열에 넣기
    return  answer.map(obj => Number(Object.keys(obj)[0]));;
}
	
console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));//[3,4,2,1,5]
console.log(solution(4,[4,4,4,4,4]));//	[4,1,2,3]
console.log(solution(10,[10,2]));//	[10,2,1,3,4,5,6,7,8,9]
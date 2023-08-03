function solution(N, stages) {
    const answer = [];
    const state = [];
    stages.sort();
    for(let i = 1; i <= N; i++) {
        let count = 0;     
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] === i) {
                count += 1;
            }
        }
        state.push([i,  count / stages.length]);
        stages.splice(0, count);
    }
    customSort(state);
    console.log(state);
    return answer;
}

function customSort (arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++ ) {
            if(arr[i][1] < arr[j][1]) {
                console.log(arr[i], arr[j]);
                const copy = arr[i];
                arr[i] = arr[j];
                arr[j] = copy;
            }
            if(arr[i][1] === arr[j][1] && arr[i] > arr[j]) {
                const copy = arr[i];
                arr[i] = arr[j];
                arr[j] = copy;
            }
        }
    }
    return arr;
}
	
console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));//[3,4,2,1,5]
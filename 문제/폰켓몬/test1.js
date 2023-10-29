function solution(p, m, d) {
    if(p >= d) return 0;
    let interest = 1;
    while(true) {
        let currentPrice = p;
        for(let i = 0; i < m; i++) {
            console.log(currentPrice * (1 + (interest / 100)));
            currentPrice = Math.floor(currentPrice * (1 + (interest /100)));
        }
        if(currentPrice >= d) break;
        interest += 1;

    }
    console.log(interest,'끝');
    return interest;
}

// console.log(solution(10000000,9,13000000))//3
console.log(solution(1000000,3,1000000))//0
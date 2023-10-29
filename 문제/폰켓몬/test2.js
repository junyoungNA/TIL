function solution(a, b) {
    let num = a ** b;
    if(isFinite(num)) {
        let result = num.toString().slice(-5);
        if(result[0] === '0') {
            while(result[0] === '0') {
                result = result.slice(1);
            }
        }
        return Number(result);
    } else {
        let result = 1;
        const rest = 100000; 
        for (let i = 0; i < b; i++) {
          result = (result * a) % rest;
        }
        return result;
    }
}

// console.log(solution(2, 26)) //8864
console.log(solution(123456789, 12345)) //38549
function solution(total_sp, skills) {
    const flatSkill = skills.flat(1).sort();
    const highSkill = [];
    for(let i = 0; i < flatSkill.length; i++) {
        const target = flatSkill[i];
        if(target === flatSkill[i + 1]) {
            highSkill.push(target);
            for(let j = i + 2; j < flatSkill.length; j++) {
                if(target === flatSkill[j]) continue;
                else {
                    flatSkill.splice(i, j) 
                    console.log(flatSkill, 'flat');    
                    break
                };
            }
        }
    }
}

console.log(solution(121,[[1,2],[1,3],[3,6],[3,4],[3,5]]))//[44, 11, 33, 11,11,11];
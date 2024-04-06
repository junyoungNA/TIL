// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
    
    const answer = {}; 
    const giftInfo = {};
    const giftCount = {};
    gifts.map((item, index) => {
        const splitGift = item.split(' ');
        if(splitGift[0] !== splitGift[1]) {
            if (!giftInfo[splitGift[0]]) {
                giftInfo[splitGift[0]] = {};
                giftCount[splitGift[0]] = {send: 0, receive: 0};
            }
            if (!giftCount[splitGift[1]]) {
                giftCount[splitGift[1]] = {send: 0, receive: 0,};
            }
            if(!giftInfo[splitGift[0]][splitGift[1]]) {
                giftInfo[splitGift[0]][splitGift[1]] = 0;
            }
            giftCount[splitGift[0]].send += 1;
            giftCount[splitGift[1]].receive += 1;
            giftInfo[splitGift[0]][splitGift[1]] += 1;
        };
    })
    
    // for(let user in giftCount) {
    //     const currentUser = giftCount[user]
    //     currentUser['count'] = currentUser.send - currentUser.receive;
    // }
    // // console.log(giftInfo);
    // for(let user in giftInfo) {
    //     answer[user] = 0;
    //     const currentUser = giftInfo[user];
    //     for(let receiver in currentUser) {
    //         const receiverInfo = giftInfo[receiver][user];
    //         console.log('현재 for문',currentUser, giftInfo[receiver],receiverInfo, currentUser[receiver]);
    //         if(receiverInfo === undefined || currentUser[receiver] > receiverInfo) {
    //             answer[user] += 1;
    //             console.log(currentUser,'올라감');
    //             continue;
    //         }
    //         if(receiverInfo === currentUser[receiver]) {
    //             console.log(giftCount,'for문안에서');
    //             if(giftCount[user].count > giftCount[receiver].count) {
    //                 answer[user] += 1;
    //             } else {
    //                 if(!answer[receiver]) {
    //                     answer[receiver] = 0;
    //                 }
    //                 answer[receiver] += 1;
    //             }
    //         }
    //     }
    //     console.log(giftInfo);
    // }
    return answer;
}

// 2
console.log(solution(["muzi", "ryan", "frodo", "neo"],["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]))
//4
// console.log(solution(["joy", "brad", "alessandro", "conan", "david"],["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]	))
// 0
// console.log(solution(["a", "b", "c"],["a b", "b a", "c a", "a c", "a c", "c a"]))
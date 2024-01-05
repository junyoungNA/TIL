// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
    const answer = {}; 
    const giftInfo = Object.fromEntries(
        friends.map(outerKey => [
          outerKey,
          Object.fromEntries(friends.filter(innerKey => outerKey !== innerKey).map(innerKey => [innerKey, 0]))
        ])
      );
      
    const giftCount = {}
    gifts.map((item, index) => {
        const splitGift = item.split(' ');
        if(splitGift[0] !== splitGift[1]) {
            if (!giftCount[splitGift[0]]) {
                giftCount[splitGift[0]] = {send: 0, receive: 0};
            }
            if (!giftCount[splitGift[1]]) {
                giftCount[splitGift[1]] = { send: 0, receive: 0,};
            }
            giftCount[splitGift[0]].send += 1;
            giftCount[splitGift[1]].receive += 1;
            giftInfo[splitGift[0]][splitGift[1]] += 1;
        };
    }) 
    for(let user in giftCount) {
        const currentUser = giftCount[user]
        currentUser['count'] = currentUser.send - currentUser.receive;
    }
    console.log(giftInfo, giftCount , '계산');
    // 여기서 두사람이 주고받은 선물 정보가 있고
    // 두 사람 중 선물지수가 더큰 사람이 + 1
    // 주고받은 수 같다면  
    for(let user in giftInfo) {
        answer[user] = 0;
        const currentUser = giftInfo[user];
        for(let receiver in currentUser) {
            const receiverInfo = giftInfo[receiver][user];
            // console.log('현재 for문',currentUser, giftInfo[receiver],receiverInfo, currentUser[receiver]);
            // console.log('현재 유저',user, currentUser, '받는 유저', receiver, receiverInfo,);
            // 서로 주고 받은 정보가 없다면?
            // console.log((currentUser[receiver]=== 0), receiverInfo=== 0 )
            if(currentUser[receiver] === 0 && receiverInfo === 0 || currentUser[receiver] === receiverInfo ) {;
                console.log(giftCount[user].count > giftCount[receiver].count);
                if(giftCount[user].count > giftCount[receiver].count) {
                    answer[user] += 1;
                }
                continue;
            } 
            if(receiverInfo === 0 || currentUser[receiver] > receiverInfo) {
                answer[user] += 1;
                console.log(answer,'올라감');
            }
        }
    }
    return Math.max(...Object.values(answer));
}

// 2
console.log(solution(["muzi", "ryan", "frodo", "neo"],["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]))
//4
console.log(solution(["joy", "brad", "alessandro", "conan", "david"],["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]	))
// 0
console.log(solution(["a", "b", "c"],["a b", "b a", "c a", "a c", "a c", "c a"]))
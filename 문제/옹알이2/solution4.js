// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function solution(babbling) {
    //가져온코드
    var answer = 0;

    babbling=babbling.map((item)=>{
        let tmp = item.replaceAll('aya','').replaceAll('ye','').replaceAll('woo','').replaceAll('ma','');

        return tmp=='' ? item.replaceAll('aya','1').replaceAll('ye','2').replaceAll('woo','3').replaceAll('ma','4') : item;
    })    


    babbling.filter((item)=>item<'a').map((item)=>{
        let flag=true;

        let tmp = item.split('');

        for (let i=0; i<tmp.length-1; i++){

            flag = tmp[i] == tmp[i+1] ? false : flag;
        }

        answer += flag ? 1 : 0
    })

    return answer;
}
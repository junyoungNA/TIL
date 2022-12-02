// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    const UNI_46 = 46
    const UNI_45 = 45
    const UNI_95 = 95   
    const escape = ['!','~', '@', '#', '$', '%', '&', '*', '(', ')', '=', '+', '[', ']', '{', '}', ':','?', '<','>','/', ','];
    let str = [...new_id.toLowerCase()];
    //특수문자 다 조지기
    let strLength = str.length;
    for(let i = 0; i < strLength; i++) {
        for(let j = 0; j < escape.length; j++) {
            if(str.indexOf(escape[j]) !== -1) {
                str.splice(str.indexOf(escape[j]), 1);
                break;
            }
        }
    }
    

    for(let i = 0; i < str.length; i++) {
        let uniCode = str[i].charCodeAt(0);
        if(uniCode > 96 && uniCode < 123) {
            continue;
        }
        if(uniCode === UNI_45 || uniCode === UNI_46 || uniCode === UNI_95) {
            continue;
        } 
        if(String(Number(str[i])) !== 'NaN') {
    
            continue;
        }
        str.splice(i, 1)
    }

    //점 중복 없애기
    for(let i = 0; i < str.length - 1; i++) {
        const uniCode = str[i].charCodeAt(0)
        if(uniCode === UNI_46 && str[i + 1].charCodeAt(0) === UNI_46 || i === 0){
            for(let j = i; j < str.length; j++) {
                if(i === 0) {
                    while(str[j].charCodeAt(0) === UNI_46) {
                        str.splice(j, 1);
                    }
                }
                const uni46 = str[j].charCodeAt(0);
                if(uni46 !== UNI_46) break;
                if(str[j].charCodeAt(0) === UNI_46) str.splice(j, 1);
            }
        }
        if(i === str.length && uniCode == UNI_46) {
            while(str[i].charCodeAt(0) === UNI_46) {
                str.splice(i, 1);
            }
        }
    }

    // //공백문자 a로 바꾸기
    str = str.map((e) => (e === ' ' ? 'a' : e));
    //문자 제한 걸기
    if(str.length > 15) str.splice(15); 

    // //다시 점 문자제거
    if(str[str.length - 1].charCodeAt(0) === UNI_46) {
        while(str.length > 0) {
            if(str[str.length - 1].charCodeAt(0) !== UNI_46) break; 
            str.splice(str.length - 1, 1);
        }
    }

    // //str길이 2이하라면 마지막 문자 3될때까지 붙이기
    if(str.length < 3 ) {
        if(str.length === 0) {
            str.push('a');
        }
        while(str.length < 3) {
            str.push(str[str.length - 1]); 
        }
    }

    return str.join('');
}


// console.log(solution("...!@BaT#  *..y. abc.. de..f.gh  ijklm"));
// console.log(solution("...!@BaT#*..y.abcdefghijklm"));
// console.log(solution("z-+.^."));
console.log(solution("-.~!@#$%&*()=+[{]}:?,<>/.-"));
// console.log(solution("....s"));
// console.log(solution("f.b"));

// console.log(solution("=.="));
// console.log(solution("123_.def"));
// // console.log(solution("abcdefghijklmn.p"));
// console.log(solution(".b."));
// console.log(solution("a.$.a"));
// console.log(solution("abcdef..!ghijk!..!lm..!n.p"));
// console.log(solution("...qw...."));
// no	new_id	result
// 예1	"...!@BaT#*..y.abcdefghijklm"	"bat.y.abcdefghi"
// 예2	"z-+.^."	"z--"
// 예3	"=.="	"aaa"
// 예4	"123_.def"	"123_.def"
// 예5	"abcdefghijklmn.p"	"abcdefghijklmn"
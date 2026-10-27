// 객체 정의
interface Member{
    name: string;
    age: number;
}

// 객체 생성
const member1: Member = {
    name: '이강',
    age: 21
}

// 출력
console.log(`이름: ${member1.name}, 나이: ${member1.age}`);
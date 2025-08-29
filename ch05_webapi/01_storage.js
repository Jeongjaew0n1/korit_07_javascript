// localStorage에 문자열 데이터와 배열 데이터를 저장하는 예시
if (typeof Storage !== `undefined`) { // Storage가 검색됐으니 별 문제 x
  localStorage.setItem(`title`, `review : 파이팅`);
  /*
    .setitem()라는 메서드가 있고, 거기에 2개의 argument를 집어넣음.
    두 번쨰 매개변수인 value값의 경우, 원래 string 자료형이라면 있는 그대로
  */

  // 집어넣을 데이터 예시 - JS 배열인데, 내부 요소가 객체 -> string으로의 변환 과정 필요
  const users = [
    {
      id: 1,
      name: `김일`,
    },{
      id: 2,
      name: `김이`,
    },
  ];
  localStorage.setItem(`users`, JSON.stringify(users));
}

// localStorage 내애 있는 데이터를 조회하는 예시
if (Storage !== undefined) {
  console.log(localStorage.getItem(`title`));
  console.log(localStorage.getItem(`users`));
  // 둘다 결과값 자료형들은 전부 string에 해당됨
  // 그래서 두 번째 코드를 string으로 쓸거라면 문제가 없지만 굳이 객체 정보로 저장한걸 string으로 쓸 리가 없으니 다시 원상복구하는 객체가 필요
  console.log(JSON.parse(localStorage.getItem(`users`)));
  
  const usersFromLocal = JSON.parse(localStorage.getItem(`users`));
  console.log(usersFromLocal[0].name);
}

// 삭제 예시
localStorage.removeItem(`title`);
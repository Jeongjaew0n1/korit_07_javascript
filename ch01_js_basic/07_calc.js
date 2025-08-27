/*
  조건문을 활용하고, 숫자 두 개와 사칙연산 기호 하나를 매개변수로 받아서 그에 맞는 계산을 하는 함수 정의
*/

let calc = function(x, y, operator) { // 매개변수의 자료형이나 선언자가 없다는 점이 특이함.
  if (operator == '+') {
    return x + y;
  } else if (operator == '-') {
    return x - y;
  } else if (operator == '*') {
    return x * y;
  } else if (operator == '/') {
    return x / y;
  }
}

let plusResult = calc(5, 6, '+');
console.log(plusResult);

let minusResult = calc(10, 7, '-');
console.log(minusResult);

let mulResult = calc(203, 3459, '*');
console.log(mulResult);

let divusResult = calc(5913, 21, '/');
console.log(divusResult);

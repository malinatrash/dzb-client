// Встраивает calc() css функцию в разметку
export function cssCalc(a: string, sign: '+' | '-', b: string) {
  return `calc(${a} ${sign} ${b})`;
}

// Функция для получения правильной формы падежа
export function declOfNum(number: number, words: string[]) {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
}

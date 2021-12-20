// https://realadmin.ru/coding/sklonenie-na-javascript.html
// Функция для получения правильной формы падежа
export function declOfNum(number: number, words: [string, string, string]) {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
}

// https://overcoder.net/q/2504/%D0%BA%D0%B0%D0%BA-%D0%BE%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%B4%D0%B0%D1%82%D1%83-%D0%B2-javascript
// преобразует дату в правильный формат для <input type="date" />
export function toJSONLocal(date: Date) {
  const local = new Date(date);
  local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
}

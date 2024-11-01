const { addDays } = require("date-fns");

function days(params) {
  const date = addDays(new Date(2022, 7, 22), params);
  console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
}

days(2);

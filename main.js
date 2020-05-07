"use strict"
let money,
  time,
  expens,
  moneyExpens,
  everyDay;

let appData = {
  timeData: {},
  expenses: {},
  optionalExpenses: {},
  savings: false
}

function checkMoney() {
  money = prompt("Ваш бюджет на месяц?");
  everyDay = money;
  time = prompt("Введите дату в формате YYYY-MM-DD");
  if (money && money > 0) {
    appData.budget = money;
    appData.timeData = time;
    console.log('Ваш бюджет на месяц ' + appData.budget);
  }
}
checkMoney();

function checExpens() {
  expens = prompt('Введите обязательную статью расходов в этом месяце');
  moneyExpens = prompt('Во сколько обойдётся');
  everyDay = everyDay - moneyExpens;
  if (moneyExpens && moneyExpens < money && everyDay > 0) {
    appData.expenses[expens] = moneyExpens;
  }
}
checExpens();
checExpens();
console.log('Бюджет на день ' + everyDay/30)
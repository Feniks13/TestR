'use strict';

let money = 40000,                        // Доход за месяц
  income = 'Фриланс',                     // Доп доход
  addExpenses = 'Машина, Кофе, Одежда',   // Доп расходы
  deposit = true,                         // Депозит
  mission = 100000,                       // Цель
  period = 7,                             // Период
  budgetDay = money / 30;                 // Дневной бюджет

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(income.length);

console.log(`Период ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей/долларов/гривен/юани`);

console.log(addExpenses.toLowerCase().split(', '));

console.log(budgetDay);






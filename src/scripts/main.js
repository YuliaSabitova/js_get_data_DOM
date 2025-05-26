'use strict';

const spans = [...document.querySelectorAll('.population')];
let total = 0;

for (const span of spans) {
  const text = span.textContent.split(',');
  const str = Number(text.reduce((firstM, secondM) => firstM + secondM));

  span.textContent = str;
  total += str;
}

const average = Math.round(total / spans.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-Us');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-Us');


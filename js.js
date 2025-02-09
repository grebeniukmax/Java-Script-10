// N1 //
document.getElementById('helloBaton').addEventListener('click', () => {
    alert('Ах ти ж,я сказав же не натискай!');
  });
// N2 //
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  document.getElementById('checkButton').addEventListener('click', () => {
    const userGuess = Number(document.getElementById('guessInput').value);
    const result = document.getElementById('result');

    if (userGuess === randomNumber) {
      result.textContent = 'А ти харош';
    } else if (userGuess < randomNumber) {
      result.textContent = 'Число яке я загадав більше';
    } else {
      result.textContent = 'Число яке я загадав менше';
    }
  });
// N3 //
let count = 0;
document.body.addEventListener('click', () => {
  count++;
  document.getElementById('clickCount').textContent = count;
});
// N4 Не знаю //
const button = document.getElementById('button');
button.addEventListener('click', () => {
  const input = document.getElementById('input');
  const value = input.value;
  const list = document.getElementById('list');
  const listItem = document.createElement('li');
  listItem.textContent = value;
  list.appendChild(listItem);
})
// N5 //
const calculateDiscount = (price, discount) => price * (discount / 100);
const getDiscountedPrice = (price, discount, callback) => {
  const discountAmount = callback(price, discount);
  return price - discountAmount;
};
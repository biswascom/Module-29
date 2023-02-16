
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const inputNumber = inputNumberUpdate(true, 'input-case-number-field');

    totalPriceUpdate(inputNumber, 'total-case-price');

    subTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const inputNumber = inputNumberUpdate(false, 'input-case-number-field');

    totalPriceUpdate(inputNumber, 'total-case-price');

    subTotal();
});

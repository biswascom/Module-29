
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const inputNumber = inputNumberUpdate(true, 'input-phone-number-field');
    
    totalPriceUpdate(inputNumber, 'total-phone-price');

    subTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const inputNumber = inputNumberUpdate(false, 'input-phone-number-field');

    totalPriceUpdate(inputNumber, 'total-phone-price');
    
    subTotal();
});
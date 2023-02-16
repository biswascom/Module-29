function inputNumberUpdate(isIncrease, inputNumberFieldId){
    const inputNumberField = document.getElementById(inputNumberFieldId);
    const inputNumberString = inputNumberField.value;
    const inputNumberPrevious = parseInt(inputNumberString);
    
    let inputNumber;
    if(isIncrease){
        inputNumber = inputNumberPrevious + 1;
    }
    else{
        inputNumber = inputNumberPrevious - 1;
    };

    inputNumberField.value = inputNumber;
    return inputNumber;
};

function totalPriceUpdate(inputNumber, totalPriceId){
    let totalPrice;
    if(totalPriceId === 'total-phone-price'){
        totalPrice = inputNumber * 1219;
    }
    else{
        totalPrice = inputNumber * 59;
    };
    const totalPhonePrice = document.getElementById(totalPriceId);
    totalPhonePrice.innerText = totalPrice;
};

function getTotalPriceById(totalPriceId){
    const totalPrice = document.getElementById(totalPriceId);
    const totalPriceString = totalPrice.innerText;
    const totalPriceNew = parseInt(totalPriceString);
    return totalPriceNew;
};

function subTotal(){
    const totalPhonePrice = getTotalPriceById('total-phone-price');
    const totalCasePrice = getTotalPriceById('total-case-price');
    const subTotal = totalPhonePrice + totalCasePrice;

    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = subTotal;

    // tax section
    const taxAmountString = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxAmount;

    // Grand Total section
    const grandTotalElement = document.getElementById('grand-total');
    const granTotal = subTotal + taxAmount;
    grandTotalElement.innerText = granTotal;
};
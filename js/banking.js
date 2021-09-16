// handle deposit button event
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputAmount = input.value;
    input.value = '';
    return inputAmount;
}

function setAmount(id, amount) {
    const totalAmount = document.getElementById(id);
    const previousAmount = totalAmount.innerText;
    const newAmount = parseFloat(previousAmount) + parseFloat(amount);
    totalAmount.innerText = newAmount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');
    const previousBalance = balanceTotal.innerText;
    
    if(isAdd == true){
        const newBalance = parseFloat(previousBalance) + parseFloat(amount);
        balanceTotal.innerText = newBalance;
    }
    else{
        const newBalance = parseFloat(previousBalance) - parseFloat(amount);
        balanceTotal.innerText = newBalance;
    }
    
}
// handle deposit button event
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = getInputValue('input-deposit');
    if(depositAmount > 0){
        setAmount('total-deposit', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// handle withdraw button event
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = getInputValue('input-withdraw');
    const balanceTotal = document.getElementById('total-balance');
    const previousBalance = balanceTotal.innerText;
    if(withdrawAmount > 0 && withdrawAmount < previousBalance){
        setAmount('total-withdraw', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else{
        console.log('not valid');
    }
});


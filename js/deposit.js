document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);

    if (depositAmount >= 500) {
        const depositOld = document.getElementById('depositTotal');
        const depositTotal = parseFloat(depositOld.innerText);
        depositOld.innerText = depositAmount + depositTotal;

        const totalBalance = document.getElementById('totalBalance');
        const totalAmount = parseFloat(totalBalance.innerText);
        totalBalance.innerText = depositAmount + totalAmount;
    }else{
        alert('Please Enter Valid Amount')
    }
    depositField.value = '';
})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);

    console.log(withdrawAmount);

    const totalBalance = document.getElementById('totalBalance');
    const totalAmount = parseFloat(totalBalance.innerText);

    if (withdrawAmount < totalAmount && withdrawAmount >= 500) {
        const withdrawOld = document.getElementById('withdrawTotal');
        const withdrawTotal = parseFloat(withdrawOld.innerText);
        withdrawOld.innerText = withdrawAmount + withdrawTotal;

        totalBalance.innerText = totalAmount - withdrawAmount;
    } else if (withdrawAmount > totalAmount) {
        alert('Not enough money! Check Your Balance!');
    }
    else{
        alert('Please Enter Valid Amount')
    }
    withdrawField.value = '';
})
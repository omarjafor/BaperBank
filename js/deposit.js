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
    }
    depositField.value = '';
})
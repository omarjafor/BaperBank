document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);

    const depositOld = document.getElementById('depositTotal');
    const depositTotal = parseFloat(depositOld.innerText);
    depositOld.innerText = depositAmount + depositTotal;
    depositField.value = '';
})
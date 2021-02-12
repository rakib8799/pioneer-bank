const enterBtn = document.getElementById('enter-btn');
enterBtn.addEventListener('click', function () {
    const headerSection = document.getElementById('header-section');
    headerSection.style.display = 'none';
    const mainSection = document.getElementById('main-section');
    mainSection.style.display = 'block';
});
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    const depositNum = document.getElementById('deposit-number');
    const depositNumValue = parseFloat(depositNum.value);
    calculationHandler('deposit', depositNumValue);
    calculationHandler('balance', depositNumValue);
    depositNum.value = '';
});

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawNum = document.getElementById('withdraw-number');
    const withdrawValue = parseFloat(withdrawNum.value);
    calculationHandler('withdraw', withdrawValue);
    calculationHandler('balance', -1 * withdrawValue);
    withdrawNum.value = '';
});

const calculationHandler = function (id, depositNumValue) {
    const deposit = document.getElementById(id);
    const depositText = parseFloat(deposit.innerText);
    deposit.innerText = depositNumValue + depositText;
};

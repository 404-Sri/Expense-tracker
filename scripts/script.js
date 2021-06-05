'use strict';

const balance = document.getElementById('balance');

const moneyPlus = document.getElementById('money-plus');

const moneyMinus = document.getElementById('money-minus');

const list = document.getElementById('list');

const form = document.getElementById('form');

const transaction = document.getElementById('transaction');

const amount = document.getElementById('amount');

const dummyTransaction = [
    { id: 1, transaction: 'Books', amount: -100},
    { id: 1, transaction: 'Coins', amount: 200},
    { id: 1, transaction: 'Breakfast', amount: -300},
    { id: 1, transaction: 'Mobile', amount: 400}
];


//Add transactions to DOM

function addTransactionDOM(transaction) {
    //get sign
    const sign = transaction.amount<0 ? '-' : '?';


}
function init() {
    list.innerHTML = '';
    dummyTransaction.forEach(addTransactionDOM);

}

init();

const item = dummyTransaction[0], createElemnt('li');
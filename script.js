// Payment section is here
const cardNo = document.querySelector('.cardNo');
const mmyy = document.querySelector('.mmyy');
const cvv = document.querySelector('.cvv');
const paymentButton = document.querySelector('.paymentButton');


// remove section is here
const remove = document.querySelector('#remove');
let removeh2 = document.createElement('h2');
let removeh4 = document.createElement('h4');
const removeConfirmButton = document.createElement('button');
const takeBackButton = document.createElement('button');

// textContext is here
removeConfirmButton.textContent = 'Confirm'
removeh2.textContent = 'Remove?';
removeh4.textContent = 'Please confirm changes you cant redo this again';
takeBackButton.textContent = 'Take me back';

// class name
removeConfirmButton.className = 'confirm';
takeBackButton.className = 'takeBack';
// appending
remove.appendChild(removeh2)
remove.appendChild(removeh4)
remove.appendChild(removeConfirmButton)
remove.appendChild(takeBackButton)

// querySelector for success and invoice
const successBox = document.querySelector('#success');
const invoiceBox = document.querySelector('#invoice');



// addEventListeners are here
cardNo.addEventListener('change', function (event) {
    cardNo.value = event.target.value;
    // console.log(cardNo.value);
})

mmyy.addEventListener('change', function (event) {
    mmyy.value = event.target.value;
    // console.log(mmyy.value);
})
cvv.addEventListener('change', function (event) {
    cvv.value = event.target.value;
    // console.log(cvv.value);
})

paymentButton.addEventListener('click', (event) => {
    console.log(cardNo.value, mmyy.value, 'After click');
    if (Number(cardNo.value) && Number(mmyy.value) && Number(cvv.value)) {
        // alert('Can proceed to remove')
        remove.style.visibility = 'visible';
    } else {
        cardNo.value = null;
        mmyy.value = null;
        cvv.value = null;
    }
})


removeConfirmButton.addEventListener('click', (event)=>{
    takeBackButton.style.visibility = 'hidden';
    setTimeout(()=>{
        successBox.style.visibility = 'visible';
    },2000)
    invoiceBox.style.visibility = 'visible';
})


takeBackButton.addEventListener('click', (event) => {
    remove.style.visibility = 'hidden';
    cardNo.value = null;
    mmyy.value = null;
    cvv.value = null;
})




console.log('Hello');
let cvc = document.querySelector('.cvc');
let wrapCvc = document.querySelector('.wrapper_cvc');
let payment = document.querySelector('.payment');
let cardNumber = document.querySelector('.card_number');

$('.wrapper_i').click(function() {
    $('.i_info').toggle(10);
})
$('.close').click(function() {
    $('.i_info').toggle(10);
})

payment.addEventListener('click', function() {
    let valNum = +cvc.value
    let val = cvc.value

    if (val.length < 3 || isNaN(valNum)) {
        wrapCvc.style.border = '1px solid red';

        setTimeout(function() {
            wrapCvc.style.border = '0';
            if (cvc.classList.contains('cvc_first_page')) {
                wrapCvc.style.borderBottom = '1px solid #BEBEBE';
            } else {
                wrapCvc.style.border = '1px solid #BEBEBE';
            }
            
        }, 1500)
    }
})

if (cvc.classList.contains('cvc_first_page')) {
    for (let i in 'input') {
        cardNumber.addEventListener('input', cardCode, false);
    }
    function cardCode() {
        var cardNumber = this.value.replace(/[^\d]/g, '').substring(0,16);
        cardNumber = cardNumber != '' ? cardNumber.match(/.{1,4}/g).join(' ') : '';
        this.value = cardNumber;
    }
}

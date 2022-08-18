//First enabe the Apply Button by typing DOM in input field.


document.getElementById('input-text').addEventListener('keyup', function (e) {
    const inputField = document.getElementById('input-text')
    const passKey = e.target.value

    if (passKey === 'DOM') {
        document.getElementById('apply-btn').removeAttribute('disabled')
    }
    else {
        document.getElementById('apply-btn').setAttribute('disabled', true)
    }


})

// Then enable the Discount Button by Clicking Apply Button

document.getElementById('apply-btn').addEventListener('click', function () {

    document.getElementById('discount-btn').removeAttribute('disabled')
})


//Now calculate the discount

document.getElementById('discount-btn').addEventListener('click', function () {



    // calculation of discount

    const priceText = document.getElementById('price')
    const previousPrice = parseFloat(priceText.innerText)
    console.log(previousPrice)
    const discount = (30 / 100) * previousPrice

    const newPrice = previousPrice - discount
    const finalPrice = Math.round(newPrice)
    priceText.innerText = finalPrice

})
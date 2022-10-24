const inputBill = document.querySelector('input[name="bill"]')
const inputPeople = document.querySelector('input[name="people"]')


inputBill.addEventListener("keyup", calc)
inputPeople.addEventListener("keyup", calc)

let tipPercent = null 
const tipOptions = document.getElementsByName('option')
tipOptions.forEach(adjustTipPercent)

function adjustTipPercent(option) {
  console.log('adjust tip Percent', option)
  option.addEventListener('change', function () {
    console.log('this', this.value)
    if (this.value !== tipPercent) {
      tipPercent = this.value
    }
    console.log('after if', this.value, tipPercent)
    calc()
  })
}

function formatPrice(num) {
  return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
  });
}

function calc() {
  console.log('calc')
  const billAmount = parseFloat(document.querySelector('input[name="bill"]').value)
  const numberOfPeople = parseFloat(document.querySelector('input[name="people"]').value)

  console.log('bill amount', billAmount, 'tip percent', tipPercent)

  if (billAmount && numberOfPeople && tipPercent) {
    const total = document.getElementById('total')
    const totalPerPerson = document.getElementById('totalPerPerson')
    const tip = billAmount * (tipPercent / 100)
    console.log('tip', tip)
    total.innerHTML = formatPrice(tip / numberOfPeople)
    totalPerPerson.innerHTML = formatPrice(billAmount + tip)
  }
}

const resetButton = document.getElementById('reset')
resetButton.onclick = function () {
  console.log('reset')
  document.getElementById('bill').value = null
  document.getElementById('people').value = null
  const total = document.getElementById('total')
  const totalPerPerson = document.getElementById('totalPerPerson')
  total.innerHTML = '$0.00'
  totalPerPerson.innerHTML = '$0.00'
}

console.log('script!!')
console.log(inputBill.value)
console.log(inputPeople.value)
console.log('tip %', tipPercent)
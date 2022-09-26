const inputBill = document.querySelector('input[name="bill"]')
const inputPeople = document.querySelector('input[name="people"]')


inputBill.addEventListener("keyup", calc)
inputPeople.addEventListener("keyup", calc)

let tipPercent = 5 
const tipOptions = document.getElementsByName('option')
tipOptions.forEach(adjustTipPercent)

function adjustTipPercent(option) {
  if (option.checked = true){
    console.log('check!', option.value)
  }
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
  const billAmount = parseInt(document.querySelector('input[name="bill"]').value)
  const numberOfPeople = parseInt(document.querySelector('input[name="people"]').value)

  console.log(billAmount)

  if (billAmount && numberOfPeople && tipPercent) {
    const total = document.getElementById('total')
    const totalPerPerson = document.getElementById('totalPerPerson')
    const tip = billAmount * (tipPercent / 100)
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
console.log(tipPercent)
const inputBill = document.querySelector('input[name="bill"]')
const inputPeople = document.querySelector('input[name="people"]')
const percentInputs = document.querySelectorAll('input[type="radio"]')
const percentLabels = document.querySelectorAll('.radio-toolbar label')

inputBill.addEventListener("keyup", calc)
inputPeople.addEventListener("keyup", calc)
percentInputs.forEach(input => input.addEventListener("change", adjustTipPercent)
)


let tipPercent = 0 

function adjustTipPercent() {
  console.log('this.value', this.value)
    if (this.value !== tipPercent) {
      tipPercent = this.value
    }
    percentLabels.forEach(label => label.classList.remove('tip-active'))
    percentLabels.forEach(label => {
      if (label.htmlFor === this.value) {
        console.log('sames', label.classList)
        label.classList.add('tip-active')
      }
    }) 
    calc()
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
  const billAmount = parseFloat(document.querySelector('input[name="bill"]').value)
  const numberOfPeople = parseFloat(document.querySelector('input[name="people"]').value)

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
  document.getElementById('bill').value = null
  document.getElementById('people').value = null
  const total = document.getElementById('total')
  const totalPerPerson = document.getElementById('totalPerPerson')
  total.innerHTML = '$0.00'
  totalPerPerson.innerHTML = '$0.00'
}

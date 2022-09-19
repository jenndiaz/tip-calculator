const inputBill = document.querySelector('input[name="bill"]')
const inputPeople = document.querySelector('input[name="people"]')

inputBill.addEventListener("keyup", calc)
inputPeople.addEventListener("keyup", calc)

function calc() {
  const billAmount = document.querySelector('input[name="bill"]').value
  const numberOfPeople = document.querySelector('input[name="people"]').value 

  if (billAmount && numberOfPeople) {
    const total = document.getElementById('total')
    total.innerHTML = billAmount + numberOfPeople
  }
}

console.log('script!!')
console.log(inputBill)
console.log(inputPeople)
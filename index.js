let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl =  document.getElementById('ul-el')
// Push the value "www.awesomelead.com" to myArray when the input button is clicked
console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
for ( let i = 0; i < myLeads.length ; i++){
   ulEl.textContent += myLeads[i]
}


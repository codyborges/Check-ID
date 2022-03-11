// write a program that determins if a person can get into a 21+ club by checking their year of birth 
// you're gonna wanna subtract the current year from the entered year and save it to an age variable 
// print to the Dom the users entered name and if they can get in or not 

//DOM variables
let name = document.querySelector('.nameInput')
console.log(name)
let year = document.querySelector('.yearInput')
console.log(year)
let subBtn = document.querySelector('#submit')
console.log(subBtn)
let result = document.querySelector('#getIn')
console.log(result)


//Event Listener
subBtn.addEventListener('click', checkAge)

//Function
function checkAge(){
  let userName = name.value
  let current = 2022
  let oldEnuff = current - parseInt(year.value)
  console.log(oldEnuff)
  if(oldEnuff >= 21){
    result.innerHTML = `${userName}, You're good pal.`
  }else {
    result.innerHTML = `${userName}, sorry pal, no way jose`
  }
}
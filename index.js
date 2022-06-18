const form = document.getElementById('my-form')
const inputForFirstName = document.getElementById('fname')
const inputForLastName = document.getElementById('lname')
const inputForEmail = document.getElementById('mail')
const inputForPassword = document.getElementById('pword')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if(inputForFirstName.value === '') {
    inputForFirstName.classList.add('invalid')
  }
  if(inputForLastName.value === "") {
    inputForLastName.classList.add('invalid')
  }
  if(inputForEmail.value === "" || !inputForEmail.value.includes('@')) {
    inputForEmail.classList.add('invalid')
  }
  if(inputForPassword.value === "") {
    inputForPassword.classList.add('invalid')
  }
})

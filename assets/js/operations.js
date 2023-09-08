// DOM
let number = document.querySelector('.numb')
let name = document.querySelector('.name')
let button = document.querySelector('.send')
let numbers = document.querySelector('.numbers')
let numbersi = document.querySelectorAll('.numbers>input:not([type=button])')
let clear = document.querySelector('.clear')

number.focus()

// fill checker
const checker = () => {
  if (number.value.length == 0) {
    sweetAlert('please fill all inputs', true)
  } else {
    numberChecker()
  }
}

//name checker
const NameChecker = () => {
  if (name.value) {
    sweetAlert('welcome', false)
  } else {
    sweetAlert('please enter a real name', true)
  }
}

// number checker
const numberChecker = () => {
  if (+number.value) {
    allFieldChecker()
  } else {
    sweetAlert('please enter number', true)
  }
}

// check all feild input of number
const allFieldChecker = () => {
  numbersi.forEach((val, index) => {
    if (!numbersi[index].value) {
      sweetAlert('you should be fill feilds', true)
    } else {
      NameChecker()
    }
  })
  name.focus()
}

// focus on next sibling element
setInterval(() => {
  for (let i = 0; i < numbers.children.length; i++) {
    let x = i
    if (numbers.children[x].value.length == 4) {
      x++
      numbers.children[x].focus()
      if (x == 4) {
        name.focus()
      }
    }
  }
}, 400);

// clear button
let nn = numbers.children
clear.addEventListener('click', () => {
  Clear()
})
const Clear = () => {
  for (let i = 0; i < 4; i++) {
    numbers.children[i].value = null
  }
  name.value = null
  number.focus()
}

const sweetAlert = (str, ch) => {
  // sweetalert2 library
  let icon = 'success'
  if (ch == true) {
    icon = 'warning'
    Clear()
  }
  Swal.fire({
    title: `${str}`,
    icon: icon,
    width: 450,
    padding: '2em',
    color: '#716add',
    background: 'rgba(0,0,0,0.7) url(../images/galaxy.jpg)',
    backdrop: `
    rgba(0,0,0,0.7)
  `
  })
}

// click to button
button.addEventListener('click', checker)

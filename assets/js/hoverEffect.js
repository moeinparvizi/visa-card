// DOM
const card = document.querySelector('.glass')
const big = document.querySelector('.bigcircle')
const small = document.querySelector('.smallcircle')
const main = document.getElementsByTagName('main')[0]
// variables
let x, y, w, h, op

// Hover Effect Of Card
card.addEventListener('mousemove', (e) => {
  card.style.transition = '0s'
  x = e.offsetX
  y = e.offsetY
  w = (e.target.clientWidth) / 20
  h = (e.target.clientHeight) / 30
  op = 'perspective(800px)rotateY(' + ((x / 20) - (w / 2)) + 'deg)rotateX(' + ((y / 20) - (h / 2)) + 'deg)'
  card.style.transform = op
})

// go back hover effect of card
card.addEventListener('mouseleave', () => {
  card.style.transition = '1s'
  op = 'perspective(800px)rotateY(0deg)rotateX(0deg)'
  card.style.transform = op
})

// Hover Effect Of Circles
main.addEventListener('mousemove', (e) => {
  big.style.transition = '0s'
  small.style.transition = '0s'
  x = e.offsetX
  w = (e.target.clientWidth) / 20
  op = 'translate(' + ((x / 20) - (w / 2)) + 'px)'
  big.style.transform = op
  small.style.transform = op
})

// go back hover effect of circles
main.addEventListener('mouseleave', () => {
  big.style.transition = '1s'
  small.style.transition = '1s'
  op = 'translate(0px)'
  big.style.transform = op
  small.style.transform = op
})

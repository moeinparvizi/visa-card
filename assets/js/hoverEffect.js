// DOM
const card = document.querySelector('.glass')
let big = document.querySelector('.bigcircle')
let small = document.querySelector('.smallcircle')
const main = document.getElementsByTagName('main')[0]

card.addEventListener('mousemove', (e) => {
  card.style.transition = '0s'
  let x = e.offsetX
  let y = e.offsetY
  let w = (e.target.clientWidth) / 20
  let h = (e.target.clientHeight) / 30
  let op = 'perspective(800px)rotateY(' + ((x / 20) - (w / 2)) + 'deg)rotateX(' + ((y / 20) - (h / 2)) + 'deg)'
  card.style.transform = op
})

card.addEventListener('mouseleave', () => {
  card.style.transition = '1s'
  const op = 'perspective(800px)rotateY(0deg)rotateX(0deg)'
  card.style.transform = op
})

main.addEventListener('mousemove', (e) => {
  big.style.transition = '0s'
  small.style.transition = '0s'
  let x = e.offsetX
  let w = (e.target.clientWidth) / 20
  let op = 'perspective(800px)rotateY(' + ((x / 20) - (w / 2)) + 'deg)'
  big.style.transform = op
  small.style.transform = op
})

main.addEventListener('mouseleave', () => {
  big.style.transition = '1s'
  small.style.transition = '1s'
  const op = 'perspective(800px)rotateY(0deg)'
  big.style.transform = op
  small.style.transform = op
})

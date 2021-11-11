console.log('Hello World')

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');

const firstly = document.getElementById('firstly');
const secondly = document.getElementById('secondly');
const thirdly = document.getElementById('thirdly');
const fourthly = document.getElementById('fourthly');

firstly.addEventListener('click', () => {
    first.style.display = 'block'
    second.style.display = 'none'
    third.style.display = 'none'
    fourth.style.display = 'none'
})

secondly.addEventListener('click', () => {
    first.style.display = 'none'
    second.style.display = 'block'
    third.style.display = 'none'
    fourth.style.display = 'none'
})

thirdly.addEventListener('click', () => {
    first.style.display = 'none'
    second.style.display = 'none'
    third.style.display = 'block'
    fourth.style.display = 'none'
})

fourthly.addEventListener('click', () => {
    first.style.display = 'none'
    second.style.display = 'none'
    third.style.display = 'none'
    fourth.style.display = 'block'
})
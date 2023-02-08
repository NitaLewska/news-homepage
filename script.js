const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

console.log(hamburger, menu)

hamburger.onclick = function() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
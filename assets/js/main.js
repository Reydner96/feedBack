const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectRating = 'Satisfeito'

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectRating = e.target.nextElementSibling.innerHTML
    } else if (
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectRating = e.target.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Obrigado!</strong>
        <br>
        <strong>Feedback: ${selectRating}</strong>
        <p>Usaremos seu feedback para melhorar nosso suporte ao cliente</p>
    `
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
}
}
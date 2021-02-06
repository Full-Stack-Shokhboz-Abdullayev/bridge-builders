const form = document.querySelector(".inputs")
const successMsg = document.querySelector(".success-msg")



form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('d-none')
    successMsg.classList.remove('d-none')
    successMsg.classList.add('d-block')
})
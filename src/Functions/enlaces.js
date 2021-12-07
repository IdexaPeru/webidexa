// @ts-nocheck

window.document.addEventListener('DOMContentLoaded', (e) => {
  let buttons = document.querySelectorAll('.enlace');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      let target = e.currentTarget.getAttribute('href');

      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
})
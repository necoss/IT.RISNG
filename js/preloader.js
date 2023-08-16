let mask = document.querySelector('.loader-mask')

window.addEventListener('load', () => {
  mask.classList.add('hide')
  setTimeout(() => {
    mask.remove()
  }, 600)
})
// Utility functions
function label(element) {
  return document.querySelector(element)
}

// DOM elements
const html = label(['html'])
const hamburger = label('.burger')

html.addEventListener('click', ({ target }) => {
  const classList = Array.from(target.classList)

  if (classList.includes('toggle')) return handleToggle()

  if (Array.from(hamburger.classList).includes('active')) handleToggle()
})

function handleToggle() {
  hamburger.classList.toggle('active')
}

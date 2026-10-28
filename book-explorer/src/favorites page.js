
import './style.css'
import { getFavorites, removeFavorite } from './favorites.js'

const grid = document.querySelector('#favorites-grid')
const status = document.querySelector('#favorites-status')

function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;',
    '"': '&quot;', "'": '&#39;',
  })[char])
}

function renderFavorites() {
  const books = getFavorites()

  status.textContent = books.length
    ? `${books.length} favorite book(s) saved`
    : 'Your library is empty. Visit Home and save a book you love.'

  grid.innerHTML = books.map((book) => `
    <article class="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm">
      ${
        book.cover
          ? `<img class="book-cover rounded-xl" src="${escapeHTML(book.cover)}" alt="Cover of ${escapeHTML(book.title)}">`
          : `<div class="book-cover flex items-center justify-center text-center">${escapeHTML(book.title)}</div>`
      }
      <h2 class="mt-3 font-bold">${escapeHTML(book.title)}</h2>
      <p class="mt-2 text-sm text-stone-500">${escapeHTML(book.author)}</p>
      <button data-remove="${escapeHTML(book.id)}" class="mt-4 w-full rounded-full border border-orange-300 px-3 py-2 text-sm font-semibold text-orange-800 hover:bg-orange-50">
        Remove Favorite
      </button>
    </article>
  `).join('')
}

grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-remove]')
  if (!button) return

  removeFavorite(button.dataset.remove)
  renderFavorites()
})

renderFavorites()

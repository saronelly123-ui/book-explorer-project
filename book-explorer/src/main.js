
import './style.css'
import { fetchBooks } from './fetchBooks.js'
import { isFavorite, toggleFavorite } from './favorites.js'

const grid = document.querySelector('#book-grid')
const status = document.querySelector('#status-message')
const count = document.querySelector('#book-count')
const form = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')
const sortSelect = document.querySelector('#sort-select')
const retryButton = document.querySelector('#retry-button')

const state = {
  items: [],
  query: 'popular books',
  sort: 'relevance',
  status: 'idle',
}

function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char])
}

function getVisibleBooks() {
  const query = searchInput.value.trim().toLowerCase()

  const filtered = state.items.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(query),
  )

  if (state.sort === 'title') {
    return filtered.toSorted((a, b) => a.title.localeCompare(b.title))
  }

  if (state.sort === 'year') {
    return filtered.toSorted((a, b) => (b.year || 0) - (a.year || 0))
  }

  return filtered
}

function renderBooks() {
  const books = getVisibleBooks()

  count.textContent = `${books.length} books found`

  if (!books.length) {
    grid.innerHTML = ''
    status.textContent = 'No books found. Try another search.'
    status.classList.remove('hidden')
    return
  }

  status.classList.add('hidden')

  grid.innerHTML = books.map((book) => {
    const favorite = isFavorite(book.id)

    const cover = book.cover
      ? `<img class="book-cover" src="${escapeHTML(book.cover)}" alt="Cover of ${escapeHTML(book.title)}" loading="lazy">`
      : `<div class="book-cover flex items-center justify-center p-5 text-center text-orange-900 font-bold">📚 ${escapeHTML(book.title)}</div>`

    return `
      <article class="overflow-hidden rounded-2xl border border-orange-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <a href="https://openlibrary.org${encodeURI(book.id)}"
           target="_blank" rel="noopener noreferrer"
           class="block overflow-hidden rounded-xl">
          ${cover}
        </a>

        <div class="p-2">
          <h3 class="line-clamp-2 min-h-12 font-bold text-stone-800">
            ${escapeHTML(book.title)}
          </h3>
          <p class="mt-1 text-sm text-stone-500">
            ${escapeHTML(book.author)}
          </p>
          <p class="mt-1 text-xs text-stone-400">
            ${book.year || 'Publication year unavailable'}
          </p>

          <button
            type="button"
            data-favorite="${escapeHTML(book.id)}"
            class="mt-4 w-full rounded-full border border-orange-200 px-3 py-2 text-sm font-semibold hover:bg-orange-50"
            aria-pressed="${favorite}">
            ${favorite ? '♥ Saved' : '♡ Add to Favorites'}
          </button>
        </div>
      </article>
    `
  }).join('')
}

async function loadBooks(query = 'popular books') {
  state.status = 'loading'
  state.query = query
  retryButton.classList.add('hidden')
  grid.innerHTML = ''
  status.textContent = 'Loading your books...'
  status.classList.remove('hidden')

  try {
    state.items = await fetchBooks(query)
    state.status = 'success'
    renderBooks()
  } catch (error) {
    state.status = 'error'
    status.textContent = 'We could not load the books. Check your connection and try again.'
    retryButton.classList.remove('hidden')
    count.textContent = 'Books unavailable'
    console.error(error)
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const query = searchInput.value.trim()
  loadBooks(query || 'popular books')
})

searchInput.addEventListener('input', renderBooks)

sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value
  renderBooks()
})

retryButton.addEventListener('click', () => loadBooks(state.query))

grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-favorite]')
  if (!button) return

  const book = state.items.find((item) => item.id === button.dataset.favorite)
  if (!book) return

  toggleFavorite(book)
  renderBooks()
})

loadBooks()

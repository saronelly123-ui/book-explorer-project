
import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="navbar">
    <a class="brand" href="./index.html">
      <span class="brand-icon">B</span>
      BookNest
    </a>
    <nav>
      <a href="./index.html">Home</a>
      <a href="./index.html#books">Explore Books</a>
      <a href="./favorites.html">Favorites</a>
    </nav>
  </header>

  <main class="books-section">
    <span class="eyebrow">YOUR PERSONAL COLLECTION</span>
    <h1>Your Favorite Books ❤️</h1>
    <p>Books you have chosen to save.</p>

    <p id="favorites-status" aria-live="polite"></p>
    <div id="favorites-grid" class="book-grid"></div>

    <a class="back-link" href="./index.html">
      ← Back to Explore Books
    </a>
  </main>

  <footer>
    <a class="brand" href="./index.html">
      <span class="brand-icon">B</span> BookNest
    </a>
    <p>Made for curious minds and book lovers. © 2026</p>
  </footer>
`

const grid = document.querySelector('#favorites-grid')
const status = document.querySelector('#favorites-status')

function loadFavorites() {
  let favorites = []

  try {
    const saved = JSON.parse(
      localStorage.getItem('booknest-favorites') || '[]'
    )

    favorites = saved.filter(book =>
      book &&
      typeof book === 'object' &&
      typeof book.key === 'string'
    )
  } catch (error) {
    console.error('Could not read favorites:', error)
  }

  grid.innerHTML = ''

  if (favorites.length === 0) {
  status.textContent = 'No saved books yet. '

  const exploreLink = document.createElement('a')
  exploreLink.href = './index.html#books'
  exploreLink.textContent = 'Explore books and add your favorites.'
  exploreLink.className = 'back-link'

  status.append(exploreLink)
  return
}

  status.textContent = `${favorites.length} saved book(s)`

  favorites.forEach(book => {
    const card = document.createElement('article')
    card.className = 'book-card'

const coverArea = document.createElement('div')
coverArea.className = 'cover-area'

if (book.cover) {
  const image = document.createElement('img')
  image.className = 'book-cover'
  image.src = book.cover
  image.alt = `Cover of ${book.title || 'book'}`
  image.loading = 'lazy'

  image.onerror = () => {
    image.remove()
    coverArea.classList.add('no-cover')
    coverArea.textContent = '📚'
  }

  coverArea.append(image)
} else {
  coverArea.classList.add('no-cover')
  coverArea.textContent = '📚'
}

const info = document.createElement('div')
info.className = 'book-info'

    const title = document.createElement('h3')
    title.textContent = book.title || 'Untitled'

    const author = document.createElement('p')
    author.className = 'book-author'
    author.textContent = book.author || 'Unknown author'

    const year = document.createElement('p')
    year.className = 'book-year'
    year.textContent = book.year
      ? `First published ${book.year}`
      : 'Saved to your reading list'

    const removeButton = document.createElement('button')
    removeButton.className = 'save-button'
    removeButton.textContent = '♥ Remove from Favorites'

    removeButton.addEventListener('click', () => {
      const updatedFavorites = favorites.filter(
        savedBook => savedBook.key !== book.key
      )

      localStorage.setItem(
        'booknest-favorites',
        JSON.stringify(updatedFavorites)
      )

      loadFavorites()
    })

    info.append(title, author, year, removeButton)
    card.append(coverArea, info)
    grid.append(card)
  })
}

loadFavorites()


import './style.css'
import { fetchBooks } from './fetchbooks.js'

const app = document.querySelector('#app')

const books = [
  {
    id: '158',
    title: 'Emma',
    author: 'Jane Austen',
    genre: 'Romance / Comedy',
    year: 1815,
    cover: 'https://www.gutenberg.org/cache/epub/158/pg158.cover.medium.jpg',
    story: 'Emma Woodhouse enjoys matchmaking, but her attempts to arrange other people’s love lives lead to unexpected surprises.',
    readUrl: 'https://www.gutenberg.org/cache/epub/158/pg158-images.html'
  },
  {
    id: '174',
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    genre: 'Gothic / Drama',
    year: 1890,
    cover: 'https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg',
    story: 'A young man becomes obsessed with beauty and youth after a mysterious portrait begins to reflect the consequences of his choices.',
    readUrl: 'https://www.gutenberg.org/cache/epub/174/pg174-images.html'
  },
  {
    id: '103',
    title: 'Around the World in Eighty Days',
    author: 'Jules Verne',
    genre: 'Adventure',
    year: 1873,
    cover: 'https://www.gutenberg.org/cache/epub/103/pg103.cover.medium.jpg',
    story: 'Phileas Fogg accepts a daring challenge to travel around the world in eighty days, facing unexpected obstacles along the way.',
    readUrl: 'https://www.gutenberg.org/cache/epub/103/pg103-images.html'
  },
  {
    id: '1874',
    title: 'The Railway Children',
    author: 'E. Nesbit',
    genre: 'Family / Adventure',
    year: 1906,
    cover: 'https://www.gutenberg.org/cache/epub/1874/pg1874.cover.medium.jpg',
    story: 'Three children move to the countryside and find friendship, adventure, and a mystery involving their father.',
    readUrl: 'https://www.gutenberg.org/cache/epub/1874/pg1874-images.html'
  },
  {
    id: '45',
    title: 'Anne of Green Gables',
    author: 'L. M. Montgomery',
    genre: 'Family / Coming-of-Age',
    year: 1908,
    cover: 'https://www.gutenberg.org/cache/epub/45/pg45.cover.medium.jpg',
    story: 'Imaginative Anne Shirley arrives at Green Gables and brings laughter, friendship, and unexpected changes to her new home.',
    readUrl: 'https://www.gutenberg.org/cache/epub/45/pg45-images.html'
  },
  {
    id: '1342',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    year: 1813,
    cover: 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg',
    story: 'Elizabeth Bennet meets the proud Mr. Darcy. First impressions, family expectations, and unexpected feelings challenge what they believe about love.',
    readUrl: 'https://www.gutenberg.org/cache/epub/1342/pg1342-images.html'
  },
  {
    id: '84',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    genre: 'Gothic / Science Fiction',
    year: 1818,
    cover: 'https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg',
    story: 'A scientist creates a living being, then fears the life he has brought into the world. A story about ambition, loneliness, and responsibility.',
    readUrl: 'https://www.gutenberg.org/cache/epub/84/pg84-images.html'
  },
  {
    id: '11',
    title: "Alice's Adventures in Wonderland",
    author: 'Lewis Carroll',
    genre: 'Fantasy',
    year: 1865,
    cover: 'https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg',
    story: 'Alice follows a mysterious White Rabbit and tumbles into a strange world where nothing follows the rules she knows.',
    readUrl: 'https://www.gutenberg.org/cache/epub/11/pg11-images.html'
  },
  {
    id: '1661',
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    genre: 'Mystery',
    year: 1892,
    cover: 'https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg',
    story: 'Join Sherlock Holmes and Dr. Watson as they uncover hidden clues, solve puzzling cases, and reveal secrets others cannot see.',
    readUrl: 'https://www.gutenberg.org/cache/epub/1661/pg1661-images.html'
  },
  {
    id: '345',
    title: 'Dracula',
    author: 'Bram Stoker',
    genre: 'Horror',
    year: 1897,
    cover: 'https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg',
    story: 'A journey to a mysterious castle leads to a terrifying discovery. Soon, a group of people must face a darkness that threatens them all.',
    readUrl: 'https://www.gutenberg.org/cache/epub/345/pg345-images.html'
  },
  {
    id: '1260',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    genre: 'Romance / Drama',
    year: 1847,
    cover: 'https://www.gutenberg.org/cache/epub/1260/pg1260.cover.medium.jpg',
    story: 'An independent young woman becomes a governess at Thornfield Hall, where she finds affection, difficult choices, and a disturbing secret.',
    readUrl: 'https://www.gutenberg.org/cache/epub/1260/pg1260-images.html'
  },
  {
    id: '514',
    title: 'Little Women',
    author: 'Louisa May Alcott',
    genre: 'Family / Drama',
    year: 1868,
    cover: 'https://www.gutenberg.org/cache/epub/514/pg514.cover.medium.jpg',
    story: 'Four sisters grow up with different dreams, face hardships, and discover how love, courage, and family shape their futures.',
    readUrl: 'https://www.gutenberg.org/cache/epub/514/pg514-images.html'
  },
  {
    id: '120',
    title: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    genre: 'Adventure',
    year: 1883,
    cover: 'https://www.gutenberg.org/cache/epub/120/pg120.cover.medium.jpg',
    story: 'A mysterious map promises buried treasure. Jim Hawkins sets sail, but dangerous pirates and hidden betrayals turn the voyage into a fight for survival.',
    readUrl: 'https://www.gutenberg.org/cache/epub/120/pg120-images.html'
  },
  {
    id: '113',
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    genre: 'Mystery / Family',
    year: 1911,
    cover: 'https://www.gutenberg.org/cache/epub/113/pg113.cover.medium.jpg',
    story: 'A lonely girl discovers a locked garden hidden behind old walls. As she brings it back to life, unexpected changes begin to happen.',
    readUrl: 'https://www.gutenberg.org/cache/epub/113/pg113-images.html'
  },
  {
    id: '55',
    title: 'The Wonderful Wizard of Oz',
    author: 'L. Frank Baum',
    genre: 'Fantasy / Adventure',
    year: 1900,
    cover: 'https://www.gutenberg.org/cache/epub/55/pg55.cover.medium.jpg',
    story: 'Swept far from home, Dorothy travels through a magical land with new companions, hoping a mysterious wizard can help her return.',
    readUrl: 'https://www.gutenberg.org/cache/epub/55/pg55-images.html'
  },
  {
    id: '35',
    title: 'The Time Machine',
    author: 'H. G. Wells',
    genre: 'Science Fiction',
    year: 1895,
    cover: 'https://www.gutenberg.org/cache/epub/35/pg35.cover.medium.jpg',
    story: 'An inventor journeys into the distant future and discovers a world that challenges everything he thought he knew about humanity.',
    readUrl: 'https://www.gutenberg.org/cache/epub/35/pg35-images.html'
  },
  {
    id: '43',
    title: 'Dr. Jekyll and Mr. Hyde',
    author: 'Robert Louis Stevenson',
    genre: 'Thriller / Mystery',
    year: 1886,
    cover: 'https://www.gutenberg.org/cache/epub/43/pg43.cover.medium.jpg',
    story: 'A respected doctor hides a disturbing secret. As strange events unfold, a dark mystery reveals the battle between two sides of human nature.',
    readUrl: 'https://www.gutenberg.org/cache/epub/43/pg43-images.html'
  },
  {
    id: '1400',
    title: 'Great Expectations',
    author: 'Charles Dickens',
    genre: 'Drama',
    year: 1861,
    cover: 'https://www.gutenberg.org/cache/epub/1400/pg1400.cover.medium.jpg',
    story: 'Pip dreams of becoming a gentleman after receiving unexpected financial support. But his new life brings secrets, heartbreak, and difficult lessons.',
    readUrl: 'https://www.gutenberg.org/cache/epub/1400/pg1400-images.html'
  },
  {
    id: '215',
    title: 'The Call of the Wild',
    author: 'Jack London',
    genre: 'Adventure',
    year: 1903,
    cover: 'https://www.gutenberg.org/cache/epub/215/pg215.cover.medium.jpg',
    story: 'Buck is taken from his comfortable home to the harsh northern wilderness, where he must learn to survive and discover his deepest instincts.',
    readUrl: 'https://www.gutenberg.org/cache/epub/215/pg215-images.html'
  },
  {
    id: '74',
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    genre: 'Adventure / Comedy',
    year: 1876,
    cover: 'https://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg',
    story: 'Tom Sawyer loves mischief and adventure. But when he and his friend discover something frightening, their childhood games become serious.',
    readUrl: 'https://www.gutenberg.org/cache/epub/74/pg74-images.html'
  }
]

let displayedBooks = [...books]
let isLoading = false
let apiError = ''

app.innerHTML = `
  <header class="navbar">
    <a class="brand" href="./index.html">
      <span class="brand-icon">B</span> BookNest
    </a>

    <nav>
      <a href="#home">Home</a>
      <a href="#books">Explore Books</a>
      <a href="./favorites.html">Favorites</a>
      <a href="./about.html">About</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-content">
        <span class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h1>Find your next<br><span>favorite book.</span></h1>
        <p>
          Discover wonderful stories, explore new ideas,
          and find books that inspire your next adventure.
        </p>

        <form id="search-form" class="search-box">
          <span>⌕</span>
          <input
            id="search-input"
            type="search"
            placeholder="Search books or authors..."
            aria-label="Search books or authors"
          >
          <button type="submit">Search</button>
        </form>

        <div class="hero-note">✦ Discover. Read. Grow.</div>
      </div>

      <div class="hero-photo">
        <img src="/book-explorer/image/my-photo.jpg"
          alt="A person enjoying a book while reading"
          loading="eager"
        >
      </div>
    </section>

    <section class="books-section" id="books">
      <div class="section-heading">
        <div>
          <span class="eyebrow">A WORLD OF STORIES</span>
          <h2>Explore our books</h2>
          <p>Twenty stories. Endless possibilities.</p>
        </div>

        <select id="sort-books" aria-label="Sort books">
          <option value="recommended">Recommended</option>
          <option value="title">Title A–Z</option>
        </select>
      </div>

      <p id="status" aria-live="polite"></p>
      <button id="retry-search" class="save-button" hidden>Retry</button>
      <div id="book-grid" class="book-grid"></div>
    </section>

    <section class="favorites-section">
      <h2>Your reading list ❤️</h2>
      <p>Save books you would love to read.</p>
      <p id="favorites-count"></p>
      <a class="back-link" href="./favorites.html">View my favorite books →</a>
    </section>
  </main>

  <footer>
    <a class="brand" href="./index.html">
      <span class="brand-icon">B</span> BookNest
    </a>
    <p>Made for curious minds and book lovers. © 2026</p>
  </footer>
`

const grid = document.querySelector('#book-grid')
const status = document.querySelector('#status')
const searchInput = document.querySelector('#search-input')
const searchForm = document.querySelector('#search-form')
const sortSelect = document.querySelector('#sort-books')
const favoritesCount = document.querySelector('#favorites-count')
const retryButton = document.querySelector('#retry-search')

let query = ''
let sort = 'recommended'
let favorites = readFavorites()

function readFavorites() {
  try {
    const data = JSON.parse(
      localStorage.getItem('booknest-favorites') || '[]'
    )
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

function saveFavorites() {
  localStorage.setItem('booknest-favorites', JSON.stringify(favorites))
}

function renderFavoritesCount() {
  favoritesCount.textContent = favorites.length
    ? `You have saved ${favorites.length} book${favorites.length === 1 ? '' : 's'} to your reading list.`
    : 'You have not saved any books yet.'
}

function renderBooks() {
  let visibleBooks = displayedBooks.filter(book =>
    `${book.title} ${book.author} ${book.genre}`
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  if (sort === 'title') {
    visibleBooks = visibleBooks.toSorted((a, b) =>
      a.title.localeCompare(b.title)
    )
  }

  grid.replaceChildren()

  if (isLoading) {
    status.textContent = 'Loading books... Please wait.'
    retryButton.hidden = true
    return
  }

  if (apiError) {
    status.textContent = apiError
    retryButton.hidden = false
    return
  }

  retryButton.hidden = true
  status.textContent =
    `${visibleBooks.length} book${visibleBooks.length === 1 ? '' : 's'} to discover`

  if (!visibleBooks.length) {
    status.textContent = 'No books found. Try another search.'
    return
  }

  visibleBooks.forEach(book => {
    const isSaved = favorites.some(item => item.key === book.id)

    const card = document.createElement('article')
    card.className = 'book-card'

    const coverArea = document.createElement('div')
    coverArea.className = 'cover-area'

    const image = document.createElement('img')
    image.className = 'book-cover'
    image.src = book.cover || ''
    image.alt = `Cover of ${book.title}`
    image.loading = 'lazy'

    image.onerror = () => {
      image.remove()
      coverArea.classList.add('no-cover')
      coverArea.textContent = '📚'
    }

    coverArea.append(image)

    const info = document.createElement('div')
    info.className = 'book-info'

    const genre = document.createElement('p')
    genre.className = 'book-author'
    genre.textContent = book.genre || 'General'

    const title = document.createElement('h3')
    title.textContent = book.title

    const author = document.createElement('p')
    author.className = 'book-author'
    author.textContent = `By ${book.author}`

    const readButton = document.createElement('button')
    readButton.className = 'save-button'
    readButton.textContent = 'Read Book →'

    readButton.addEventListener('click', () => {
  sessionStorage.setItem(
    'booknest-current-book',
    JSON.stringify(book)
  )

  window.location.href = `./book.html?id=${encodeURIComponent(book.id)}`
})

    const saveButton = document.createElement('button')
    saveButton.className = 'save-button'
    saveButton.textContent = isSaved ? '♥ Saved' : '♡ Add to favorites'
    saveButton.setAttribute('aria-pressed', String(isSaved))

    saveButton.addEventListener('click', () => {
      const exists = favorites.some(item => item.key === book.id)

      if (exists) {
        favorites = favorites.filter(item => item.key !== book.id)
      } else {
        favorites = [
          ...favorites,
          {
            key: book.id,
            title: book.title,
            author: book.author,
            cover: book.cover || '',
            year: book.year || 'Unknown'
          }
        ]
      }

      saveFavorites()
      renderBooks()
      renderFavoritesCount()
    })

    info.append(genre, title, author, readButton, saveButton)
    card.append(coverArea, info)
    grid.append(card)
  })
}

async function searchBooksFromApi() {
  const searchTerm = searchInput.value.trim()

  if (!searchTerm) {
    displayedBooks = [...books]
    query = ''
    apiError = ''
    isLoading = false
    renderBooks()
    return
  }

  isLoading = true
  apiError = ''
  query = ''
  renderBooks()

  try {
    const results = await fetchBooks(searchTerm)

    displayedBooks = results
    isLoading = false
    apiError = ''
    query = ''
    renderBooks()

    if (results.length === 0) {
      status.textContent = 'No books found. Try another search.'
    }
  } catch (error) {
    console.error('Book search failed:', error)
    isLoading = false
    apiError = 'Could not load books. Check your connection and try again.'
    renderBooks()
  }
}

searchForm.addEventListener('submit', event => {
  event.preventDefault()
  searchBooksFromApi()
})

retryButton.addEventListener('click', searchBooksFromApi)

sortSelect.addEventListener('change', () => {
  sort = sortSelect.value
  renderBooks()
})

renderFavoritesCount()
renderBooks()

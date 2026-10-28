
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
      <a href="./about.html" aria-current="page">About</a>
    </nav>
  </header>

  <main class="books-section about-page">
    <section class="about-hero">
      <span class="eyebrow">GET TO KNOW US</span>
      <h1>Every great journey begins with a book.</h1>
      <p>
        Welcome to BookNest, your friendly space for discovering
        stories, exploring new ideas, and finding your next favorite book.
      </p>
      <a class="back-link" href="./index.html#books">
        Explore Books →
      </a>
    </section>

    <section class="about-content">
      <article class="about-card">
        <span class="about-icon">📚</span>
        <h2>Who We Are</h2>
        <p>
          BookNest is a book discovery web application designed to help
          readers explore books, learn about stories, and keep a personal
          collection of favorites.
        </p>
      </article>

      <article class="about-card">
        <span class="about-icon">🎯</span>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make discovering books simple and enjoyable,
          encourage reading, and help curious minds find stories that
          inspire them.
        </p>
      </article>

      <article class="about-card">
        <span class="about-icon">✨</span>
        <h2>What You Can Do</h2>
        <p>
          Browse books, search by title or author, read book descriptions,
          and save your favorite titles to your personal reading list.
        </p>
      </article>
    </section>

    <section class="about-how">
      <span class="eyebrow">GETTING STARTED</span>
      <h2>How BookNest Works</h2>

      <ol>
        <li>Explore the available books on the Home page.</li>
        <li>Use the search bar to find books you are interested in.</li>
        <li>Open a book to learn more about its story.</li>
        <li>Click Add to Favorites to save a book to your collection.</li>
        <li>Visit Favorites whenever you want to see your saved books.</li>
      </ol>
    </section>
  </main>

  <footer>
    <a class="brand" href="./index.html">
      <span class="brand-icon">B</span>
      BookNest
    </a>
    <p>Made for curious minds and book lovers. © 2026</p>
  </footer>
`

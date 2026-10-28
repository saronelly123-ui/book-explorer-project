
const app = document.querySelector("#app");

const books = [
  {
    id: "158",
    title: "Emma",
    author: "Jane Austen",
    year: "1815",
    genre: "Romance · Classic Fiction",
    cover: "https://www.gutenberg.org/cache/epub/158/pg158.cover.medium.jpg",
    story: "Emma Woodhouse is a clever young woman who enjoys matchmaking. As she tries to arrange relationships for others, she discovers that understanding her own heart is more difficult than she imagined.",
    readUrl: "https://www.gutenberg.org/files/158/158-h/158-h.htm"
  },
  {
    id: "174",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    year: "1890",
    genre: "Gothic · Philosophy",
    cover: "https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg",
    story: "Dorian Gray wishes to remain young and beautiful forever. While his portrait reflects the consequences of his actions, Dorian becomes increasingly trapped by vanity and the pursuit of pleasure.",
    readUrl: "https://www.gutenberg.org/files/174/174-h/174-h.htm"
  },
  {
    id: "103",
    title: "Around the World in Eighty Days",
    author: "Jules Verne",
    year: "1873",
    genre: "Adventure · Travel",
    cover: "https://www.gutenberg.org/cache/epub/103/pg103.cover.medium.jpg",
    story: "Phileas Fogg makes a daring wager that he can travel around the world in eighty days. With his loyal servant Passepartout, he faces unexpected obstacles and exciting adventures.",
    readUrl: "https://www.gutenberg.org/files/103/103-h/103-h.htm"
  },
  {
    id: "1874",
    title: "The Railway Children",
    author: "E. Nesbit",
    year: "1906",
    genre: "Family · Adventure",
    cover: "https://www.gutenberg.org/cache/epub/1874/pg1874.cover.medium.jpg",
    story: "After their father disappears, three children move with their mother to the countryside. Near a railway station, they make friends and discover kindness, courage, and hope.",
    readUrl: "https://www.gutenberg.org/files/1874/1874-h/1874-h.htm"
  },
  {
    id: "45",
    title: "Anne of Green Gables",
    author: "L. M. Montgomery",
    year: "1908",
    genre: "Coming of Age · Family",
    cover: "https://www.gutenberg.org/cache/epub/45/pg45.cover.medium.jpg",
    story: "Anne Shirley, an imaginative orphan, is mistakenly sent to live with Marilla and Matthew Cuthbert. Her lively spirit transforms their lives and brings new friendships and adventures.",
    readUrl: "https://www.gutenberg.org/files/45/45-h/45-h.htm"
  },
  {
    id: "1342",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: "1813",
    genre: "Romance · Classic Fiction",
    cover: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    story: "Elizabeth Bennet meets the wealthy and proud Mr. Darcy. Through misunderstandings and unexpected discoveries, they learn to question their first impressions and understand one another.",
    readUrl: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
  },
  {
    id: "84",
    title: "Frankenstein",
    author: "Mary Shelley",
    year: "1818",
    genre: "Gothic · Science Fiction",
    cover: "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
    story: "Victor Frankenstein creates a living being through a scientific experiment. When he rejects his creation, a tragic story of loneliness, responsibility, and ambition begins.",
    readUrl: "https://www.gutenberg.org/files/84/84-h/84-h.htm"
  },
  {
    id: "11",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    year: "1865",
    genre: "Fantasy · Adventure",
    cover: "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",
    story: "Alice follows a mysterious white rabbit into a strange world filled with unusual creatures, curious adventures, and surprising situations.",
    readUrl: "https://www.gutenberg.org/files/11/11-h/11-h.htm"
  },
  {
    id: "1661",
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    year: "1892",
    genre: "Mystery · Detective Fiction",
    cover: "https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg",
    story: "The brilliant detective Sherlock Holmes and Dr. Watson investigate mysterious cases using careful observation, logic, and deduction.",
    readUrl: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm"
  },
  {
    id: "345",
    title: "Dracula",
    author: "Bram Stoker",
    year: "1897",
    genre: "Horror · Gothic Fiction",
    cover: "https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg",
    story: "Count Dracula's arrival brings danger and terror. A group of people must uncover his secrets and stop his frightening plans.",
    readUrl: "https://www.gutenberg.org/files/345/345-h/345-h.htm"
  },
  {
    id: "1260",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: "1847",
    genre: "Romance · Gothic Fiction",
    cover: "https://www.gutenberg.org/cache/epub/1260/pg1260.cover.medium.jpg",
    story: "Jane Eyre grows from a difficult childhood into an independent young woman. At Thornfield Hall, she develops feelings for Mr. Rochester and discovers troubling secrets.",
    readUrl: "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm"
  },
  {
    id: "514",
    title: "Little Women",
    author: "Louisa May Alcott",
    year: "1868",
    genre: "Family · Coming of Age",
    cover: "https://www.gutenberg.org/cache/epub/514/pg514.cover.medium.jpg",
    story: "The four March sisters grow up during the American Civil War. Each follows a different dream while learning about family, friendship, love, and adulthood.",
    readUrl: "https://www.gutenberg.org/files/514/514-h/514-h.htm"
  },
  {
    id: "120",
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    year: "1883",
    genre: "Adventure · Pirates",
    cover: "https://www.gutenberg.org/cache/epub/120/pg120.cover.medium.jpg",
    story: "Young Jim Hawkins discovers a treasure map and joins a dangerous sea voyage. He encounters pirates, including the clever Long John Silver.",
    readUrl: "https://www.gutenberg.org/files/120/120-h/120-h.htm"
  },
  {
    id: "113",
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    year: "1911",
    genre: "Family · Nature",
    cover: "https://www.gutenberg.org/cache/epub/113/pg113.cover.medium.jpg",
    story: "Mary Lennox discovers a locked garden at her uncle's home. With new friends, she restores the garden and discovers how friendship and nature help people grow.",
    readUrl: "https://www.gutenberg.org/files/113/113-h/113-h.htm"
  },
  {
    id: "55",
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    year: "1900",
    genre: "Fantasy · Adventure",
    cover: "https://www.gutenberg.org/cache/epub/55/pg55.cover.medium.jpg",
    story: "Dorothy is swept away to the magical land of Oz. With her friends, she travels toward the Emerald City hoping to find her way home.",
    readUrl: "https://www.gutenberg.org/files/55/55-h/55-h.htm"
  },
  {
    id: "35",
    title: "The Time Machine",
    author: "H. G. Wells",
    year: "1895",
    genre: "Science Fiction · Adventure",
    cover: "https://www.gutenberg.org/cache/epub/35/pg35.cover.medium.jpg",
    story: "An inventor travels far into the future using a time machine. There he encounters strange societies and discovers a troubling possibility about humanity's future.",
    readUrl: "https://www.gutenberg.org/files/35/35-h/35-h.htm"
  },
  {
    id: "43",
    title: "Dr. Jekyll and Mr. Hyde",
    author: "Robert Louis Stevenson",
    year: "1886",
    genre: "Mystery · Gothic Fiction",
    cover: "https://www.gutenberg.org/cache/epub/43/pg43.cover.medium.jpg",
    story: "Dr. Henry Jekyll experiments with separating the good and evil sides of human nature. His discoveries lead to the frightening emergence of Mr. Hyde.",
    readUrl: "https://www.gutenberg.org/files/43/43-h/43-h.htm"
  },
  {
    id: "1400",
    title: "Great Expectations",
    author: "Charles Dickens",
    year: "1861",
    genre: "Classic Fiction · Coming of Age",
    cover: "https://www.gutenberg.org/cache/epub/1400/pg1400.cover.medium.jpg",
    story: "Pip, a young orphan, unexpectedly receives the chance to become a gentleman. As his life changes, he learns lessons about ambition, loyalty, wealth, and kindness.",
    readUrl: "https://www.gutenberg.org/files/1400/1400-h/1400-h.htm"
  },
  {
    id: "215",
    title: "The Call of the Wild",
    author: "Jack London",
    year: "1903",
    genre: "Adventure · Nature",
    cover: "https://www.gutenberg.org/cache/epub/215/pg215.cover.medium.jpg",
    story: "Buck, a domesticated dog, is taken to the harsh Yukon during the gold rush. Through hardship and adventure, he gradually answers the call of his wild ancestors.",
    readUrl: "https://www.gutenberg.org/files/215/215-h/215-h.htm"
  },
  {
    id: "74",
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    year: "1876",
    genre: "Adventure · Comedy",
    cover: "https://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg",
    story: "Tom Sawyer is a mischievous boy growing up beside the Mississippi River. His playful schemes lead to friendship, mystery, and adventures that sometimes become dangerous.",
    readUrl: "https://www.gutenberg.org/files/74/74-h/74-h.htm"
  }
];

const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");

let savedBook = null;

try {
  savedBook = JSON.parse(
    sessionStorage.getItem("booknest-current-book") || "null"
  );
} catch (error) {
  console.error("Could not load selected book:", error);
}


const builtInBook = books.find(
  (item) => String(item.id) === String(bookId)
);

const book =
  builtInBook ||
  (savedBook && String(savedBook.id) === String(bookId)
    ? savedBook
    : null);


if (!app) {
  console.error("BookNest: #app element was not found.");
} else if (!book) {
  app.innerHTML = `
    <main class="reader-page">
      <a class="back-link" href="./index.html">← Back to Explore Books</a>
      <h1>Book not found</h1>
      <p>Please return to the homepage and choose a book.</p>
    </main>
  `;
} else {
  document.title = `${book.title || "Book"} | BookNest`;

  const title = book.title || "Untitled";
  const author = book.author || "Unknown author";
  const year = book.year || "Year unknown";
  const genre = book.genre || "General";
  const story = book.story || "No preview is available for this book yet.";
  const cover = book.cover || "";
  const isBuiltInBook = books.some(
    (item) => String(item.id) === String(book.id)
  );

  
let readerContent = "";

if (book.readUrl) {
  readerContent = `
    <section class="full-story">
      <h2>Read This Book</h2>
      <iframe
        src="${book.readUrl}"
        title="Read ${title}"
        width="100%"
        height="700"
        style="border: 1px solid #ddd; border-radius: 12px; background: white;"
        loading="lazy"
      ></iframe>
    </section>
  `;
} else if (book.archiveId) {
  readerContent = `
    <section class="full-story">
      <h2>Read This Book</h2>
      <iframe
        src="https://archive.org/stream/${encodeURIComponent(book.archiveId)}?ui=embed"
        title="Read ${title}"
        width="100%"
        height="700"
        style="border: 1px solid #ddd; border-radius: 12px; background: white;"
        loading="lazy"
      ></iframe>
    </section>
  `;
} else {
  readerContent = `
    <section class="full-story">
      <h2>Book Preview</h2>
      <p>${story}</p>
      <p>This edition does not have an embedded full-text reader available.</p>
    </section>
  `;
}

  app.innerHTML = `
    <header class="reader-nav">
      <a class="brand" href="./index.html">📚 BookNest</a>
      <nav>
        <a href="./index.html">Explore Books</a>
        <a href="./favorites.html">Favorites</a>
      </nav>
    </header>

    <main class="reader-page">
      <a class="back-link" href="./index.html">← Back to Explore Books</a>

      <section class="book-detail">
        <div class="detail-cover">
          ${
            cover
              ? `<img src="${cover}" alt="Cover of ${title}" onerror="this.style.display='none'" />`
              : `<div class="cover-placeholder">📚</div>`
          }
        </div>

        <div class="detail-info">
          <p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h1>${title}</h1>
          <p class="book-author">By ${author}</p>

          <div class="book-meta">
            <span>${year}</span>
            <span>${genre}</span>
          </div>

          <h2>About This Book</h2>
          <p class="book-description">${story}</p>

          ${readerContent}
        </div>
      </section>
    </main>
  `;
}

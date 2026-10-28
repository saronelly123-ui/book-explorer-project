
const API_URL = 'https://openlibrary.org/search.json'

export async function fetchBooks(query = 'popular books') {
  const params = new URLSearchParams({
    q: query,
    limit: '24',
    fields: 'key,title,author_name,first_publish_year,cover_i',
  })

  const response = await fetch(`${API_URL}?${params}`)

  if (!response.ok) {
    throw new Error(`Failed to load books: ${response.status}`)
  }

  const data = await response.json()

  return data.docs.map((book) => ({
    id: book.key,
    title: book.title || 'Untitled book',
    author: book.author_name?.[0] || 'Unknown author',
    year: book.first_publish_year || null,
    cover: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : null,
  }))
}

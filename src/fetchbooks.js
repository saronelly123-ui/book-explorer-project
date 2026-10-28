
const API_URL = 'https://openlibrary.org/search.json'

export async function fetchBooks(query = 'classic literature') {
  const searchTerm = query.trim() || 'classic literature'

  const params = new URLSearchParams({
    q: searchTerm,
    limit: '20',
    fields:
      'key,title,author_name,first_publish_year,cover_i,subject,ia,has_fulltext,public_scan_b'
  })

  const response = await fetch(`${API_URL}?${params}`)

  if (!response.ok) {
    throw new Error('Failed to load books')
  }

  const data = await response.json()

  return (data.docs || []).map(book => {
    const archiveIds = Array.isArray(book.ia) ? book.ia : []

    return {
      id: book.key,
      title: book.title || 'Untitled',
      author: book.author_name?.[0] || 'Unknown author',
      year: book.first_publish_year || 'Year unknown',
      cover: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : '',
      genre: book.subject?.[0] || 'General',
      story: `Discover ${book.title || 'this book'} by ${
        book.author_name?.[0] || 'an unknown author'
      }. Explore its details and available reading options.`,
      archiveId: archiveIds[0] || '',
      hasFullText: book.has_fulltext === true,
      publicScan: book.public_scan_b === true
    }
  })
}

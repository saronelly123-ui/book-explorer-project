
const STORAGE_KEY = 'book-explorer-favorites'

export function getFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export function isFavorite(id) {
  return getFavorites().some((book) => book.id === id)
}

export function toggleFavorite(book) {
  const favorites = getFavorites()
  const exists = favorites.some((item) => item.id === book.id)

  const updated = exists
    ? favorites.filter((item) => item.id !== book.id)
    : [...favorites, book]

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  return updated
}

export function removeFavorite(id) {
  const updated = getFavorites().filter((book) => book.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  return updated
}

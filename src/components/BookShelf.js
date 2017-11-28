import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = props => {
  const { books } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title" />
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map(book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired
}

export default BookShelf

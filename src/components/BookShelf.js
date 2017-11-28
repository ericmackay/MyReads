import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = props => {
  //Destructuring the props object
  const { books, thisShelf, shelfOptions, onShelfChange } = props

  return <div className="bookshelf" />
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  thisShelf: PropTypes.object.isRequired,
  shelfOptions: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookShelf

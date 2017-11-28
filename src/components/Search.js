import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import * as BooksAPI from '../util/BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      showSearchPage: true
    }
  }

  _toggleSearch = () => {
    this.setState({
      showSearchPage: false
    })
  }

  _handleSearch = query => {
    console.log(query)
    query && this.props.searchBooks(query)
  }

  render() {
    const { books } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this._toggleSearch}>
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.value}
              onChange={e => {
                this._handleSearch(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired
}

export default Search

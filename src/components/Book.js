import React, { Component } from 'react'
import * as BooksAPI from '../util/BooksAPI'

export default class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { book } = this.props

    const cover = !!book && book.imageLinks ? book.imageLinks.thumbnail : ''

    return (
      book !== [] && (
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url("${cover}")`
              }}
            />
            <div className="book-shelf-changer">
              <select
                name={book.id}
                value={book.shelf}
                onChange={e => this.handleChange(e.target.name, e.target.value)}
              >
                ))}
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      )
    )
  }
}

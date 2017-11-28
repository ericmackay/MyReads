import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as BooksAPI from '../util/BooksAPI'

export default class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="book" />
      </Router>
    )
  }
}

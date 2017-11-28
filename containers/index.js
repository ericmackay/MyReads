import React from 'react'
import ReactDOM from 'react-dom'
import { BroswerRouter } from 'react-router-dom'

import App from '../components/App'
import './index.css'

ReactDOM.render(
  <BroswerRouter>
    <App />
  </BroswerRouter>,
  document.getElementById('root')
);

export default App;

import React from 'react'

import Book from './components/Book'

const App = () => {
  return (
    <div>
      <Book />
    </div>
  )
}

export default React.memo(App)
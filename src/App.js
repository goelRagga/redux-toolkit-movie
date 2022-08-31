import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Footer, Header, Home, MovieDetail, PageNotFound } from './components'
import "./App.scss"
const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
           <Route path="*" element={PageNotFound} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
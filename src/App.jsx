import React from "react"
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/home/Home"
import Characters from "./components/characters/Characters"
import CharacterDetail from "./pages/characterDetail/CharacterDetail"
import Contact from "./pages/contact/Contact"
import { FavoritesProvider } from "./context/FavoritesContext"

function App() {
  return(
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/character/:id" element={<CharacterDetail />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Characters />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  )
}

export default App
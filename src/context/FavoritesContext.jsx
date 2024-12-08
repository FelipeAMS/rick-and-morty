import React, { createContext, useState } from "react"

export const FavoritesContext = React.createContext()

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) =>
                prevFavorites.includes(id)
                ? prevFavorites.filter(fav => fav !== id)
                : [...prevFavorites, id]
            )
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}
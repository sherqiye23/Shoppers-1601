import { createContext, useEffect, useState } from "react"

const favoritesContext = createContext()

export default function FavoritesProvider({children}) {
    let localfav = JSON.parse(localStorage.getItem("favorites"))
    let [favorites, setFavorites] = useState(localfav ? localfav : [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    let value = {
        favorites,
        setFavorites
    }

    return <favoritesContext.Provider value={value}>{children}</favoritesContext.Provider>
}
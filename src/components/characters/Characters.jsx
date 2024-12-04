import React, { useState, useEffect } from 'react'
import CharacterCard from '../characterCard/CharacterCard'
import styles from './Characters.module.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character')
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                const result = await response.json()
                setCharacters(result.results)
            } catch (e) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    console.log(characters)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    if (!characters) return null

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Characters</h1>
            <div className={styles.grid}>
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    )
}

export default Characters
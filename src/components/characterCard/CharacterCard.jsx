import React, {useContext} from 'react'
import styles from "./CharacterCard.module.css"

const CharacterCard = ({ character }) => {
    return (
        <div className={styles.card}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
        </div>
    )
}

export default CharacterCard
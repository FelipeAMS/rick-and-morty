import React, { Fragment, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/footer"
import styles from "./CharacterDetail.module.css";

const CharacterDetail = () => {
    const { id } = useParams();
    const { favorites = [], toggleFavorite } = useContext(FavoritesContext);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data));
    }, [id]);

    if (!character) return <p>Loading...</p>;

    const isFavorited = favorites.includes(character.id);

    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <img src={character.image} alt={character.name} className={styles.image} />
                <h2>{character.name}</h2>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
                <p>Origin: {character.origin.name}</p>

                <div
                    className={styles.heartContainer}
                    onClick={() => toggleFavorite(character.id)}
                >
                    <FontAwesomeIcon
                        icon={isFavorited ? solidHeart : regularHeart}
                        className={isFavorited ? styles.favorited : styles.heart}
                    />
                </div>
            </div>
            <Footer />
        </Fragment>

    );
};

export default CharacterDetail;
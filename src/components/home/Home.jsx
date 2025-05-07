import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Welcome to Rick & Morty Webpage! 🛸</h1>
                    <p className={styles.description}>
                        Explore a variety of characters from the famous Rick & Morty series. Choose your favorite characters and join the multiversal adventure!
                    </p>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.mainImage}
                            src="/rick-and-morty/images/rick-and-morty.jpeg"
                            alt="Rick & Morty"
                        />
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button}>
                            <Link to="/products" className={styles.buttonLink}>
                                View Characters
                            </Link>
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
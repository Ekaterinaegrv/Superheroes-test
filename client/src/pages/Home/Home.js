import React from 'react';
import styles from './Home.module.css'
import CreateNewHero from '../../components/CreateHero/CreateHero';
import HeroesLoader from '../../components/Heroes/HeroesLoader/HeroesLoader';


function Home(props) {


        return (
            <>
            <img className={styles.bg} src='/bg1.png' alt='bg'/>
            <h1 className={styles.header}>Welcome! It's Superheroes databases</h1> 
            <section className={styles.container}>
\                 <p className={styles.preheader}>All superheroes in database</p>
                <HeroesLoader/>
            </section>
            <section className={styles.container}>
                <CreateNewHero/> 
            </section>
            </>
        );
}

export default Home;
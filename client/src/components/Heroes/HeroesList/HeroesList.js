import React from "react";
import HeroesCard from "../HeroesCards/HeroesCards";
import styles from './HeroesList.module.css';

function HeroesList (props) {


    const renderUsers = () => {
       return props.heroes
        .map((hero)=> 
            <HeroesCard hero={hero} key={hero.id}/>
        )
    }
            return (
            <>
            <section className={styles.heroesList}> {renderUsers()}</section>
            </>
        )
}

export default HeroesList;

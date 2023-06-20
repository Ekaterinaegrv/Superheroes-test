import React, { useState, useEffect } from 'react';
import HeroesList from '../HeroesList/HeroesList';
import { getHeroes } from '../../../api/api';
import styles from './HeroesLoader.module.css';

function HeroesLoader(props) {
    const [heroes, setHeroes] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isError, setError] = useState(null);


    useEffect(()=>{
        load(offset);
        },[offset]); 

    const load = (offset) => {
        getHeroes(offset).then(data => {
                setHeroes(data);
            })
            .catch((error)=>{
            setError(error);
            })
    }


    const prevBtnHandler = () =>{
        setOffset(offset => 5 ? offset-5 : 0);
    }

    const nextBtnHandler = () =>{
        setOffset(offset+5)
    }


        return (
            <>
            {isError && <div>{isError.message}</div>}
            <div className={styles.buttonGroup}>
            <button onClick={prevBtnHandler}>Prev</button>
            <button onClick={nextBtnHandler}>Next</button>
            </div>
    
            {heroes ? <HeroesList heroes={heroes}/> : null}
            
            </>
        );
}

export default HeroesLoader;
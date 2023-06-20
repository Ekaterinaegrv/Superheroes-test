import React, { useState } from 'react';
import styles from './HeroesCard.module.css';
import { deleteHero } from '../../../api/api';
import UpdateHero from '../../UpdateHero/UpdateHero';
import CONSTANTS from '../../../constants';
import DetailedHeroCard from '../DetailedHeroCard/DetailedHeroCard';


function HeroesCard (props) {
    const {hero: {Images}, hero, hero: {id, nickname }} = props;
    const [showDetails, setShowDetails] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    
    const deleteHeroHandler = () => {
        deleteHero(id)
    }

    const updateHero = () => {
        setIsUpdate(!isUpdate);
    }

    const openDetails = () => {
        setShowDetails(!showDetails);
      };


    let filename;
    if(Images.length) {
        const path = Images[0].imagePath;
        const regex = /[^\\\/]+$/;
        const match = path.match(regex);
        filename = match[0];
    }


 
    const imageSrc = Images.length ? `${CONSTANTS.IMAGE_PATH}${filename}` : `${CONSTANTS.IMAGE_PATH}anonym.png`

    return (
        <>
        <div className={styles.card} style={showDetails ? { height: 'auto'} : null}>
                    <img src={imageSrc} alt='superhero'/> 
                    <h1>{nickname}</h1>
                    <button onClick={openDetails} className={styles.button}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
                    {showDetails && <DetailedHeroCard hero={hero} />}
                   { isUpdate && <UpdateHero hero={hero}/>}

                    <div className={styles.buttonsGroup}>
                        <button onClick={deleteHeroHandler}>Delete</button>
                        <button onClick={updateHero}>Edit</button> 
                    </div>

            </div>
                 
        </>

    )
}


export default HeroesCard
import React, { useState } from 'react';
import styles from './CreateHero.module.css'
import { createHero } from '../../api/api';
import FormHeroes from '../Heroes/FormHeroes/FormHeroes';


const initialValues = {
  nickname: '',
  realName: '',
  originDescription: '',
  cathPhrase: '',
  superpower: '',
  heroesImg: null
}

function CreateNewHero(props) {

  const submitHandler = (formData) => {
    createHero(formData);
  }
      
        return (
            <>
              <h2 className={styles.header}>Create new superhero here</h2>  
              <p className={styles.preheader}>Just fill out the form below</p>
              <FormHeroes submitHandler={submitHandler}/>
            </>
        );
}

export default CreateNewHero;


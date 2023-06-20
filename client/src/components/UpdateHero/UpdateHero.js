import React, { useState } from 'react';
import styles from './UpdateHero.module.css'
import { updateHero } from '../../api/api';

const initialValues = {
    nickname: '',
    realName: '',
    originDescription: '',
    cathPhrase: '',
    superpower: '',
  }

function UpdateHero(props) {

    const [formValues, setFormValues] = useState(initialValues);  
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

  
     const handleSubmit = (event) => {
        event.preventDefault();
        const heroId = props.hero.id;
        updateHero(formValues, heroId);
    };




        return (
            <>
         <form onSubmit={handleSubmit} className={styles.formWrapper}>

                        <input 
                            type="text" 
                            name="nickname" 
                            placeholder="Nickname"
                            onChange={handleChange}
                            value={formValues.nickname}
                            />

                        <input 
                            type="text" 
                            name="realName" 
                            placeholder="Real Name"
                            onChange={handleChange}
                            value={formValues.realName}
                            />
                        
                        <input 
                            type="text" 
                            name="originDescription" 
                            placeholder="Origin Description"
                            onChange={handleChange}
                            value={formValues.originDescription}
                            />


                    <input 
                            type="text" 
                            name="cathPhrase" 
                            placeholder="Catch Phrase"
                            onChange={handleChange}
                            value={formValues.cathPhrase}
                    />

                    <input 
                            type="text" 
                            name="superpower" 
                            placeholder="Add superpower"
                            onChange={handleChange}
                            value={formValues.superpower}
                    />


                    <input type='submit' value='SUBMIT' className={styles.submit}/>
                    
                </form>       
            
       
            </>
        );
}

export default UpdateHero;


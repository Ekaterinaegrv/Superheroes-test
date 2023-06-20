import React, { useState } from 'react';
import styles from './FormHeroes.module.css'
import { VALIDATION_SCHEMA } from '../../../schemas';

const initialValues = {
  nickname: '',
  realName: '',
  originDescription: '',
  cathPhrase: '',
  superpower: '',
  heroesImg: null
}

function FormHeroes(props) {

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState([]);

  const {submitHandler} = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormValues({
      ...formValues,
      heroesImg: file,
    });
  };

   const handleSubmit = (event) => {
    event.preventDefault();
    VALIDATION_SCHEMA
      .validate(formValues, { abortEarly: false })
      .then(() => {
        const formData = new FormData(event.target);
        submitHandler(formData);
    })
      .catch((error) => {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
      });
  };
 
      
        return (
            <>

                  <form onSubmit={handleSubmit} className={styles.formWrapper}>

                            <div className={styles.column}>
                              <label htmlFor="nickname">Hero nickname</label>
                              <input 
                                    type="text" 
                                    name="nickname" 
                                    placeholder="Superman"
                                    onChange={handleChange}
                                    value={formValues.nickname}
                                    />
                              {formErrors.nickname && <p>{formErrors.nickname}</p>}

                              <label htmlFor="realName">Hero real name</label>
                              <input 
                                    type="text" 
                                    name="realName" 
                                    placeholder="Clark Kent"
                                    onChange={handleChange}
                                    value={formValues.realName}
                                    />
                              {formErrors.realName && <p>{formErrors.realName}</p>}
                              
                              <label htmlFor="originDescription">Origin Description</label>
                              <input 
                                    type="text" 
                                    name="originDescription" 
                                    placeholder="Superman is a superhero who appears in American comic books published by DC Comics..."
                                    onChange={handleChange}
                                    value={formValues.originDescription}
                                    />
                              {formErrors.originDescription && <p>{formErrors.originDescription}</p>}

                            </div>

                            <div className={styles.column}>
                            <label htmlFor="cathPhrase">Catch Phrase</label>
                            <input 
                                    type="text" 
                                    name="cathPhrase" 
                                    placeholder="Truth, Justice and a Better Tomorrow"
                                    onChange={handleChange}
                                    value={formValues.cathPhrase}
                            />
                            {formErrors.cathPhrase && <p>{formErrors.cathPhrase}</p>}

                            <label htmlFor="superpower">Superpower</label>
                            <input 
                                    type="text" 
                                    name="superpower" 
                                    placeholder="Please add one superpower, for example: Speed"
                                    onChange={handleChange}
                                    value={formValues.superpower}
                            />
                            {formErrors.superpower && <p>{formErrors.superpower}</p>}

                            <input
                                    type="file"
                                    name="heroesImg"
                                    id="heroesImg"
                                    accept=".jpg, .png, .jpeg"
                                    className={styles.fileInput}
                                    onChange={handleFileChange}
                                />
                            {formErrors.heroesImg && <p>{formErrors.heroesImg}</p>}
        
                            <input type='submit' value='SUBMIT' className={styles.submit}/>
                            </div>
                        </form>            
            </>
        );
}

export default FormHeroes;

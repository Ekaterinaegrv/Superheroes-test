import CONSTANTS from '../constants';

export const createHero = (formData) => {
        const url = `${CONSTANTS.API_URL}api/heroes`;

        fetch(url, {
            method: "POST",
            body: formData          
        })
        .then((response) => response.json())
    }
 

export const getHeroes = (offset, limit=5) => {
    const url = `${CONSTANTS.API_URL}api/heroes?limit=${limit}&offset=${offset}`;
    return fetch(url)
        .then((response) => response.json())
}

export const deleteHero = (id) => {
    const url = `${CONSTANTS.API_URL}api/heroes/${id}`;
    return fetch(url, {
        method: 'DELETE',
       
    })
        .then((response) => response.json())
}

export const updateHero = (body, id) => {

    const url = `${CONSTANTS.API_URL}api/heroes/${id}`;
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body), 
        headers: {
            "Content-Type": "application/json",
          },
    })
        .then((response) => response.json())
}

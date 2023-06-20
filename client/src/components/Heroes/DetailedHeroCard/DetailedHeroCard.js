import React from 'react';


function DetailedHeroCard (props) {
    const {hero: {Superpowers}, hero: {originDescription, realName, cathPhrase}} = props;
    console.log(Superpowers)
    console.log(props.hero)
    return (
        <>
        <div>
            <h1>{realName}</h1>
            <h2>{cathPhrase}</h2>
            <p>{originDescription}</p>
            <p>Superpower: {Superpowers.length ? <span>{Superpowers[0].superpower}</span> :  <span>Not found</span>}</p>
        </div>
        </>

    )
}


export default DetailedHeroCard;
import styled from 'styled-components'; 

const BigContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

    font-family: 'Inconsolata', monospace;
    margin: 0 auto; 
    width: 100%; 
    background-color: white; 

    h1 {
        text-align: center;
        text-transform: uppercase;  
    }

    div {
        margin: 0 auto; 
        display: flex; 
        flex-direction: row; 
        flex-wrap: wrap; 
        width: 80%; 
        justify-content: center; 
        align-items: flex-end; 
    }

`

const CharacterContainer = styled.section`
    margin: 3% auto; 
    text-align: center; 
    width: 30%; 
    transition: transform .2s;
    border: 2px pink solid;

    &:hover {
        transform: scale(1.1); 
    }

    img {
        width: 100%; 
        height: 50vh; 
    }

`

export {CharacterContainer}
export {BigContainer}
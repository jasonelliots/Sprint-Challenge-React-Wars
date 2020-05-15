import styled from 'styled-components'; 
import img from './wave.png'; 

const BigContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

    font-family: 'Inconsolata', monospace;
    margin: 0 auto; 
    width: 100%; 

    section.title {
        height: 30vh; 
        background-repeat: no-repeat; 
        background-size: 100% 130%; 
        overflow: visible; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
    }

    h1 {
        text-align: center;
        text-transform: uppercase; 
        font-size: 2.5rem;  
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
    margin: 2% auto; 
    text-align: center; 
    width: 30%; 
    transition: transform .2s;
    border: 2px black solid;
    background-color: #efefef; 

    &:hover {
        transform: scale(1.1); 
        box-shadow: 10px 10px 28px 2px rgba(0,0,0,0.46);
    }

    img {
        width: 100%; 
        height: 50vh; 
    }

`

export {CharacterContainer}
export {BigContainer}
import React from 'react'
import meme from './meme.jpg'
import './App.css'

function Header(){
    return(
        <header>
            <h1 style={{paddingTop:'-12px%'}}> [BazSuman] - Presents MemeGenerator </h1>
            <img id="header_image" src={meme} alt="Banner" style={{marginTop:"-1.2%", position:"relative", width:"100vw"}}/>
        </header>
        )
}

export default Header

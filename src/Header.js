import React from 'react'
import meme from './meme.jpg'
import cfc from './cfc.png'
import './App.css'

function Header(){
    return(
        <header>
            <h1> [BazSuman] - Presents MemeGenerator </h1>
            <img id="header_image" src={meme} alt="Banner" style={{marginTop:"-1.2%", position:"relative", width:"100vw"}}/>
            <img id="header_image2" src={cfc} alt="Banner" style={{marginTop:"-1.2%", position:"relative", width:"100vw"}}/>
        </header>
        )
}

export default Header

import React from 'react'
import "../assets/styles/header.css"
export default function Header() {
  function search() {
    console.log('search')
  }
  return (
    <div >
      <div className='header'>
        <img src="https://i.ibb.co/9hZcX1Y/yt-logo.png" alt="logo" />
        <form >
          <input type="text" name="search" id="search" />
          <button onClick={search}><img src="https://i.ibb.co/WPnzgLt/icons8-chercher-50.png" alt="" /></button>
        </form>
        <button>Se Connecter</button>
      </div>

    </div>
  )
}

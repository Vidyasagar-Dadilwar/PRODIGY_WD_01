import React from 'react'

export default function About({darkMode }) {
  return (
    <div className={`other-component ${darkMode ? 'dark' : ''}`}>About</div>
  )
}

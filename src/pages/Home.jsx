import React from 'react'

export default function Home({darkMode}) {
  return (
    <div className={`other-component ${darkMode ? 'dark' : ''}`}>Home</div>
  )
}

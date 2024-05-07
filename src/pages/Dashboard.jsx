import React from 'react'

export default function Dashboard({darkMode}) {
  return (
    <div className={`other-component ${darkMode ? 'dark' : ''}`}>Dashboard</div>
  )
}

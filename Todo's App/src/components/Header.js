import React from 'react'

export default function Header() {
  return (
    <div>
      <h1 style = {hdrStyle}>Todo's App</h1>
    </div>
  )
}
const hdrStyle= {
    textAlign : 'center',
    padding : '10px',
    backgroundColor : '#333',
    color : 'orange',
    fontSize : '40px'
}

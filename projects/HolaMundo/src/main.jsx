/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Button = ({text}) =>{
  return (
    <button>{text}</button> 
  )
}

root.render(
  <React.Fragment>
    <Button text="Button 1"/>
    <Button text="Button 2"/>
    <Button text="Button 3"/>
  </React.Fragment>
)

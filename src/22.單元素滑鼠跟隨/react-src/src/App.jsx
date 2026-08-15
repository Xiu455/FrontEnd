import { useState } from 'react'

import './App.scss'

export default function App(){
  return(<>
  <div className="card-box">
    <div className="card" data-props-for="pointer-local"></div>
    <div className="card" data-props-for="pointer-local"></div>
    <div className="card" data-props-for="pointer-local"></div>
    <div className="card" data-props-for="pointer-local"></div>
  </div>
  </>)
}
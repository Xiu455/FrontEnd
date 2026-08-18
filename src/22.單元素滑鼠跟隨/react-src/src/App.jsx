import { useState } from 'react'

import './App.scss'

export default function App(){
  return(<>
  <div className="card-box use-before">
    <div className="card" data-props-for="pointer-local"></div>
    <div className="card" data-props-for="pointer-local"></div>
    <div className="card" data-props-for="pointer-local"></div>
    <div className="card" data-props-for="pointer-local"></div>
  </div>

    <div className="card-box use-bg">
      <div className="card" data-props-for="pointer-local"></div>
      <div className="card" data-props-for="pointer-local"></div>
      <div className="card" data-props-for="pointer-local"></div>
      <div className="card" data-props-for="pointer-local"></div>
    </div>
  </>)
}
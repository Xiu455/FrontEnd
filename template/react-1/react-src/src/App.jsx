import { useState } from 'react'

import reactLogo from '@pub/image/default/react.svg'
import viteLogo from '@pub/image/default/vite.svg'
import heroImg from '@pub/image/default/hero.png'

import './App.scss'

export default function App(){
  const [ count, setCount ] = useState(0);

  return (<>
    <div id="center">
      <div className="hero">
        <img className="base"       src={heroImg} />
        <img className="framework"  src={reactLogo} alt="React logo" />
        <img className="vite"       src={viteLogo}  alt="Vite logo" />
      </div>

      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
        </p>
      </div>

      <button type="button" className="btn-s1"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </div>
  </>)
}
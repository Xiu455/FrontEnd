import { useState } from 'react'

import clsx from 'clsx'

import './App.scss'

export default function App(){
  const OPTCodeLen = 6;

  const [ OPTvalue, setOPT ] = useState('');
  const [ isFocus, setFocus ] = useState(false);

  const showArr = Array(OPTCodeLen).fill(null);

  const onChange = (e) => {
    const v = e.target.value;
    const len = [...v].length;

    if(len > 6) return ;

    // 僅含數字
    if (/^\d+$/.test(v) || v === '') {
      setOPT(v);
    }
  }

  return (
    <label className='OPT-input-box' htmlFor='OPT-input'> 
      {showArr.map((item, i) => {
        let len = [...OPTvalue].length;
        len = (len < OPTCodeLen - 1)? len : OPTCodeLen - 1;

        return(<div 
          key={i} 
          className={clsx(
            'OPT-show-item',
            isFocus && i === len && 'OPT-show-item-focus'
          )}
        >
          {OPTvalue[i]}
        </div>)
      })}

      <input id="OPT-input" type="text"
        value={OPTvalue}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </label>
  )
}
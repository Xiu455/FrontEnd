import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import './App.scss'

const PAGES_ROOT = `https://xiu455.github.io/FrontEnd`;

/**
 * @param {string} name 
 * @returns 
 */
const extractNumber = (name) => {
  const match = name.match(/^(\d+)\./);
  return match ? Number(match[1]) : Infinity;
};

const CardCover = (props) => {
  const {
    src,
    ...rest
  } = props;

  const [imgSrc, setSrc] = useState(src);

  if(!imgSrc) return;

  return <div className="card-cover">
    <img src={imgSrc} {...rest} onError={() => setSrc(null)}/>
  </div>
}

const fetchData = async () => {
  const res = await(await fetch(`https://api.github.com/repos/Xiu455/FrontEnd/contents/src`)).json();
  const dirData = res.sort((a, b) => extractNumber(a.name) - extractNumber(b.name));

  // console.log(dirData);

  return dirData;
}

const Card = ({ data }) => {
  // console.log(data);
  const { name, path } = data;

  return <a className='card' data-props-for="pointer-local" href={`${PAGES_ROOT}/${path}`} target="_blank">
    <div className="bg" />
    <CardCover src={`${PAGES_ROOT}/${path}/cover.png`} />
    <div className='name'><span>{name}</span></div>
  </a>
}

export default function App(){
  const { data: datas, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
  });

  if(isLoading){ return <div>Loading...</div>}

  return (<div id="center">
    <div className="card-box">
      {datas.map((data) => {
        return(<Card key={data.name} data={data} />)
      })}
    </div>

  </div>)
}
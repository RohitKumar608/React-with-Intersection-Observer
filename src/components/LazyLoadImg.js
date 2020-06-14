import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LazyLoad.css'
import Image from './Image'
import useIO from './UseIo'
import fallbackImage from './../logo.svg'

function LazyLoadImg() {
  const [data, setData] = useState([])

  const [observer, setElements, entries] = useIO({
    threshold: 0,
    rootMargin: '10px',
    root: null
  })

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
      setData(res.data.slice(0, 100));
    }).catch(err => {
      console.error(err)
    })
  }, [])

  useEffect(() => {
    if (data.length) {
      let img = Array.from(document.getElementsByClassName('lazy'));
      setElements(img)
    }
  }, [data, setElements])

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    })
  }, [entries, observer])

  const images = data.map(item => (
    <div className="child">
    <Image
      key={item.id}
      src={item.thumbnailUrl}
      fallbackSrc={fallbackImage}
      isLazy
      style={{
        height: '100%',
        width: '100%'
      }}
      alt='thumbnails'
    />
    </div>
  ))
  return (
    <div className="parent">
      {images}
    </div>
  );
}

export default LazyLoadImg;
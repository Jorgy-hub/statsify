import React, { useState } from 'react';

export default function Loader() {
  let i = Math.floor(Math.random() * 7) + 1;
  const [loaded, setLoad] = useState(false);
  React.useEffect(() => {
    window.setTimeout(() => {
      if (!loaded) {
        document.getElementById('loader').innerHTML = '';
        setLoad(true);
      }
    }, 2000);
  }, []);
  
  return (
    <div id="loader">
      <div className="loader" id="loader">
        <div className="loader-inner">
          <div className="loader-line-wrap">
            <div className={`loader-line-${i}`}></div>
          </div>
          <div className="loader-line-wrap">
            <div className={`loader-line-${i}`}></div>
          </div>
          <div className="loader-line-wrap">
            <div className={`loader-line-${i}`}></div>
          </div>
          <div className="loader-line-wrap">
            <div className={`loader-line-${i}`}></div>
          </div>
          <div className="loader-line-wrap">
            <div className={`loader-line-${i}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
const i = Math.floor(Math.random() * 7) + 1;

/**
 * In this component we return a random Loader animation each time it reloads
 * @returns { JSX }
 */
export default function Loader() {
  /** Global Variables for the style */
  const [loaded, setLoad] = useState(false);
  const [style, setStyle] = useState(null);
  
  /** Setting the global Variables */
  React.useEffect(() => {
    setStyle(i);
  }, []);

  /** We delete the Loader */
  React.useEffect(() => {
    window.setTimeout(() => {
      if (!loaded) {
        document.getElementById('loader').innerHTML = '';
        setLoad(true);
      }
    }, 1000);
  }, [loaded]);
  
  return (
    <div id="loader">
      <div className="loader" id="loader">
        <div className="loader-inner">
          <div className="loader-line-wrap">
            <div className={`loader-line-${style}`}></div>
          </div>
          <div className="loader-line-wrap">
            <div className={`loader-line-${style}`}></div>
          </div>
          <div className="loader-line-wrap">
            <div className={`loader-line-${style}`}></div>
          </div>
          <div className="loader-line-wrap">
            <div className={`loader-line-${style}`}></div>
          </div>
          <div className="loader-line-wrap">
            <div className={`loader-line-${style}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

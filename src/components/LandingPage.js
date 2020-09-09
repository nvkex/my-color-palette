import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';



export default function LandingPage() {
  const serverURL = 'https://my-color-palette.herokuapp.com/default';

  const [defaultPalettes, setDefaultPaletes] = useState([]);

  useEffect(() => {
    axios.get(serverURL)
      .then(res => {
        setDefaultPaletes(res.data);
      })
      .catch(e => { console.log(e) });
  }, [])

  return (
    <div>
      <Navbar />

      <div className="main-grid">

        {
          defaultPalettes.length === 0 ?
            (
              <div className="cssload-container">
                <div className="cssload-circle-1">
                  <div className="cssload-circle-2">
                    <div className="cssload-circle-3">
                      <div className="cssload-circle-4">
                        <div className="cssload-circle-5">
                          <div className="cssload-circle-6">
                            <div className="cssload-circle-7">
                              <div className="cssload-circle-8">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) :
            defaultPalettes.map((palette, i) => (
              <a key={i} className="pallete-card shadow" href="/">
                <div className="pallete-sm">
                  {palette.colors.map((color, index) => (
                    <div key={index} className="pallete-sm-item" style={{ backgroundColor: color }} ></div>
                  ))}
                </div>
                <span className="pallete-desc">{palette.name}</span>
              </a>
            ))
        }

      </div>
    </div>
  );
}

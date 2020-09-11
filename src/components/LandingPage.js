import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listDefaultPalettes } from '../actions/defPaletteActions';
import { Link } from 'react-router-dom';



export default function LandingPage(props) {
  const defaultPalettes = useSelector(state => state.defaultPalettes);

  const { defaultPalettesList, loading } = defaultPalettes;

  const dispatch = useDispatch();

  
  useEffect(() => {
    if (defaultPalettesList.length === 0)
      dispatch(listDefaultPalettes());
    return () => {
    }
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [0]);

  return (
    <div>

      <div className="main-grid">

        {
          loading ?
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
            defaultPalettesList.map((palette, i) => (
              <Link key={i} className="pallete-card shadow" to={`/palette/${palette.id}`}>
                <div className="pallete-sm">
                  {palette.colors.map((color, index) => (
                    <div key={index} className="pallete-sm-item" style={{ backgroundColor: color }} ></div>
                  ))}
                </div>
                <span className="pallete-desc">{palette.name}</span>
              </Link>
            ))
        }

      </div>

      <Link to="/login">Login</Link>
    </div>
  );
}

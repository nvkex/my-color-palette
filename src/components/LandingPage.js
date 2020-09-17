import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listDefaultPalettes } from '../actions/defPaletteActions';
import { Link } from 'react-router-dom';


/**
 * Loads the predefined palettes and navigation panel
 */
export default function LandingPage(props) {

  // SVG constants
  const exploreSVG = (<svg width="1em" height="1.0625em" viewBox="0 0 16 17" className="bi bi-compass" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
    <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
  </svg>);
  const plusSVG = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>);

  const auth = useSelector(state => state.authReducer);
  const { token } = auth;

  const defaultPalettes = useSelector(state => state.defaultPalettes);
  const { defaultPalettesList, loading } = defaultPalettes;

  const dispatch = useDispatch();


  useEffect(() => {
    if (!defaultPalettesList || defaultPalettesList.length === 0)
      dispatch(listDefaultPalettes());
    return () => {
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [0]);

  return (
    <div>

      <div className="bottom-panel">

        {
          token ? (
            <div className="btn-groups shadow-lg">
              <Link to="/new-palette"><button>{plusSVG} New Palette</button></Link>
              <Link to="/my-palette"><button>My Palette</button></Link>
              <Link to="/dashboard"><button>Dashboard</button></Link>
              <Link to="/explore"><button>{exploreSVG} Explore</button></Link>
              <Link to="/logout"><button>Logout</button></Link>
            </div>
          ) : (
              <div className="btn-groups shadow-lg">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Register</button></Link>
              </div>
            )
        }

      </div>

      <div className="main-grid">

        {
          loading || !defaultPalettesList ?
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



    </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default function Dashboard() {

  const auth = useSelector(state => state.authReducer);
  const { token, user } = auth;
  console.log(user)

  // If user is not logged in, redirect to login page
  if (!token || !user) {
    return <Redirect to="/login" />
  }

  return (
    <div className="dashboard">

      <div className="profile-section shadow">
        <img src="./static/default_profile.png" alt="profile_picture" />
        <div>
          <span>{user.name}</span>
        </div>
        <div>
          <span>{user.email}</span>
        </div>
      </div>

      <div className="user-palette-detail shadow">

        <div>
          <div className="text-center heading">Custom Palettes</div>
          <hr />
          <p>
            Total Palettes
          </p>
          <p className="text-muted">
            {user.palettes.length}
          </p>

          <Link to="/my-palettes">
            <button>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eyeglasses" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
              </svg>
              &nbsp; View all
            </button>
          </Link>
          <br />
          <Link to="/new-palette">
            <button>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              &nbsp; New Palette
            </button>
          </Link>

        </div>

        <div>
          <div className="text-center heading">Favorite Palettes</div>
          <hr />
          <p>
            Total Palettes
          </p>
          <p className="text-muted">
            0
          </p>

          <Link to="/favorites">
            <button>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eyeglasses" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
              </svg>
              &nbsp; View all
            </button>
          </Link>
          <br />
          <Link to="/explore">
            <button>
              <svg width="1em" height="1.0625em" viewBox="0 0 16 17" className="bi bi-compass" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
              </svg>
              &nbsp; Explore Palettes
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

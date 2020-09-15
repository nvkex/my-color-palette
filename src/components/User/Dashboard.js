import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {

  const auth = useSelector(state => state.authReducer);
  const { token, user } = auth;
  console.log(token, user);
  return (
    <div className="dashboard">

      <div className="profile-section shadow">
        <img src="./static/default_profile.png" alt="profile_picture" />
        <div>
          <span>John Doe</span>
        </div>
        <div>
          <span>johndoe@xyz.com</span>
        </div>
      </div>

      <div className="user-palette-detail shadow">

        <div>
          <div className="text-center heading">Custom Palettes</div>
          <hr />
          <p>
            <span className="">Count</span> : <span> 4 </span>
          </p>

          <button>View all</button>

        </div>

        <div>
          <div className="text-center heading">Favorite Palettes</div>
          <hr />
          <p>
            <span className="">Count</span> : <span> 3 </span>
          </p>

          <button>View all</button>

        </div>

      </div>

    </div>
  );
}

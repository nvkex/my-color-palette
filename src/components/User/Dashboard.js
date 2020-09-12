import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {

  const auth = useSelector(state => state.authReducer);
  const { token, user } = auth;
  console.log(token, user);
  return (
    <div>
        Dashboard
    </div>
  );
}

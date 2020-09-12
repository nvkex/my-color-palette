import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { logoutUser } from '../../actions/AuthActions';

export default function Logout() {

    const auth = useSelector(state => state.authReducer);
    const { token } = auth;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutUser());
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        return () => {
        };
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <div>
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
            {
                token ? null : <Redirect to="/" />
            }
        </div>
    );
}

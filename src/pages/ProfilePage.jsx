import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LiaPowerOffSolid } from 'react-icons/lia';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function ProfilePage() {
  const {
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/login');
  };

  return (
    <section className="profile-page">
      <div className="profile-page__card">
        <img src={authUser.avatar} alt="" className="profile-page__avatar" />
        <div className="profile-page__account">
          <p className="profile-page__name">{authUser.name}</p>
          <p className="profile-page__email">{authUser.email}</p>
        </div>
      </div>
      <button className="btn-logout" onClick={onLogout} type="button">Logout <LiaPowerOffSolid /></button>
    </section>
  );
}

export default ProfilePage;

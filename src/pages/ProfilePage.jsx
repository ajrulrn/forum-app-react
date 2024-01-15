import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LiaPowerOffSolid } from 'react-icons/lia';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import Section from '../components/styled/Section';
import Button from '../components/styled/Button';
import Card from '../components/styled/Card';

function ProfilePage() {
  const authUser = useSelector((states) => states.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/login');
  };

  return (
    <Section>
      <Card display="flex">
        <img src={authUser.avatar} alt="" className="profile-page__avatar" />
        <div className="profile-page__account">
          <p className="profile-page__name">{authUser.name}</p>
          <p className="profile-page__email">{authUser.email}</p>
        </div>

      </Card>
      {/* <div className="profile-page__card">
      </div> */}
      <Button onClick={onLogout} type="button">Logout <LiaPowerOffSolid /></Button>
    </Section>
  );
}

export default ProfilePage;

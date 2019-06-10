import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fas fa-notes-medical text-info mr-1" />
        Book an appoitment
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-prescription-bottle-alt   text-info mr-1" />
        Order prescriptions
      </Link>
    </div>
  );
};

export default ProfileActions;

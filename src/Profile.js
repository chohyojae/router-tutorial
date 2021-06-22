import React from 'react';

const data = {
  hjcho: {
    name: 'hjcho',
    description: 'a developer who is lagging behind.',
  },
  gildong: {
    name: 'gdhong',
    description: 'flashing in east, flashing in west.',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>The user requested is not exist.</div>;
  } else {
    return (
      <div>
        <h3>
          {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
      </div>
    );
  }
};

export default Profile;

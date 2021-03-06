import React from 'react';
import UserFilter from '../../components/UserFilter/UserFilter';
import AlbumList from '../../components/AlbumList/AlbumList';

const Home = () => {
  return (
    <React.Fragment>
      <div className="mainContent">
        <AlbumList />
        <UserFilter />
      </div>
    </React.Fragment>
  );
};

export default Home;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Album from '../Album/Album';
import { userFilter } from '../../pipes/userFilter';

class AlbumList extends Component {
  render() {
    let albums = this.props.albums;
    return (
      <section className="albumList">
        {albums.map((album) => {
          return <Album key={album.id} album={album} />;
        })}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const users = state.userFilter;
  const filterByUserArr = userFilter(state.albums, users);
  return { albums: filterByUserArr };
};

export default connect(mapStateToProps, null)(AlbumList);

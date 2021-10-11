import React from 'react';
import { connect } from 'react-redux';
import AlbumDetailComponent from '../../components/AlbumDetail/AlbumDetail';
import PhotoSlider from '../../components/PhotoSlider/PhotoSlider';
import { countPhoto } from '../../actions';

const AlbumDetail = (props) => {
  const { dispatch, album } = props;
  dispatch(countPhoto(album.photos.length));
  return (
    <section className="albumDetail">
      <h1>{props.album.title}</h1>
      <PhotoSlider images={album.photos} />
      <AlbumDetailComponent images={album.photos} />
    </section>
  );
};

const mapStateToProps = (state, props) => {
  const album = state.albums.find(
    (album) => album.id === +props.match.params.id
  );
  return {
    album,
  };
};

export default connect(mapStateToProps, null)(AlbumDetail);

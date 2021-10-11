import React from 'react';
import { connect } from 'react-redux';
import { currentPhoto } from '../../actions';

const AlbumDetail = (props) => {
  const { dispatch, images } = props;
  const changeImage = (i) => {
    dispatch(currentPhoto(i));
  };
  return (
    <section className="thumbnailList">
      {images.map((img, i) => (
        <img
          src={img.url}
          key={i}
          onClick={() => {
            changeImage(i);
          }}
        />
      ))}
    </section>
  );
};

export default connect()(AlbumDetail);

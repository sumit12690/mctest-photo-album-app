import React, { useState } from 'react';
import { connect } from 'react-redux';
import { nextPhoto, prevPhoto } from '../../actions';

const PhotoSlider = (props) => {
  const { dispatch, images, currentPhoto } = props;
  const imageRef = React.createRef();
  const [img, setImg] = useState(images[currentPhoto].url);
  const prevImage = () => {
    dispatch(prevPhoto());
    setImg(images[currentPhoto].url);
  };
  const nextImage = () => {
    dispatch(nextPhoto());
    setImg(images[currentPhoto].url);
  };

  return (
    <article className="sliderWraper">
      <figure>
        <img ref={imageRef} src={images[currentPhoto].url} />
        <figcaption>{images[currentPhoto].title}</figcaption>
      </figure>
      <div
        className="prev"
        onClick={() => {
          prevImage();
        }}
      >
        Previous
      </div>
      <div
        className="next"
        onClick={() => {
          nextImage();
        }}
      >
        Next
      </div>
    </article>
  );
};

const mapStateToProps = (state) => {
  const currentPhoto = state.slide.currentPhoto;
  return {
    ...state,
    currentPhoto,
  };
};

export default connect(mapStateToProps, null)(PhotoSlider);

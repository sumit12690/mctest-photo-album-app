import React, { useState } from 'react';
import { connect } from 'react-redux';
import { nextPhoto, prevPhoto } from '../../actions';

const PhotoSlider = (props) => {
  const { dispatch, images, currentPhoto } = props;
  const prevImage = () => {
    dispatch(prevPhoto());
  };
  const nextImage = () => {
    dispatch(nextPhoto());
  };
  const imageRef = React.createRef();
  const [img] = useState(images[currentPhoto].url);

  return (
    <article className="sliderWraper">
      <figure>
        <img
          ref={imageRef}
          src={img}
          style={{ width: '100%', height: '100%' }}
        />
        <figcaption>{images[currentPhoto].title}</figcaption>
      </figure>
      <div
        class="prev"
        onClick={() => {
          prevImage();
        }}
      >
        Previous
      </div>
      <div
        class="next"
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
  const slideState = state.slide;
  return slideState;
};

export default connect(mapStateToProps, null)(PhotoSlider);

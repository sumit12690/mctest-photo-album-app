import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Album = (props) => {
  const { title, id, email, owner, website, thumb } = props.album;
  const imageRef = React.createRef();
  const [img, setImg] = useState(thumb);

  return (
    <section class="album">
      <Link to={`/album/${id}`} className="album__link">
        <img src={img} alt={title} ref={imageRef} />
      </Link>
      <div className="detail">
        <h2>
          <Link to={`/album/${id}`}>{title}</Link>
        </h2>
        <ul>
          <li>Owner: {owner}</li>
          <li>Email: {email}</li>
          <li>Website: {website}</li>
        </ul>
        <Link to={`/album/${id}`}>
          <button className="view">View Album</button>
        </Link>
      </div>
    </section>
  );
};

export default connect()(Album);

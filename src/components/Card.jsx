import React from 'react';

const Card = ({ img, children, style }) => {
  return (
    <div className="card" style={{ width: '18rem', ...style }}>
      {img && <img src={img} className="card-img-top" alt="Card cap" />}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;

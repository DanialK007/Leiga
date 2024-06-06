// CustomArrow.js
import React from 'react';

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '-50px',
        right: '0vw',
        zIndex: 1,
        width: '60px',
        height: '60px',
        color: '#000',
        background: 'rgb(238 242 255)',
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '-50px',
        left: '83vw',
        zIndex: 1,
        width: '60px',
        height: '60px',
        color: '#000',
        background: 'rgb(238 242 255)',
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

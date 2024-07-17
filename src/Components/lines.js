import React from 'react';
import '../Styles/lines.css';

const line1 = () => {
  return (
    <div className="vertical-lines-container1">
      <div className="vertical-line"></div>
      <div className="vertical-line"></div>
      <div className="vertical-line"></div>
    </div>
  );
};

const line2 = () => {
    return (
      <div className="vertical-lines-container2">
        <div className="vertical-line"></div>
        <div className="vertical-line"></div>
        <div className="vertical-line"></div>
      </div>
    );
  };
  const line3 = () => {
      return (
        <div className="vertical-lines-container3">
          <div className="vertical-line"></div>
          <div className="vertical-line"></div>
          <div className="vertical-line"></div>
        </div>
      );
    };
export {line1, line2, line3};
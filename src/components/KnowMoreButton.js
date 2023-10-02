import React from 'react';
import PropTypes from 'prop-types';
import './KnowMoreButton.css'; // Import your CSS file for styling

const KnowMoreButton = ({ text, onClick }) => {
  return (
    <button className="know-more-button" onClick={onClick}>
      {text}
    </button>
  );
};

KnowMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default KnowMoreButton;

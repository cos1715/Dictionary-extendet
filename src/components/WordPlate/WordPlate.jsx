import React from 'react';
import PropTypes from 'prop-types';

import "./WordPlate.css";

const WordPlate = props => {
  const { element } = props;

  return (
    <div className="word-main">
      <p>word: {element.eng}</p>
      <p>translation: {element.ukr}</p>
      <p>definition: {element.definition}</p>
    </div>
  );
};

WordPlate.propTypes = {
  element: PropTypes.object
};

export default WordPlate;

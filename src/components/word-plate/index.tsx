import React from 'react';
import { IWord } from '../../models';

import './index.scss';

interface IProps {
  word: IWord;
}

export const WordPlate: React.FC<IProps> = ({ word }) => {
  return (
    <div className="word-main">
      <p>word: {word.eng}</p>
      <p>translation: {word.ukr}</p>
      <p>definition: {word.definition}</p>
    </div>
  );
};

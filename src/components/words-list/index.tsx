import React, { Component, useState } from 'react';
import { toast } from 'react-toastify';
// import Zoom from 'react-reveal/Zoom';
import { animateScroll as scroll } from 'react-scroll';
import { CONST } from '../../const';
import { IWord } from '../../models';
import { WordPlate } from '..';

import './index.scss';

interface IProps {
  leftToLearn: IWord[];
  setLearnedNewWord: (word: IWord) => void;
  updateLeftToLearn: () => void;
}

const getWordsToLearn = (words: IWord[]) => {
  const wordsToDisplay =
    words.length > CONST.maxWordsToDisplay
      ? CONST.maxWordsToDisplay
      : words.length;
  return words.slice(0, wordsToDisplay);
};

export const WordsList: React.FC<IProps> = ({
  leftToLearn,
  setLearnedNewWord,
  updateLeftToLearn
}: IProps) => {
  const wordsToLearn = getWordsToLearn(leftToLearn);

  const nextWords = () => {
    updateLeftToLearn();
    scroll.scrollToTop();
  };

  const markAsLearned = (word: IWord) => () => {
    toast.info('Added to vocabulary');
    setLearnedNewWord(word);
  };

  const renderWords = (wordsToLearn: IWord[]) => {
    return wordsToLearn.map(word => (
      <button
        key={`word-list-${word.eng}`}
        className="word-plate pointer zoom"
        onClick={markAsLearned(word)}
      >
        <WordPlate word={word} />
      </button>
    ));
  };

  return (
    <div>
      <div className="div-words-plate">{renderWords(wordsToLearn)}</div>
      <div className="div-words-btn">
        <button className="btn-mark btn-next-words pointer" onClick={nextWords}>
          Next Words
        </button>
      </div>
    </div>
  );
};

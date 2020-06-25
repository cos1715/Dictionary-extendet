import React, { Component, useState } from 'react';
import { toast } from 'react-toastify';
// import Zoom from 'react-reveal/Zoom';
import { animateScroll as scroll } from 'react-scroll';
import { CONST } from '../../const';
import { IWord } from '../../models';
import { WordPlate } from '..';

import './index.scss';

interface IProps {
  learned: IWord[];
  leftToLearn: IWord[];
  setLearnedNewWord: (word: IWord) => void;
}

interface IState {
  wordsToLearn: IWord[];
}

const getWordsToLearn = (words: IWord[]) => {
  const wordsToDisplay =
    words.length > CONST.maxWordsToDisplay
      ? CONST.maxWordsToDisplay
      : words.length;
  return words.slice(0, wordsToDisplay);
};

const nextWords = () => {
  scroll.scrollToTop();
};

export const WordsList: React.FC<IProps> = ({
  learned,
  leftToLearn,
  setLearnedNewWord
}: IProps) => {
  const wordsToLearn = getWordsToLearn(leftToLearn);

  const markAsLearned = (word: IWord) => () => {
    toast.info('Added to vocabulary');
    setLearnedNewWord(word);
  };

  const renderWords = (wordsToLearn: IWord[]) => {
    return wordsToLearn.map(word => (
      // <Zoom key={`word-list-${word.eng}`}>
      <button className="word-plate pointer" onClick={markAsLearned(word)}>
        <WordPlate word={word} />
      </button>
      // </Zoom>
    ));
  };

  return (
    <div>
      <div className="div-words-plate">{renderWords(wordsToLearn)}</div>
      <div className="div-words-btn">
        <button className="btn-mark btn-next-words" onClick={nextWords}>
          Next Words
        </button>
      </div>
    </div>
  );
};

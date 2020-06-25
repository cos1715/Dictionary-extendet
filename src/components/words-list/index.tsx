import React, { Component, useState } from 'react';
import { toast } from 'react-toastify';
// import Zoom from 'react-reveal/Zoom';
import { animateScroll as scroll } from 'react-scroll';
import { IWord } from '../../assets/words';

import WordPlate from '../WordPlate';

import './index.scss';
import { CONST } from '../../const';

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
  const [state, setState] = useState<IState>({
    wordsToLearn: getWordsToLearn(leftToLearn)
  });

  const markAsLearned = (word: IWord) => () => {
    toast.info('Added to vocabulary');
    setLearnedNewWord(word);
  };

  const renderWords = (wordsToLearn: IWord[]) => {
    return wordsToLearn.map(word => (
      // <Zoom key={`word-list-${word.eng}`}>
      <button className="word-plate pointer" onClick={markAsLearned(word)}>
        <WordPlate element={word} />
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

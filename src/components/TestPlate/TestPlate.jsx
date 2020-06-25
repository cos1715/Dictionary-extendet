import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import Zoom from 'react-reveal/Zoom';

import "./TestPlate.css";

class TestPlate extends Component {
  checkTest = ({ key, target }, word) => {
    const points = 100;
    const lifePenalty = 1;

    if (key === 'Enter' && target.value) {
      const { tests, correctAnswer, wrongAnswer } = this.props;

      if (target.value.trim().toLowerCase() === word.ukr) {
        const score = tests.score + points;

        target.value = '';
        toast.success('Correct');
        correctAnswer(score);
      } else {
        const lives = tests.lives - lifePenalty;

        target.value = '';
        toast.error('Wrong!');
        wrongAnswer(lives);
      }
    }
  }

  renderPlate = () => {
    const { word, tests, startAgain } = this.props;
    const minLives = 0;

    if (tests.lives === minLives) {
      return (
        <div className="test-plate test-sumup">
          <div className="test-sumup-info">
            <p>your score</p>
            <p>{tests.score}</p>
          </div>
          <button className="test-btn" onClick={startAgain}>start again</button>
        </div>
      );
    } else {
      return (
        <div className="test-plate">
          <div className="test-info">
            <p className="test-score">score: {tests.score}</p>
            <p className="test-lives">lives: {tests.lives}</p>
          </div>
          <p className="test-task">Entrer correct translation</p>
          <div className="test-desc">
            <p>{word.eng}</p>
            <div>
              <input type="text" className="test-input" onKeyUp={(event) => this.checkTest(event, word)} />
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    const { progress } = this.props;
    const minAmountOfWords = 10;

    if (progress.learned.length < minAmountOfWords)
      return (
        <div className="notify-msg">
          <h1>Learn at least {minAmountOfWords} words</h1>
          <h2>{minAmountOfWords - progress.learned.length} words left to learn</h2>
        </div>
      );
    else {
      return (
        <Zoom>
          {this.renderPlate()}
        </Zoom>
      );
    }
  }
};

TestPlate.propTypes = {
  word: PropTypes.object,
  progress: PropTypes.object,
  tests: PropTypes.object,
  correctAnswer: PropTypes.func,
  wrongAnswer: PropTypes.func,
  startAgain: PropTypes.func
};

export default TestPlate;

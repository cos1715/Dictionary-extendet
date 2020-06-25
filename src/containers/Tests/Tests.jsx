import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import { ToastContainer } from "react-toastify";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import TestPlate from "../../components/TestPlate";
import { correctAnswer, wrongAnswer, startAgain } from "../../actions/actionTest";

import "./Tests.css";

class Tests extends Component {
  getWord = (learnedWords) => {
    const index = Math.floor(Math.random() * learnedWords.length);
    return learnedWords[index];
  }

  render() {
    const {
      progress,
      tests,
      correctAnswer,
      wrongAnswer,
      startAgain
    } = this.props;
    const autoClose = 2500;
    const rtl = false;

    return (
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <SideBar />
          <main className="app-main">
            <TestPlate
              word={this.getWord(progress.learned)}
              progress={progress}
              tests={tests}
              correctAnswer={correctAnswer}
              wrongAnswer={wrongAnswer}
              startAgain={startAgain}
            />
          </main>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={autoClose}
          hideProgressBar
          closeOnClick
          rtl={rtl}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    progress: state.progress,
    tests: state.tests
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      correctAnswer: correctAnswer,
      wrongAnswer: wrongAnswer,
      startAgain: startAgain
    },
    dispatch
  );
};

Tests.propTypes = {
  progress: PropTypes.object,
  tests: PropTypes.object,
  correctAnswer: PropTypes.func,
  wrongAnswer: PropTypes.func,
  startAgain: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests);

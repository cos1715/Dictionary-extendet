import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { ToastContainer } from 'react-toastify';
import { IInitialStore } from '../../store';
import Header from '../../components/Header';
import SideBar from '../../components/Sidebar';
import WordsList from '../../components/WordsList';
import { learnedNewWord } from '../../actions/actionProgress';

import './index.scss';

interface IStateProps {
  progress: any;
}

interface IDispatchProps {
  setLearnedNewWord: () => void;
}

type IProps = IStateProps & IDispatchProps;

const HomeContainerInternal: React.FC<IProps> = ({
  progress,
  setLearnedNewWord
}) => {
  const autoClose = 2500;
  const rtl = false;

  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <SideBar />
        <main className="app-main">
          {/* <WordsList progress={progress} learnedNewWord={setLearnedNewWord} /> */}
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={autoClose}
        hideProgressBar
        closeOnClick
        rtl={rtl}
        draggable={true}
        pauseOnHover={true}
      />
    </div>
  );
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       learnedNewWord: learnedNewWord
//     },
//     dispatch
//   );
// };

const mapStateToProps = (store: IInitialStore): IStateProps => ({
  progress: store.progress
});

const mapDispatchToProps: IDispatchProps = {
  setLearnedNewWord: learnedNewWord
};

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainerInternal);

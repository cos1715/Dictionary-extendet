import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { IInitialStore } from '../../store';
import WordsList from '../../components/WordsList';
import { learnedNewWord } from '../../actions/action-progress';
import { LayoutMain } from '../../layout';

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
  return (
    <LayoutMain>
      {/* <WordsList progress={progress} learnedNewWord={setLearnedNewWord} /> */}
    </LayoutMain>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { IWord } from '../../models';
import { IInitialStore } from '../../store';
import {
  learnedNewWord,
  updateLeftToLearn
} from '../../actions/action-progress';
import { LayoutMain } from '../../layout';
import { CongratsMsg, WordsList } from '../../components';

interface IStateProps {
  leftToLearn: IWord[];
}

interface IDispatchProps {
  setLearnedNewWord: (word: IWord) => void;
  updateLeftToLearn: () => void;
}

type IProps = IStateProps & IDispatchProps;

const HomeContainerInternal: React.FC<IProps> = ({
  leftToLearn,
  setLearnedNewWord,
  updateLeftToLearn
}: IProps) => {
  return (
    <LayoutMain>
      {leftToLearn.length ? (
        <WordsList
          leftToLearn={leftToLearn}
          setLearnedNewWord={setLearnedNewWord}
          updateLeftToLearn={updateLeftToLearn}
        />
      ) : (
        <CongratsMsg />
      )}
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
  leftToLearn: store.progress.leftToLearn
});

const mapDispatchToProps: IDispatchProps = {
  setLearnedNewWord: learnedNewWord,
  updateLeftToLearn
};

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainerInternal);

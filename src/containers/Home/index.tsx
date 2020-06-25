import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { IWord } from '../../models';
import { IInitialStore } from '../../store';
import { learnedNewWord } from '../../actions/action-progress';
import { LayoutMain } from '../../layout';
import { CongratsMsg, WordsList } from '../../components';

interface IStateProps {
  learned: IWord[];
  leftToLearn: IWord[];
}

interface IDispatchProps {
  setLearnedNewWord: (word: IWord) => void;
}

type IProps = IStateProps & IDispatchProps;

const HomeContainerInternal: React.FC<IProps> = ({
  learned,
  leftToLearn,
  setLearnedNewWord
}: IProps) => {
  return (
    <LayoutMain>
      {leftToLearn.length ? (
        <WordsList
          learned={learned}
          leftToLearn={leftToLearn}
          setLearnedNewWord={setLearnedNewWord}
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
  learned: store.progress.learned,
  leftToLearn: store.progress.leftToLearn
});

const mapDispatchToProps: IDispatchProps = {
  setLearnedNewWord: learnedNewWord
};

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainerInternal);

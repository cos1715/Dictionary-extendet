import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import Zoom from 'react-reveal/Zoom';
import { animateScroll as scroll } from 'react-scroll';
import Autosuggest from 'react-autosuggest';
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import WordPlate from "../../components/WordPlate";
import {
  valueChange,
  onSuggestionsFetchRequested,
  onSuggestionsClear,
  suggestionsChoosed
} from '../../actions/actionAutoInput'

import "./MyVocabulary.css";

class MyVocabulary extends Component {
  constructor(props) {
    super(props);
    this.lang = '';
  }

  getSuggestions = (value, learned) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const engDetection = /^[a-zA-Z]+$/;

    if (engDetection.test(inputValue)) {
      this.lang = 'eng';
    } else {
      this.lang = 'ukr'
    }

    return inputLength === 0 ? [] : learned.filter(lang =>
      lang[this.lang].toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  getSuggestionValue = suggestion => {
    const { suggestionsChoosed } = this.props;

    suggestionsChoosed(suggestion);
    return suggestion[this.lang];
  };

  renderSuggestion = suggestion => (
    <span>{suggestion[this.lang]}</span>
  );

  handleInputChange = (event, { newValue }) => {
    const { valueChange } = this.props;

    valueChange(newValue);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const { onSuggestionsFetchRequested } = this.props;

    const suggestions = this.getSuggestions(value, this.props.progress.learned);
    onSuggestionsFetchRequested(suggestions);
  };

  onSuggestionsClearRequested = () => {
    return null;
  }

  renderSearchInput = (learned, autoInput, onSuggestionsClear) => {
    const inputProps = {
      placeholder: 'Search',
      value: autoInput.value,
      onChange: this.handleInputChange
    };

    if (learned.length) {
      return (
        <div className="div-input">
          <Autosuggest
            suggestions={autoInput.suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
          <button className="btn-clear" onClick={onSuggestionsClear}><i className="far fa-trash-alt"></i></button>
        </div>
      );
    }
  }

  renderScrollBtn = learned => {
    const minWordsToScroll = 15;

    if (learned.length < minWordsToScroll) {
      return null;
    } else {
      return (
        <Zoom>
          <button className="scroll-plate" onClick={scroll.scrollToTop}>
            <i className="fas fa-arrow-circle-up"></i>
          </button>
        </Zoom>
      );
    }

  }

  renderVocabularyWords = learned => {
    if (!learned.length) {
      return (
        <div className="notify-msg">
          <h1>Looks like you didn't learned anything</h1>
        </div>
      );
    } else {
      return learned.map(element => (
        <Zoom key={`vocabulary-list-${element.eng}`}>
          <div className="word-plate" >
            <WordPlate element={element} />
          </div>
        </Zoom>
      ));
    }
  }

  render() {
    const { progress, autoInput, onSuggestionsClear } = this.props;

    return (
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <SideBar />
          {this.renderScrollBtn(progress.learned)}
          <main className="app-main">
            {this.renderSearchInput(progress.learned, autoInput, onSuggestionsClear)}
            <div className="div-words-plate">
              {
                autoInput.suggestionWord.length ?
                  this.renderVocabularyWords(autoInput.suggestionWord) :
                  this.renderVocabularyWords(progress.learned)
              }
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    progress: state.progress,
    autoInput: state.autoInput
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      valueChange: valueChange,
      onSuggestionsFetchRequested: onSuggestionsFetchRequested,
      onSuggestionsClear: onSuggestionsClear,
      suggestionsChoosed: suggestionsChoosed
    },
    dispatch
  );
};

MyVocabulary.propTypes = {
  progress: PropTypes.object,
  autoInput: PropTypes.object,
  valueChange: PropTypes.func,
  onSuggestionsFetchRequested: PropTypes.func,
  onSuggestionsClear: PropTypes.func,
  suggestionsChoosed: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyVocabulary);

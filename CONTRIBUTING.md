# Contributing Guide

Contributing to `Dictionary` is fairly easy. This document shows you how to
get the project, run all provided tests and generate a production-ready build.

## Useful links
- [PR template](https://github.com/cos1715/dictionary/blob/master/PULL_REQUEST_TEMPLATE.md).
- [Issue template](https://github.com/cos1715/dictionary/blob/master/ISSUE_TEMPLATE.md).

## Dependencies

To make sure that the following instructions work, please install the following dependencies
on you machine:

- Node.js (comes with a bundles npm)
- Git
- React
- prop-types
- react-autosuggest
- react-dom
- react-redux
- react-reveal
- react-router-dom
- react-scripts
- react-scroll
- react-toastify
- redux
- redux-devtools-extension

## Installation

To get the source of `Dictionary`, clone the git repository via:

````
$ git clone https://github.com/cos1715/Dictionary-extendet
````

This will clone the complete source to your local machine. Navigate to the project folder
and install all needed dependencies via **yarn**:

````
$ yarn install
````

This commands installs everything which is required for building and testing the project.

## Testing
Internally `Dictionary` depends on **Jest**, however we have masked all steps behind 
simple tasks processed by **yarn**.

### Unit testing: `yarn test`
`yarn test` executes the unit tests.

## Developing
### `yarn start`
This task provides a simple http server on port `3000`.

Example: `http://localhost:3000`

## Contributing/Submitting changes

- Check out a new branch based on <code>canary</code> and name it to what you intend to do:
  - Example:
  
    ````
    $ git checkout -b feature/FEATURE_NAME/bugfix
    ````
  - Use one branch per fix/feature
- Make your changes
  - Make sure to provide a spec for unit tests.
  - Run your tests before commit.
  - When all tests pass, everything's fine.
- Commit your changes
  - Please provide a git message that explains what you've done.
  - Commit to the forked repository.
- Make a pull request
  - Make sure you send the PR to the <code>bugfix</code> branch.
  

If you follow these instructions, your PR will land pretty safely in the main repo!
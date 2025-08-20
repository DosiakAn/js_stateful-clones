'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let modifyState = { ...state };
  const newArray = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      modifyState = { ...modifyState, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      modifyState = { ...modifyState };

      for (const key of action.keysToRemove) {
        delete modifyState[key];
      }
    } else if (action.type === 'clear') {
      modifyState = {};
    }
    newArray.push({ ...modifyState });
  }

  return newArray;
}

module.exports = transformStateWithClones;

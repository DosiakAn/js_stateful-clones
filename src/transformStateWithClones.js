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
    switch (action.type) {
      case 'addProperties':
        modifyState = { ...modifyState, ...action.extraData };
        break;

      case 'removeProperties':
        modifyState = { ...modifyState };

        for (const key of action.keysToRemove) {
          delete modifyState[key];
        }
        break;

      case 'clear':
        modifyState = {};
        break;

      default:
        modifyState = { ...modifyState };
    }

    newArray.push({ ...modifyState });
  }

  return newArray;
}

module.exports = transformStateWithClones;

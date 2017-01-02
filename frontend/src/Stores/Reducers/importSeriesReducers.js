import { handleActions } from 'redux-actions';
import getSectionState from 'Utilities/State/getSectionState';
import updateSectionState from 'Utilities/State/updateSectionState';
import * as types from 'Stores/Actions/actionTypes';
import createSetReducer from './Creators/createSetReducer';
import createUpdateReducer from './Creators/createUpdateReducer';
import createUpdateItemReducer from './Creators/createUpdateItemReducer';
import createRemoveItemReducer from './Creators/createRemoveItemReducer';

export const defaultState = {
  fetching: false,
  populated: false,
  error: null,
  isImporting: false,
  isImported: false,
  importError: null,
  items: []
};

const reducerSection = 'importSeries';

const importSeriesReducers = handleActions({

  [types.SET]: createSetReducer(reducerSection),
  [types.UPDATE]: createUpdateReducer(reducerSection),
  [types.UPDATE_ITEM]: createUpdateItemReducer(reducerSection),
  [types.REMOVE_ITEM]: createRemoveItemReducer(reducerSection),

  [types.CLEAR_IMPORT_SERIES]: function(state) {
    return Object.assign({}, state, defaultState);
  },

  [types.SET_IMPORT_SERIES_VALUE]: createUpdateItemReducer(reducerSection)

}, defaultState);

export default importSeriesReducers;

import { handleActions } from 'redux-actions';

const initialState = {
  isOpen: false
};

const toggleMenuReducer = (state) =>
  Object.assign({}, {isOpen: !state.isOpen });

export default handleActions({
  [toggleMenuReducer]: state => toggleMenuReducer(state)
}, initialState);

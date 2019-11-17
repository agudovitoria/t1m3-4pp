import { handleActions } from 'redux-actions';
import { clearLogin, doLogin, setUser } from '../actions/login';

const initialState = {
  // TODO: Delete this fake user and replace by real
  user: {
    id: '25dde6c8-fe83-4211-b3ca-ec1b5a15e19d',
    name: 'John',
    firstSurname: 'Smith',
    email: 'jsmith@nohost.com',
  },
  token: null,
};

const clearLoginReducer = () => ({ ...initialState });
const doLoginReducer = (state, payload) => ({ ...state, ...payload });
const setUserReducer = (state, payload) => ({ ...state, user: payload });

export default handleActions({
  [clearLogin]: () => clearLoginReducer(),
  [doLogin]: (state, payload) => doLoginReducer(state, payload),
  [setUser]: (state, payload) => setUserReducer(state, payload),
}, initialState);

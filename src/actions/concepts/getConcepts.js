import {
  getConceptsSuccess,
  getConceptsFail,
  setConceptsAsBusy,
  setConceptsAsIdle,
} from '.';

import { ConceptsService } from '../../services';

export const getConcepts = (userId) => (dispatch) => {
  dispatch(setConceptsAsBusy());

  return ConceptsService.findByUser(userId)
    .then(({ data }) => data)
    .then((concepts) => dispatch(getConceptsSuccess(concepts)))
    .catch((error) => dispatch(getConceptsFail(error)))
    .finally(() => dispatch(setConceptsAsIdle()));
};

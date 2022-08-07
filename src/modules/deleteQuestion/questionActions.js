import createRequestRoutine from '../../helpers/createRequestRoutine';
import createTriggerRoutine from '../../helpers/createTriggerRoutine';

const prefix = 'questionDelete';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const deleteQuestion = createRequestBound('QUESTION_DELETE');

export const clearAll = createTriggerBound('CLEAR_ALL');

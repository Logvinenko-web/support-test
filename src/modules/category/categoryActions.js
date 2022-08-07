import createRequestRoutine from '../../helpers/createRequestRoutine';
import createTriggerRoutine from '../../helpers/createTriggerRoutine';

const prefix = 'categories';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushCategory = createRequestBound('CATEGORY_PUSH');
export const saveCategory = createTriggerBound('CATEGORY_SAVE');

export const clearAll = createTriggerBound('CLEAR_ALL');

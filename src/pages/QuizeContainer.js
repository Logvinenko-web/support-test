import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Quize } from './Quize';
import { useNavigate } from 'react-router-dom';
import { questionSelectors } from '../modules/question/questionSelectors';
import { REQUEST, SUCCESS } from '../constants/constants';
import routing from '../routing/routing';
import { Loader } from '../components/Loader';

import { pushQuestion } from '../modules/question/questionActions';
import { pushAnswer } from '../modules/answer/answerActions';

export const QuizeContainer = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [index, setIndex] = useState(0);
  const { questionList, status } = useSelector(
    questionSelectors.selectQuestion
  );
  useEffect(() => {
    if (status === SUCCESS && questionList.length === 0) {
      history(routing().result);
    }
  }, [status]);

  const handleAnswerSubmit = (variantId, indexQuestion) => {
    dispatch(
      pushAnswer({
        questionId: questionList[indexQuestion].id.toString(),
        variantId: variantId.toString(),
      })
    );
    if (questionList.length - 1 === index) {
      history(routing().result);
    } else {
      setIndex(index + 1);
    }
  };
  const loading = status === REQUEST;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Quize
          currentQuestionIndex={index}
          questionList={questionList}
          handleAnswerSubmit={handleAnswerSubmit}
          //   errors={errors}
        />
      )}
    </>
  );
};

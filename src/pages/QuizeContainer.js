import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Quize } from './Quize';
import { useNavigate } from 'react-router-dom';
import { questionSelectors } from '../modules/question/questionSelectors';
import { REQUEST, SUCCESS } from '../constants/constants';
import routing from '../routing/routing';

import { pushQuestion } from '../modules/question/questionActions';
import { pushAnswer } from '../modules/answer/answerActions';

export const QuizeContainer = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(pushQuestion());
  }, []);
  const { questionList, status } = useSelector(
    questionSelectors.selectQuestion
  );

  // useEffect(
  //   () => {
  //     // e.preventDefault();
  //     dispatch(pushAnswer({questionId: '1', answerId: '1'}));
  //   },
  //   [dispatch]
  // );

  const handleAnswerSubmit = (variantId, indexQuestion) => {
    // dispatch(pushAnswer({questionId: questionList[indexQuestion].id.toString(), variantId: variantId.toString()}));
    if (questionList.length - 1 === index) {
      history(routing().greeting);
    } else {
      setIndex(index + 1);
    }
  };
  const loading = status === REQUEST;
  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <Quize
          expiryTimestamp={time}
          currentQuestionIndex={index}
          questionList={questionList}
          // setIndex={setIndex}
          handleAnswerSubmit={handleAnswerSubmit}
          //   errors={errors}
          //   loading={loading}
        />
      )}
    </>
  );
};

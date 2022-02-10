import React from 'react';
import Button from '@mui/material/Button/index';

export const Greeting = ({
  redirectToQuize,
  // loading,
  // errors,
}) => {
  return (
    <div className="starWrapper">
      <div className="greetingContainer">
        <div className="star">
          <div>
            <p class="center">ТЕСТ I</p>
            <p> НОВАЯ НАДЕЖДА ДЛЯ CУПОРТА</p>
            <Button onClick={redirectToQuize} variant="outlined">
              Почати
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

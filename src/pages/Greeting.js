import React from 'react';
import Button from '@mui/material/Button/index';

export const Greeting = ({
  redirectToQuize,
  // loading,
  // errors,
}) => {
  return (
    <>
      WELCOM
      <Button onClick={redirectToQuize} variant="outlined">
        Почати
      </Button>
    </>
  );
};

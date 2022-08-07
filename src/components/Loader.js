import * as React from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div class="loadingBox">
      <BallTriangle
        height="100"
        width="100"
        color="#5122e0"
        ariaLabel="loading"
      />
    </div>
  );
};

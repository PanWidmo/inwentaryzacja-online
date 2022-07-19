import React from 'react';
import { Wrapper } from 'components/molecules/Loading/Loading.styles';
import loadingGif from 'assets/icons/loading.gif';

export const Loading = () => {
  return (
    <Wrapper>
      <img src={loadingGif} alt="Loading icon" />
    </Wrapper>
  );
};

import React from 'react';
import { ClipLoader } from 'react-spinners';
import './loader.css';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {
  return (
    <div className="loader-container">
      <ClipLoader color={'#123abc'} loading={true} css={override} size={150} />
    </div>
  );
};

export default Loader;

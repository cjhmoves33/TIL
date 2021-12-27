import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  font-size: 20px;
  color: red;
`;

const Test = () => {
  return (
    <>
      <StyledDiv>hello webpack hot reload!</StyledDiv>
    </>
  );
};

export default Test;

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col)`
  text-align:center;
`

const MainGrid = ({ children }) => {
  return(
    <Row>
      <StyledCol>{children}</StyledCol>
      {/* <StyledCol xs={0} md={8} >{children[1]}</StyledCol> */}
    </Row>
  )
}

MainGrid.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainGrid;
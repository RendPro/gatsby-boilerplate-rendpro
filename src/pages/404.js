import BasicTemplate from '@templates/BasicTemplate';
import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.h1``;

const NotFound = () => (
  <BasicTemplate>
    <StyledHeadline>404 Not Found!</StyledHeadline>
  </BasicTemplate>
);

export default NotFound;

import React from 'react';
import styled from 'styled-components';
import BasicTemplate from '@templates/BasicTemplate';

const StyledHeadline = styled.h1``;

const IndexPage = () => (
  <BasicTemplate>
    <StyledHeadline>Hello world!</StyledHeadline>
  </BasicTemplate>
);

export default IndexPage;

import React from 'react';
import { CheckList, unit } from '@portfolio/components';
import styled from 'styled-components';

export const Capabilities = styled(props => (
  <CheckList {...props}>
    <CheckList.Item>Mobile App Development</CheckList.Item>
    <CheckList.Item>Mobile App Design</CheckList.Item>
    <CheckList.Item>Wireframing</CheckList.Item>
    <CheckList.Item>Web Development</CheckList.Item>
    <CheckList.Item>Web Design</CheckList.Item>
    <CheckList.Item>Consulting & Strategy</CheckList.Item>
  </CheckList>
))`
  padding: ${unit * 15}px;
`;

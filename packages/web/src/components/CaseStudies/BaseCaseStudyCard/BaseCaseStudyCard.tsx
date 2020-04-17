import styled from 'styled-components';
import { CaseStudyCard } from '@portfolio/components';

export const BaseCaseStudyCard = styled(CaseStudyCard)`
  transition: 300ms transform ease-in-out;

  &:hover {
    transform: scale(1.025);
  }
`;

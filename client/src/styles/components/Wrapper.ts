import styled from 'styled-components';
import { baseTheme } from '../theme';

export const Wrapper = styled.div`
  width: ${baseTheme.wrapperMaxWidth};
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media(${baseTheme.brakePoint.lg}) {
    width: 95%;
    padding: 0 30px;
  }
  @media(${baseTheme.brakePoint.md}) {
    width: 100%;
    padding: 0;
  }
`;

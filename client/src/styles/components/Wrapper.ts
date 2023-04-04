import styled from 'styled-components';
import { baseTheme } from '../theme';

export const Wrapper = styled.div`
  max-width: ${baseTheme.wrapperMaxWidth};
  margin: 0 auto;

  /* @media (${baseTheme.brakePoint.xl}) {
    width: ${baseTheme.wrapperWidth.lg};
  }
  @media (${baseTheme.brakePoint.lg}) {
    width: ${baseTheme.wrapperWidth.md};
  }
  @media (${baseTheme.brakePoint.md}) {
    width: ${baseTheme.wrapperWidth.sm};
  }
  @media (${baseTheme.brakePoint.sm}) {
    width: ${baseTheme.wrapperWidth.xs};
  } */
`;

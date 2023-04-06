import styled from 'styled-components';
import { baseTheme } from '../theme';

export const Wrapper = styled.div`
  max-width: ${baseTheme.wrapperMaxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

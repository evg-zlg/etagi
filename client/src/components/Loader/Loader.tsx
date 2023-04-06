import styled, { keyframes } from 'styled-components';
import { baseTheme } from '../../styles/theme';

const rotate = keyframes`
   from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
    `;

const LoaderStyled = styled.div`
  position: fixed;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  margin: 0 auto;
  padding: 15px;
  border: 3px dashed ${baseTheme.colors.inputShowBtn};
  border-radius: 100%;
  animation: ${rotate} 2s ease infinite;
  z-index: 10;
`;

function Loader() {
  return <LoaderStyled />;
}

export { Loader };

import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

const InputsWrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  padding: 11px 20px;
  border: 1px solid ${baseTheme.colors.inputBorder};
  width: 50%;
  flex: 1 0 auto;

  &:first-child {
    border-top-left-radius: ${baseTheme.border.radius};
    border-bottom-left-radius: ${baseTheme.border.radius};
  }

  &:last-child {
    border-top-right-radius: ${baseTheme.border.radius};
    border-bottom-right-radius: ${baseTheme.border.radius};
  }

  &:hover,
  &:focus {
    border-color: ${baseTheme.colors.inputHover};
  }
`;

interface IInputTwoValue {
  variant: 'price' | 'area-total' | 'area-kitchen' | 'area-live';
}

function InputTwoValue({ variant }: IInputTwoValue) {
  return (
    <InputsWrapper>
      <Input placeholder="от" />
      <Input placeholder="до" />
    </InputsWrapper>
  );
}

export { InputTwoValue };

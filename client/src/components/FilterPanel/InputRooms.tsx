import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

const InputsWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  flex: 1 0 auto;
  border: 1px solid ${baseTheme.colors.inputBorder};
  padding: 0.75rem 1rem;
  transition: border-color 0.2s ease 0s;

  &:first-child {
    border-top-left-radius: ${baseTheme.border.radius};
    border-bottom-left-radius: ${baseTheme.border.radius};
  }

  &:last-child {
    border-top-right-radius: ${baseTheme.border.radius};
    border-bottom-right-radius: ${baseTheme.border.radius};
  }

  &:hover {
    border-color: ${baseTheme.colors.inputRoomsBtnHoverBorder};
    color: ${baseTheme.colors.inputRoomsBtnHovetText};
  }
`;

function InputRooms() {
  return (
    <InputsWrapper>
      <Button aria-label="Студия" type="button">
        Студия
      </Button>
      <Button aria-label="1" type="button">
        1
      </Button>
      <Button aria-label="2" type="button">
        2
      </Button>
      <Button aria-label="3" type="button">
        3
      </Button>
      <Button aria-label="4+" type="button">
        4+
      </Button>
    </InputsWrapper>
  );
}

export { InputRooms };

// import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

import { getNewRoomsParams } from './lib';
import { urlKeyRooms } from '../../const/const';

const InputsWrapper = styled.div`
  display: flex;
`;

interface IButton {
  active: boolean;
}

const Button = styled.button<IButton>`
  flex: 1 0 auto;
  border: 1px solid ${baseTheme.colors.inputBorder};
  padding: 0.75rem 1rem;
  transition: border-color 0.2s ease 0s;
  border-color: ${(props) =>
    props.active ? baseTheme.colors.inputRoomsBtnHoverBorder : 'none'};
  color: ${(props) =>
    props.active ? baseTheme.colors.inputRoomsBtnHovetText : 'none'};

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
  const key = urlKeyRooms;
  const [searchParams, setSearchParams] = useSearchParams();

  const clickStudioHandler = () => {
    setSearchParams(getNewRoomsParams(searchParams, '0'));
  };
  const clickOneHandler = () => {
    setSearchParams(getNewRoomsParams(searchParams, '1'));
  };
  const clickTwoHandler = () => {
    setSearchParams(getNewRoomsParams(searchParams, '2'));
  };

  const clickThreeHandler = () => {
    setSearchParams(getNewRoomsParams(searchParams, '3'));
  };
  const clickFourHandler = () => {
    setSearchParams(getNewRoomsParams(searchParams, '4'));
  };

  return (
    <InputsWrapper>
      <Button
        onClick={clickStudioHandler}
        active={searchParams.get(key)?.includes('0') || false}
        aria-label="Студия"
        type="button"
      >
        Студия
      </Button>
      <Button
        onClick={clickOneHandler}
        active={searchParams.get(key)?.includes('1') || false}
        aria-label="1"
        type="button"
      >
        1
      </Button>
      <Button
        onClick={clickTwoHandler}
        active={searchParams.get(key)?.includes('2') || false}
        aria-label="2"
        type="button"
      >
        2
      </Button>
      <Button
        onClick={clickThreeHandler}
        active={searchParams.get(key)?.includes('3') || false}
        aria-label="3"
        type="button"
      >
        3
      </Button>
      <Button
        onClick={clickFourHandler}
        active={searchParams.get(key)?.includes('4') || false}
        aria-label="4+"
        type="button"
      >
        4+
      </Button>
    </InputsWrapper>
  );
}

export { InputRooms };

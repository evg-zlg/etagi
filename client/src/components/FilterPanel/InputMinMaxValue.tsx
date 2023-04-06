import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

import { useDebounce } from '../../hooks/useDebounce';

import { TFilterParams } from '../../types/types';
import { getNewMinMaxParams } from './lib';

const InputsWrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  flex: 1 0 auto;
  padding: 11px 20px;
  border: 1px solid ${baseTheme.colors.inputBorder};
  width: 50%;
  transition: border-color 0.3s ease 0s;

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

interface IInputMinMaxValueProps {
  filterParam: TFilterParams;
}

function InputMinMaxValue({ filterParam }: IInputMinMaxValueProps) {
  const keyMin = `${filterParam}_min`;
  const keyMax = `${filterParam}_max`;
  const [searchParams, setSearchParams] = useSearchParams();
  const debounceDelay = 500;
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const debounceMinValue = useDebounce(minValue, debounceDelay);
  const debounceMaxValue = useDebounce(maxValue, debounceDelay);

  const isValid = (value: string): boolean =>
    value === '' || !Number.isNaN(Number(value));

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isValid(value)) {
      setMinValue(value);
    }
  };
  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isValid(value)) {
      setMaxValue(value);
    }
  };

  useEffect(() => {
    const urlParamMinValue = searchParams.get(keyMin);
    const urlParamMaxValue = searchParams.get(keyMax);
    if (urlParamMinValue === null) {
      setMinValue('');
    } else {
      setMinValue(urlParamMinValue);
    };
    if (urlParamMaxValue === null) {
      setMaxValue('');
    } else {
      setMaxValue(urlParamMaxValue);
    }
  }, [searchParams]);

  useEffect(() => {
    if (debounceMinValue !== null) {
      const newUrlParams: URLSearchParams = getNewMinMaxParams(
        searchParams,
        debounceMinValue,
        keyMin,
      );
      setSearchParams(newUrlParams);
    }
    if (debounceMaxValue !== null) {
      const newUrlParams: URLSearchParams = getNewMinMaxParams(
        searchParams,
        debounceMaxValue,
        keyMax,
      );
      setSearchParams(newUrlParams);
    }
  }, [debounceMinValue, debounceMaxValue]);

  return (
    <InputsWrapper>
      <Input placeholder="от" onChange={handleMinChange} value={minValue} />
      <Input placeholder="до" onChange={handleMaxChange} value={maxValue} />
    </InputsWrapper>
  );
}

export { InputMinMaxValue };

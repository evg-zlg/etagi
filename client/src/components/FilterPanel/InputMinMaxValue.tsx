import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

import { useDebounce } from '../../hooks/useDebounce';

import { TFilterParams } from '../OneSection/types';
import { getNewMinMaxParams, getWithoutSpaces } from './lib';
import { getFormattedPrice } from '../OneSection/lib';

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
  const debounceDelay = 500;
  const maxPrice = 999999999;

  const [searchParams, setSearchParams] = useSearchParams();
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const debounceMinValue = useDebounce(minValue, debounceDelay);
  const debounceMaxValue = useDebounce(maxValue, debounceDelay);

  const isValid = (value: string): boolean => {
    const checkValue =
      filterParam === 'price' ? getWithoutSpaces(value) : value;
    return checkValue === '' || !Number.isNaN(Number(checkValue));
  };

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    if (isValid(value)) {
      if (filterParam === 'price') {
        const price = Number(getWithoutSpaces(value));
        value = price >= maxPrice ? getFormattedPrice(maxPrice) : getFormattedPrice(price);
      }
      setMinValue(value);
    }
  };
  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    if (isValid(value)) {
      if (filterParam === 'price') {
        const price = Number(getWithoutSpaces(value));
        value = price >= maxPrice ? getFormattedPrice(maxPrice) : getFormattedPrice(price);
      }
      setMaxValue(value);
    }
  };

  // initial values into inputs
  useEffect(() => {
    let urlParamMinValue = searchParams.get(keyMin);
    let urlParamMaxValue = searchParams.get(keyMax);
    if (urlParamMinValue === null) {
      setMinValue('');
    } else {
      if (filterParam === 'price') {
        urlParamMinValue = getFormattedPrice(Number(urlParamMinValue));
      }
      setMinValue(urlParamMinValue);
    }
    if (urlParamMaxValue === null) {
      setMaxValue('');
    } else {
      if (filterParam === 'price') {
        urlParamMaxValue = getFormattedPrice(Number(urlParamMaxValue));
      }
      setMaxValue(urlParamMaxValue);
    }
  }, [searchParams]);

  // update search params
  useEffect(() => {
    if (debounceMinValue !== null) {
      const newValue =
        filterParam === 'price'
          ? getWithoutSpaces(debounceMinValue)
          : debounceMinValue;
      const newUrlParams: URLSearchParams = getNewMinMaxParams(
        searchParams,
        newValue,
        keyMin,
      );
      setSearchParams(newUrlParams);
    }
    if (debounceMaxValue !== null) {
      const newValue =
        filterParam === 'price'
          ? getWithoutSpaces(debounceMaxValue)
          : debounceMaxValue;
      const newUrlParams: URLSearchParams = getNewMinMaxParams(
        searchParams,
        newValue,
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

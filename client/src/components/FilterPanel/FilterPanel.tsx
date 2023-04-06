import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

import { InputRooms } from './InputRooms';
import { InputMinMaxValue } from './InputMinMaxValue';

import clearIcon from './icons/clearIcon.svg';
import extendIcon from './icons/extendIcon.svg';
import { IFlat } from '../../Models/FlatModel';
import { getTextForShowBtn, hasExtendedFilterParams } from './lib';

const FilterPanelStyled = styled.section`
  width: 100%;
  background-color: ${baseTheme.colors.lightBg};
  border-radius: ${baseTheme.border.radius};
  padding: 20px;
  box-shadow: ${baseTheme.shadows.blockShadow};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

const FilterInputs = styled.div`
  margin: 0 0 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (${baseTheme.brakePoint.lg}) {
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
  }
`;
const WrappInputs = styled.div`
  flex: 1 0 30%;
  display: block;
  flex-direction: column;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
`;

const ExtenedFilterInputs = styled.div`
  margin: 0 0 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (${baseTheme.brakePoint.lg}) {
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
  }
`;

const ControlRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media (${baseTheme.brakePoint.lg}) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`;

const ExtendedSearchBtn = styled.button`
  font-weight: 500;
  padding: calc(0.75rem - 1px) 1rem;
  border-radius: ${baseTheme.border.radius};
  color: ${baseTheme.colors.extendBtnText};
  transition: background-color 0.3s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: ${baseTheme.colors.extendBtnBg};
  }
`;

const ClearAndShowBtns = styled.div`
  display: flex;
  gap: 10px;

  @media (${baseTheme.brakePoint.lg}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ClearBtn = styled.button`
  padding: calc(0.75rem - 1px) 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;
  border: 1px solid ${baseTheme.colors.inputBorder};
  border-radius: ${baseTheme.border.radius};
  transition: background-color 0.3s ease 0s;

  &:hover {
    background-color: ${baseTheme.colors.inputClearBtnBgHover};
  }
`;

const ShowFoundBtn = styled.button`
  padding: calc(0.75rem - 1px) 1rem;
  font-weight: 500;
  border-radius: ${baseTheme.border.radius};
  background-color: ${baseTheme.colors.inputShowBtn};
  color: ${baseTheme.colors.lightText};
  transition: background-color 0.3s ease 0s;

  &:hover {
    background-color: ${baseTheme.colors.inputShowBtnHover};
  }
`;

interface IFilterPanel {
  flats: IFlat[];
}

function FilterPanel({ flats }: IFilterPanel) {
  const [showExtendedFilter, setShowExtendedFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const clearClickHandler = () => {
    const keysParams: string[] = [];
    searchParams.forEach((_, key) => {
      keysParams.push(key);
    });
    keysParams.forEach((key) => searchParams.delete(key));
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (
      hasExtendedFilterParams(searchParams, [
        'area_kitchen',
        'area_live',
        'floor',
      ])
    ) {
      setShowExtendedFilter(true);
    }
  }, []);

  return (
    <FilterPanelStyled>
      <Title>Выбрать квартиру</Title>
      <FilterInputs>
        <WrappInputs>
          Комнатность
          <InputRooms />
        </WrappInputs>
        <WrappInputs>
          {`Стоимость, \u20bd`}
          <InputMinMaxValue filterParam="price" />
        </WrappInputs>
        <WrappInputs>
          Площадь, м²
          <InputMinMaxValue filterParam="area_total" />
        </WrappInputs>
      </FilterInputs>
      {showExtendedFilter && (
        <ExtenedFilterInputs>
          <WrappInputs>
            Этаж
            <InputMinMaxValue filterParam="floor" />
          </WrappInputs>
          <WrappInputs>
            Площадь кухни, м2
            <InputMinMaxValue filterParam="area_kitchen" />
          </WrappInputs>
          <WrappInputs>
            Жилая площадь, м2
            <InputMinMaxValue filterParam="area_live" />
          </WrappInputs>
        </ExtenedFilterInputs>
      )}
      <ControlRow>
        <ExtendedSearchBtn
          type="button"
          onClick={() => setShowExtendedFilter((prev) => !prev)}
        >
          <img src={extendIcon} alt="Расширенный поиск" />
          Расширенный поиск
        </ExtendedSearchBtn>
        <ClearAndShowBtns>
          <ClearBtn type="button" onClick={clearClickHandler}>
            Очистить
            <img src={clearIcon} alt="Очистить" />
          </ClearBtn>
          <ShowFoundBtn type="button">
            {getTextForShowBtn(flats.length)}
          </ShowFoundBtn>
        </ClearAndShowBtns>
      </ControlRow>
    </FilterPanelStyled>
  );
}

export { FilterPanel };

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetFlatsQuery } from '../../store/API/section.api';
import { updateFlats } from '../../store/reducers/sectionSlice';

import { FilterPanel } from '../FilterPanel';
import { FlatsList } from '../FlatsList';
import { getFilteredAndSortFlats, getTextForViewMoreBtn } from './lib';
import { IFlat } from '../../types/types';
import { countFlatsOnPage } from '../../const/const';
import { baseTheme } from '../../styles/theme';

const SectionStyled = styled.main`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ViewMoreBtn = styled.button`
  width: 100%;
  padding: calc(0.75rem - 1px) calc(1rem - 1px);
  background-color: ${baseTheme.colors.lightBg};
  border-radius: ${baseTheme.border.radius};
  border: 1px solid ${baseTheme.colors.inputBorder};
  font-weight: 500;
  color: ${baseTheme.colors.thirdText};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${baseTheme.colors.inputClearBtnBgHover};
  }
`;

function Section() {
  const totalFloors = 4;

  const dispatch = useAppDispatch();
  const { flats: flatsFromStore } = useAppSelector((state) => state.flatsState);
  const { data: flatsFromServer, isSuccess, isError } = useGetFlatsQuery();
  const [searchParams] = useSearchParams();
  const [filteredFlats, setFilteredFlats] = useState<IFlat[]>([]);
  const [viewFlats, setViewFlats] = useState<IFlat[]>([]);
  const [countFlats, setCountFlats] = useState<number>(countFlatsOnPage);

  const viewMoreBtnClickHandler = () => {
    setCountFlats((prev) => prev + countFlatsOnPage);
  };

  useEffect(() => {
    if (isError) return;
    if (isSuccess && flatsFromServer) {
      dispatch(updateFlats(flatsFromServer));
    }
  }, [flatsFromServer]);

  useEffect(() => {
    setFilteredFlats(getFilteredAndSortFlats(searchParams, flatsFromStore));
  }, [flatsFromStore, searchParams]);

  useEffect(() => {
    setViewFlats(filteredFlats.slice(0, countFlats));
  }, [filteredFlats, countFlats]);

  return (
    <SectionStyled>
      <FilterPanel flats={filteredFlats} />
      {isError && <p>Ошибка загрузки с сервера</p>}
      {isSuccess && <FlatsList flats={viewFlats} totalFloors={totalFloors} />}
      {(viewFlats.length > 0 && viewFlats.length < filteredFlats.length) && (
        <ViewMoreBtn type="button" aria-label="Показать ещё" onClick={viewMoreBtnClickHandler}>
          {getTextForViewMoreBtn(viewFlats.length, filteredFlats.length)}
        </ViewMoreBtn>
      )}
    </SectionStyled>
  );
}

export { Section };
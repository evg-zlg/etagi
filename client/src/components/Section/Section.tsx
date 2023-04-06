import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetFlatsQuery } from '../../store/API/section.api';
import { updateFlats } from '../../store/reducers/sectionSlice';

import { FilterPanel } from '../FilterPanel';
import { FlatsList } from '../FlatsList';
import { getFilteredAndSortFlats } from './lib';
import { IFlat } from '../../types/types';

const SectionStyled = styled.main`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function Section() {
  const totalFloors = 4;
  
  const dispatch = useAppDispatch();
  const { flats: flatsFromStore } = useAppSelector((state) => state.flatsState);
  const { data: flatsFromServer, isSuccess, isError } = useGetFlatsQuery();
  const [searchParams] = useSearchParams();
  const [filteredFlats, setFilteredFlats] = useState<IFlat[]>([]);

  useEffect(() => {
    if (isError) return;
    if (isSuccess && flatsFromServer) {
      dispatch(updateFlats(flatsFromServer));
    }
  }, [flatsFromServer]);

  useEffect(() => {
      setFilteredFlats(getFilteredAndSortFlats(searchParams, flatsFromStore));
  }, [flatsFromStore, searchParams]);

  return (
    <SectionStyled>
      <FilterPanel flats={filteredFlats} />
      {isError && <p>Ошибка загрузки с сервера</p>}
      {isSuccess && (
        <FlatsList flats={filteredFlats} totalFloors={totalFloors} />
      )}
    </SectionStyled>
  );
}

export { Section };

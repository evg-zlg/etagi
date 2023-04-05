import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetFlatsQuery } from '../../store/API/section.api';
import { updateFlats } from '../../store/reducers/sectionSlice';
import { getFilteredFlats } from './helpers';

import { FilterPanel } from '../../components/FilterPanel';
import { FlatsList } from '../../components/FlatsList';
import { Wrapper } from '../../styles/components/Wrapper';
import { IFlat } from '../../types/types';

const SectionStyled = styled.main`
  padding: 50px 0;
`;

function Section() {
  const dispatch = useAppDispatch();
  const { flats: flatsFromStore } = useAppSelector((state) => state.flatsState);
  const { data: flatsFromServer, isSuccess, isError } = useGetFlatsQuery();
  const totalFloors = 4;
  const searchParams = useSearchParams();
  const [flatsOnPage, setFlatsOnPage] = useState<IFlat[]>([]);
  const [filterParams, setFilterParams] = useState({});
  const [sortBy, setSortBy] = useState({});

  useEffect(() => {
    if (isError) return;
    if (isSuccess && flatsFromServer) {
      dispatch(updateFlats(flatsFromServer));
      getFilteredFlats(flatsFromServer, {});
    }
  }, [flatsFromServer]);

  return (
    <SectionStyled>
      <Wrapper>
        <FilterPanel flats={flatsFromStore}/>
        {isError && <p>Ошибка загрузки с сервера</p>}
        {isSuccess && <FlatsList flats={flatsFromStore} totalFloors={totalFloors} />}
      </Wrapper>
    </SectionStyled>
  );
}

export { Section };

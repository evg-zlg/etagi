import styled from 'styled-components';

import { FlatCard } from './FlatCard';
import { IFlat } from '../../types/types';

const FlatsListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  gap: 10px;
`;

interface IFlatsList {
  flats: IFlat[];
  totalFloors: number;
}

function FlatsList({ flats, totalFloors }: IFlatsList) {

  return (
    <FlatsListStyled>
      {flats.length > 0 &&
        flats.map((flat) => (
          <FlatCard key={flat.id} flat={flat} totalFloors={totalFloors} />
        ))}
    </FlatsListStyled>
  );
}

export { FlatsList };

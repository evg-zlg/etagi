import styled from 'styled-components';
import { useGetFlatsQuery } from '../../store/reducers/section.api';
import { FlatCard } from './FlatCard';

const FlatsListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  gap: 10px;
`;

function FlatsList() {
  const { data: flatsFromServer, isSuccess } = useGetFlatsQuery();

  return (
    <FlatsListStyled>
      {isSuccess &&
        flatsFromServer.map((flat) => <FlatCard key={flat.id} flat={flat} />)}
    </FlatsListStyled>
  );
}

export { FlatsList };

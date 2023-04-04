import styled from 'styled-components';
import { FilterPanel } from '../../components/FilterPanel';
import { FlatsList } from '../../components/FlatsList';
import { Wrapper } from '../../styles/components/Wrapper';

const SectionStyled = styled.main`
  padding: 50px 0;
`;

function Section() {
  return (
    <SectionStyled>
      <Wrapper>
        <FilterPanel />
        <FlatsList />
      </Wrapper>
    </SectionStyled>
  );
}

export { Section };

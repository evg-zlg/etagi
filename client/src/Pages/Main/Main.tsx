import styled from 'styled-components';
import { OneSection } from '../../components/OneSection';
import { Wrapper } from '../../styles/components/Wrapper';

const Block = styled.div``;
const El = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid red;
  &:hover {
    border: 1px solid green;
  }
`;

function Main() {
  return (
    <Wrapper>
      <OneSection />
      <Block>
        <El />
        <El />
      </Block>
    </Wrapper>
  );
}

export { Main };

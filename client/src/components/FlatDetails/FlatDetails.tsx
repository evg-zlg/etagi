import styled from 'styled-components';
import { IFlat } from '../../Models/FlatModel';
import { PlanFlat } from './PlanFlat';
import { InfoFlat } from './InfoFlat';

const FlatDetailsStyled = styled.main`
  padding: 50px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface IFlatDetails {
  flat: IFlat;
}

function FlatDetails({ flat }: IFlatDetails) {
  return (
    <FlatDetailsStyled>
      <PlanFlat flat={flat}/>
      <InfoFlat flat={flat} />
    </FlatDetailsStyled>
  );
}

export { FlatDetails };

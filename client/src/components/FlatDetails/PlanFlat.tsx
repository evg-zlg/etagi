import styled from 'styled-components';
import { IFlat } from '../../Models/FlatModel';
import { baseTheme } from '../../styles/theme';

const PlanFlatStyled = styled.section`
  border-radius: ${baseTheme.border.radius};
  box-shadow: ${baseTheme.shadows.blockShadow};
  background-color: ${baseTheme.colors.lightBg};
  padding: 25px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
`;

const WrapImg = styled.div`
  width: 100%;
  height: 400px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

interface IPlanFlatProps {
  flat: IFlat;
}

function PlanFlat({ flat }: IPlanFlatProps) {
  return (
    <PlanFlatStyled>
      <Title>{`${flat.rooms}-комн. квартира, ${flat.area_total} м²`}</Title>
      <WrapImg>
        <Img src={flat.layout_image} alt="схема квартиры" />
      </WrapImg>
    </PlanFlatStyled>
  );
}
export { PlanFlat };

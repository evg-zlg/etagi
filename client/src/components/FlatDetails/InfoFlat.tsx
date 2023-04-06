import styled from 'styled-components';
import { IFlat } from '../../Models/FlatModel';
import { baseTheme } from '../../styles/theme';
import { getFormattedPrice } from '../OneSection/lib';
import { getPricePerSquare } from '../FlatsList/lib';

const InfoFlatStyled = styled.section`
  border-radius: ${baseTheme.border.radius};
  box-shadow: ${baseTheme.shadows.blockShadow};
  background-color: ${baseTheme.colors.lightBg};
  padding: 25px;
  display: flex;
`;

const ColumnLayout = styled.div`
  flex: 1 1 50%;
`;

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

const PriceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Text = styled.p`
  margin: 0.25rem 0 0 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const ItemParam = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 0 10px 0;

  &:first-child {
    margin: 1.25rem 0 0 0;
  }
`;

const Param = styled.p`
  min-width: 130px;
  color: ${baseTheme.colors.secondaryText};
`;

const Value = styled.p``;

interface IInfoFlatProps {
  flat: IFlat;
}

function InfoFlat({ flat }: IInfoFlatProps) {
  return (
    <InfoFlatStyled>
      <ColumnLayout>
        <Title>Общая информация</Title>
        <ItemParam>
          <Param>Комнатность:</Param>
          <Value>{flat.rooms}</Value>
        </ItemParam>
        <ItemParam>
          <Param>Площадь:</Param>
          <Value>{`${flat.area_total} м²`}</Value>
        </ItemParam>
        <ItemParam>
          <Param>Этаж:</Param>
          <Value>{`${flat.floor} из `}</Value>
        </ItemParam>
        <ItemParam>
          <Param>Площадь кухни:</Param>
          <Value>{`${flat.area_kitchen} м²`}</Value>
        </ItemParam>
        <ItemParam>
          <Param>Жилая площадь:</Param>
          <Value>{`${flat.area_live} м²`}</Value>
        </ItemParam>
      </ColumnLayout>
      <ColumnLayout>
        <PriceBlock>
          <PriceTitle>{`${getFormattedPrice(flat.price)} \u20bd`}</PriceTitle>
          <Text>{`${getPricePerSquare(
            flat.price,
            flat.area_total,
          )} \u20bd/м²`}</Text>
        </PriceBlock>
      </ColumnLayout>
    </InfoFlatStyled>
  );
}

export { InfoFlat };

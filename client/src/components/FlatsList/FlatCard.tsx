import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

import { IFlat } from '../../types/types';
import { getPricePerSquare } from './lib';

import favoritesIcon from './icons/favoritesIcon.svg';
import { APPRoute } from '../../const/const';
import { getFormattedPrice } from '../OneSection/lib';

const FlatCardStyled = styled.div`
  background-color: ${baseTheme.colors.lightBg};
  border-radius: ${baseTheme.border.radius};
  box-shadow: ${baseTheme.shadows.blockShadow};
  display: flex;
  flex-direction: column;
  align-items: center;

  > a {
    text-align: center;
  }
`;

const Img = styled.img`
  height: 204px;
  object-position: center;
`;

const Info = styled.div`
  text-align: left;
  padding: 10px;
`;

const LightText = styled.p`
  color: ${baseTheme.colors.secondaryText};
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const PriceBlock = styled.div`
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p`
  margin: 10px 0 0 0;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.75rem;
`;

const FavoritesBtn = styled.button`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: calc(0.5rem - 1px);
  border: 1px solid ${baseTheme.colors.inputBorder};
  transition: border-color 0.3s ease 0s;
  z-index: 1;

  &:hover {
    border-color: ${baseTheme.colors.inputHover};
    > span {
      background-color: ${baseTheme.colors.inputHover};
    }
  }
`;

const FavoritesIcon = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  mask-image: URL(${favoritesIcon});
  mask-position: center;
  mask-repeat: no-repeat;
  background-color: ${baseTheme.colors.inputBorder};
  transition: background-color 0.3s ease 0s;
  pointer-events: none;
`;

const ParamsBlock = styled.div`
  display: flex;
  margin: 0 0 8px 0;
`;

const ParamItem = styled.p`
  padding: 5px 10px 5px 0;
  margin: 0 10px 0 0;
  border-right: 1px solid ${baseTheme.colors.inputBorder};
  font-weight: 500;

  &:first-child {
    padding: 5px 10px 5px 0;
    margin: 0 5px 0 0;
  }

  &:last-child {
    border-right: none;
    margin: 0 0 0 0;
    padding: 5px 0 5px 0;
  }
`;

const Text = styled.p`
  margin: 0.25rem 0 0 0;
  color: ${baseTheme.colors.thirdText};
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

interface IFlatCard {
  flat: IFlat;
  totalFloors: number;
}

function FlatCard({ flat, totalFloors }: IFlatCard) {

  const favoritesBtnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  
  return (
    <FlatCardStyled>
      <NavLink to={APPRoute.flat + flat.id}>
        <Img src={`${flat.layout_image}`} alt="Схема квартиры" />
        <Info>
          <LightText>По ценам застройщика</LightText>
          <PriceBlock>
            <div>
              <Price>{`${getFormattedPrice(flat.price)} \u20bd`}</Price>
              <LightText>{`${getPricePerSquare(
                flat.price,
                flat.area_total,
              )} \u20bd/м²`}</LightText>
            </div>
            <FavoritesBtn
              type="button"
              aria-label="Добавить в избранное"
              onClick={favoritesBtnClickHandler}
            >
              <FavoritesIcon />
            </FavoritesBtn>
          </PriceBlock>
          <ParamsBlock>
            <ParamItem>{`${flat.rooms}-комн.кв.`}</ParamItem>
            <ParamItem>{`${flat.area_total} м2`}</ParamItem>
            <ParamItem>{`${flat.floor}/${totalFloors} эт.`}</ParamItem>
          </ParamsBlock>
          <LightText>Срок сдачи: 3 квартал 2025</LightText>
          <Text>Стены: монолитно-каркасные</Text>
          <Text>Отделка: улучшенная черновая</Text>
        </Info>
      </NavLink>
    </FlatCardStyled>
  );
}

export { FlatCard };

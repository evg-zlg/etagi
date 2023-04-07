import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TSortType } from '../OneSection/types';
import { baseTheme } from '../../styles/theme';

const SortPanelStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  user-select: none;
  padding: 0.5rem 0.25rem;
  margin: 0 10px 0 0;
`;

interface IBtn {
  active: boolean;
}

const Btn = styled.button<IBtn>`
  padding: 0.5rem 0.25rem;
  margin: 0 10px 0 0;
  transition: border-bottom-color 0.3s;
  border-bottom: 2px solid
    ${(props) => (props.active ? baseTheme.colors.inputShowBtn : 'transparent')};

  &:hover {
    ${(props) =>
      props.active
        ? ''
        : `border-bottom-color: ${baseTheme.colors.borderBottomHover}`};
  }
`;

interface ISortPanel {
  sortType: TSortType;
  setSortType: Dispatch<SetStateAction<TSortType>>;
}

function SortPanel({ sortType, setSortType }: ISortPanel) {
  return (
    <SortPanelStyled>
      <Title>Сортировать:</Title>
      <Btn
        aria-label="Стоимость по возрастанию"
        type="button"
        active={sortType === 'total-price-asc'}
        onClick={() => setSortType('total-price-asc')}
      >
        cтоимость ↑
      </Btn>
      <Btn
        aria-label="Стоимость по убыванию"
        type="button"
        active={sortType === 'total-price-desc'}
        onClick={() => setSortType('total-price-desc')}
      >
        стоимость ↓
      </Btn>
      <Btn
        aria-label="Цена за квадрат"
        type="button"
        active={sortType === 'square-price'}
        onClick={() => setSortType('square-price')}
      >
        цена за квадрат ↑
      </Btn>
      <Btn
        aria-label="Площадь"
        type="button"
        active={sortType === 'area'}
        onClick={() => setSortType('area')}
      >
        площадь ↑
      </Btn>
      
    </SortPanelStyled>
  );
}

export { SortPanel };

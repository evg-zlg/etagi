import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TSortType } from '../../types/types';
import { baseTheme } from '../../styles/theme';

const SortPanelStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
        aria-label="Стоимость"
        type="button"
        active={sortType === 'total-price'}
        onClick={() => setSortType('total-price')}
      >
        cтоимость
      </Btn>
      <Btn
        aria-label="Цена за квадрат"
        type="button"
        active={sortType === 'square-price'}
        onClick={() => setSortType('square-price')}
      >
        цена за квадрат
      </Btn>
      <Btn
        aria-label="Площадь"
        type="button"
        active={sortType === 'area'}
        onClick={() => setSortType('area')}
      >
        площадь
      </Btn>
      <Btn
        aria-label="Комнатность"
        type="button"
        active={sortType === 'rooms'}
        onClick={() => setSortType('rooms')}
      >
        комнатность
      </Btn>
    </SortPanelStyled>
  );
}

export { SortPanel };

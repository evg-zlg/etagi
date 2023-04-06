export interface IFlat {
  id: number,
  floor: number,
  pos_on_floor: number,
  price: number,
  rooms: number,
  area_total: number,
  area_kitchen: number,
  area_live: number,
  layout_image: string,
}

export interface ISection {
  flats: IFlat[],
}

export interface IFilterParams {
  min_floor?: number,
  max_floor?: number,
  min_price?: number,
  max_price?: number,
  min_rooms?: number,
  max_rooms?: number,
  min_area_total?: number,
  max_area_total?: number,
  min_area_kitchen?: number,
  max_area_kitchen?: number,
  min_area_live?: number,
  max_area_live?: number,
}

export type TFilterParams = 'rooms' | 'price' | 'area_total' | 'area_kitchen' | 'area_live' | 'floor';

export type TSortType = 'total-price-asc' | 'total-price-desc' | 'square-price' | 'area';
import { IFlat } from '../../Models/FlatModel';
import { countFlatsOnPage } from '../../const/const';
import { TSortType } from './types';

export function getFormattedPrice(price: number): string {
  if (price === 0) return '';

  const formatter = new Intl.NumberFormat('ru');
  return formatter.format(price);
}

export function getFilteredAndSortFlats(
  searchParams: URLSearchParams,
  flats: IFlat[],
  sortType: TSortType,
): IFlat[] {
  // result array
  let filteredFlats: IFlat[] = [...flats];

  // filters
  const rooms = 'rooms';
  const priceMin = 'price_min';
  const priceMax = 'price_max';
  const areaTotalMin = 'area_total_min';
  const areaTotalMax = 'area_total_max';
  const areaKitchenMin = 'area_kitchen_min';
  const areaKitchenMax = 'area_kitchen_max';
  const areaLiveMin = 'area_live_min';
  const areaLiveMax = 'area_live_max';
  const floorMin = 'floor_min';
  const floorMax = 'floor_max';

  // rooms
  if (searchParams.has(rooms)) {
    const searchValue = searchParams.get(rooms);
    filteredFlats = filteredFlats.filter((flat) =>
      searchValue?.includes(String(flat.rooms)),
    );
  }

  // price
  if (searchParams.has(priceMin)) {
    const searchValue = searchParams.get(priceMin);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.price >= Number(searchValue),
    );
  }
  if (searchParams.has(priceMax)) {
    const searchValue = searchParams.get(priceMax);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.price <= Number(searchValue),
    );
  }

  // area_total
  if (searchParams.has(areaTotalMin)) {
    const searchValue = searchParams.get(areaTotalMin);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.area_total >= Number(searchValue),
    );
  }
  if (searchParams.has(areaTotalMax)) {
    const searchValue = searchParams.get(areaTotalMax);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.area_total <= Number(searchValue),
    );
  }

  // area_kitchen
  if (searchParams.has(areaKitchenMin)) {
    const searchValue = searchParams.get(areaKitchenMin);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.area_kitchen >= Number(searchValue),
    );
  }
  if (searchParams.has(areaKitchenMax)) {
    const searchValue = searchParams.get(areaKitchenMax);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.area_kitchen <= Number(searchValue),
    );
  }

  // area_live
  if (searchParams.has(areaLiveMin)) {
    const searchValue = searchParams.get(areaLiveMin);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.area_live >= Number(searchValue),
    );
  }
  if (searchParams.has(areaLiveMax)) {
    const searchValue = searchParams.get(areaLiveMax);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.area_live <= Number(searchValue),
    );
  }

  // floor
  if (searchParams.has(floorMin)) {
    const searchValue = searchParams.get(floorMin);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.floor >= Number(searchValue),
    );
  }
  if (searchParams.has(floorMax)) {
    const searchValue = searchParams.get(floorMax);
    filteredFlats = filteredFlats.filter(
      (flat) => flat.floor <= Number(searchValue),
    );
  }

  // sort
  if (sortType === 'total-price-asc') {
    filteredFlats = filteredFlats.sort((a, b) => a.price - b.price);
  }
  if (sortType === 'total-price-desc') {
    filteredFlats = filteredFlats.sort((a, b) => b.price - a.price);
  }
  if (sortType === 'square-price') {
    filteredFlats = filteredFlats.sort(
      (a, b) => a.price / a.area_total - b.price / b.area_total,
    );
  }
  if (sortType === 'area') {
    filteredFlats = filteredFlats.sort((a, b) => a.area_total - b.area_total);
  }

  return filteredFlats;
}

export function getTextForViewMoreBtn(
  viewCount: number,
  allCount: number,
): string {
  const leftCount = allCount - viewCount;
  const showMoreCount = leftCount >= countFlatsOnPage ? countFlatsOnPage : leftCount;

  // ещё 1, 21, 31, ... 101, ... квартира
  if (leftCount % 10 === 1 && leftCount % 100 !== 11)
    return `Ещё ${showMoreCount} квартира из ${allCount}`;

  // ещё 2-4, 22-24, ..., 102-104, ... квартиры
  if (leftCount % 10 >= 2 && leftCount % 10 <= 4)
    return `Ещё ${showMoreCount} квартиры из ${allCount}`;

  // other cases: ещё 5-20, 25-30, ..., 100, ... квартир
  return `Ещё ${showMoreCount} квартир из ${allCount}`;
}

export interface IFlat {
  id: number,
  floor: number,
  posOnFloor: number,
  price: number,
  rooms: number,
  areaTotal: number,
  areaKitchen: number,
  areaLive: number,
  layoutImage: string,
}

export interface ISection {
  flats: IFlat[],
}
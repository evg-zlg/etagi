import { NamesSearchParams } from '../../const/const';

export function getNewRoomsParams(
  currentParams: URLSearchParams,
  btn: string,
): URLSearchParams {
  const urlParams = currentParams;
  const params = urlParams.get(NamesSearchParams.rooms);

  // if no "rooms" in params
  if (params === null) {
    urlParams.set(NamesSearchParams.rooms, btn);
    return urlParams;
  }

  // if this btn into "rooms" params
  if (params.includes(btn)) {
    const newParams = params.split('.').filter((el) => el !== btn);
    urlParams.delete(NamesSearchParams.rooms);
    // if if was not the last param in "rooms"
    if (newParams.length !== 0) {
      urlParams.set(NamesSearchParams.rooms, newParams.sort().join('.'));
    } 
  } else {
    // if this btn no into "rooms" params
    const newParams = params.split('.');
    newParams.push(btn);
    newParams.sort();
    urlParams.set(NamesSearchParams.rooms, newParams.join('.'));
  }

  return urlParams;
}
